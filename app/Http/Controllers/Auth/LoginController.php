<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Auth;
use App\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    // use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return view('auth.login');   
    }
    

    public function login(Request $request){
        $formData = json_decode($request->getContent())->formData;

        $valid = Validator::make($request->all()['formData'], [
            'email' => ['required', 'email', 'exists:users'],
            'password' => ['required', 'min:6']
        ]);
        if ($valid->fails()) {
            return \response()->json(['accessToken' => null,'hasError' => $valid->errors()]);
        }
        
        // attemt to log the user in
        if (Auth::attempt(['email' => $formData->email, 'password' => $formData->password])) {
            $this->revokeUserToken(Auth::user()->email);

            $accessToken = Auth::user()->createToken('accessToken')->plainTextToken;

            return \response()->json(['accessToken' => $accessToken,'hasError' => $valid->errors()]);
        }
        return \response()->json(['accessToken' => null,'hasError' => ['password' => ['A jelszó nem megfelelő']]]);      
    }

    /**
    * Log the user out of the application.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
    public function logout(Request $request){
        if (Auth::user()) {
            $this->revokeUserToken(Auth::user()->email);
        }
        
        Auth::guard('web')->logout();
        
        $request->session()->invalidate(); 

        $request->session()->regenerateToken();

        return \redirect()->route('home');

    }


    // |-----------------------------------------------------
    // |        PRIVATE / PROTECTED FUNCTIONS
    // |-----------------------------------------------------

    /**
    * Revoke all user's accessTokens 
    * @param String $userEmail
    * @return Int number of deleted items from personal_access_tokens table
    */
    private function revokeUserToken($userEmail){
        $user = $this->getUserByEmail($userEmail);
        return $user->tokens()->where('tokenable_id', $userEmail)->delete();
        
    }

    /**
    * Find a user by email
    *   @param userEmail
    *   @return User Model
    */
    protected function getUserByEmail($email)
    {
        return User::where('email','like',$email)->first();
    }

}