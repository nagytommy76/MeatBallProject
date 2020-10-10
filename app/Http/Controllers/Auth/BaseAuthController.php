<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use Auth;
use App\User;

class BaseAuthController extends Controller
{
    /**
    * Where to redirect users after login.
    *
    * @var string
    */
    protected $redirectTo = '/';

    /**
    * Log the user in and return the accessToken
    * @param User $user
    * @return String $accessToken
    */
    protected function loginUserGetAccessToken(User $user){
        Auth::guard()->login($user);
        return $user->createToken('accessToken')->plainTextToken;
    }

    protected function jsonResponse($hasError, $accessToken = null, $userName = "", $exception = null){
        return response()->json(['accessToken' => $accessToken, 'username' => $userName,'hasError' => $hasError, 'exception' => $exception]);
    }
}
