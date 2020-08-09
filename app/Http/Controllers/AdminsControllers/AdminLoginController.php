<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Auth;

class AdminLoginController extends Controller
{
    public function __construct(){
        // Csak azok akik nem adminként vannak belépve...
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

        // attemt to log the user in
        if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
            // if success, redirect to their intented location
            return redirect('admin/pizza');
        }        

        // if unsuccessfull, then redirect back to the login with the form data
        return redirect()->back()->withErrors($valid)->withInput();

    }
}
