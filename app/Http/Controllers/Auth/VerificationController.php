<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\Events\Verified;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;
use App\User;
// use Illuminate\Foundation\Auth\EmailVerificationRequest;

class VerificationController extends BaseAuthController
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth:sanctum');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    /**
     * Mark the authenticated user's email address as verified.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
     public function verify(Request $request)
     {
        $user = User::findOrFail($request->id);
        if (! hash_equals((string) $request->route('hash'), sha1($user->getEmailForVerification()))) {
            throw new AuthorizationException;
        }
 
        if ($user->hasVerifiedEmail()) {
        //    return response()->json(['verified' => false, 'message' => 'Az E-mail cím már regisztrálva van']);
        return redirect(url('meatball/login',['validationSuccess' => true, 'message' => 'Már regisztrálta e-mail címét! Be tud lépni.']));
        }
 
        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }
        // return response()->json(['verified' => true]);
        // return \url('')
        return redirect(url('meatball/login',['validationSuccess' => true, 'message' => 'A validáció sikeres volt! Mostantól be tud jelentkezni']));
     }

    /**
     * Resend the email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse
     */
     public function resend(Request $request)
     {
         if ($request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'E-mail már el lett küldve']);
         }
 
         $request->user()->sendEmailVerificationNotification();
 
        return response()->json(['message' => 'E-mail elküldve ']);
     }
}
