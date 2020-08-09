<?php

namespace App;

use Laravel\Sanctum\HasApiTokens;

class User extends Admin
{
    use HasApiTokens;

    protected $guard = 'user';
}
