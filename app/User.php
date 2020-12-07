<?php

namespace App;

use Laravel\Sanctum\HasApiTokens;
use App\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class User extends Admin implements MustVerifyEmail
{
    use HasApiTokens;

    public function sendEmailVerificationNotification()
    {
       $this->notify(new VerifyEmail());
    }

    protected $guard = 'user';

    protected $casts = [
        'userinfo_filled' => 'boolean'
    ];

    public function userinfo(){
        return $this->hasOne("App\Model\User\Userinfo", "user_email", "email");
    }

    public function orders(){
        return $this->hasMany("App\Model\Order\Orders", 'user_email', 'email')->orderBy('created_at','DESC');
    }
}
