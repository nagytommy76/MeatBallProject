<?php

namespace App;

use Laravel\Sanctum\HasApiTokens;

class User extends Admin
{
    use HasApiTokens;

    protected $guard = 'user';

    protected $casts = [
        'userinfo_filled' => 'boolean'
    ];

    public function userinfo(){
        return $this->hasOne("App\Model\User\Userinfo", "user_email", "email");
    }
}
