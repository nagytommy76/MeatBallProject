<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use Auth;
use App\User;

use Illuminate\Support\Facades\Hash;

class LoginController extends BaseAuthController
{   
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }    

    public function login(Request $request){
        $formData = $request->all()['formData'];
        $valid = $this->validator($formData);

        if ($valid->fails()) {
            return $this->jsonResponse($valid->errors());
        }
        try {
            $this->revokeUserToken($formData['email']);
        
            $user = User::where('email','like', $formData['email'])->where('email_verified_at', '<>', 'NULL')->first();
            if (!$user) {
                return $this->jsonResponse(['email' => ['Kérem aktiválja az e-mail címét!']]);
            }else{
                if (Hash::check($formData['password'], $user->password)) {
                    $this->loginUserGetAccessToken($user, $formData['remember']);
                    return $this->jsonResponse($valid->errors(), $user->username);
                }else{
                    return $this->jsonResponse(['password' => ['A jelszó nem megfelelő']]);
                }
            }
        } catch (Exception $ex) {
            return $this->jsonResponse($valid->errors(),null,$ex->getMessage());
        }
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
        return \response()->json(['message' =>'Sikeres kilépés']);
    }


    // |-----------------------------------------------------
    // |        PRIVATE / PROTECTED FUNCTIONS
    // |-----------------------------------------------------

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    private function validator(array $data){
        return Validator::make($data, [
            'email' => ['required', 'string', 'email', 'exists:users'],
            'password' => ['required', 'string', 'min:6']
        ]);
    }
    
    /**
    * Revoke all user's accessTokens 
    * @param String $userEmail
    * @return Int number of deleted items from personal_access_tokens table
    */
    private function revokeUserToken(string $userEmail){
        $user = $this->getUserByEmail($userEmail);
        return $user->tokens()->where('tokenable_id', $userEmail)->delete();  
    }

    /**
    * Find a user by email
    *   @param userEmail
    *   @return User Model
    */
    private function getUserByEmail(string $email)
    {
        return User::where('email','like',$email)->first();
    }

}