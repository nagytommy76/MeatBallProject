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
    protected function loginUserGetAccessToken(User $user, $remember){
        Auth::guard('web')->login($user, $remember);
        return $user->createToken('accessToken')->plainTextToken;
    }

    protected function jsonResponse($hasError, $userName = "", $exception = null){
        return response()->json(['username' => $userName,'hasError' => $hasError, 'exception' => $exception]);
    }
}
