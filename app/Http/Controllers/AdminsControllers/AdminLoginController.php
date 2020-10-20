<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
// use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Auth;

class AdminLoginController extends Controller
{
    // use AuthenticatesUsers;
    public function __construct(){
        $this->middleware('guest:admin');
    }

    public function showLoginForm()
    {
        return view('admin.auth.admin-login');   
    }

    public function login(Request $request){
        $valid = Validator::make($request->all(), [
            'email' => ['required', 'email', 'exists:admins'],
            'password' => ['required', 'min:6']
        ], [
           'email.exists' => 'Helytelen Email cím'
        ]);
        if ($valid->fails()) {
            return redirect('admin/login')->withErrors($valid)->withInput($request->all());
        }

        if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
            return redirect('admin/pizza');
        }        
        return redirect()->back()->withErrors($valid)->withInput();
    }

    public function adminLogout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate(); 

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
