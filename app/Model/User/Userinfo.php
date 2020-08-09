<?php

namespace App\Model\User;

use Illuminate\Database\Eloquent\Model;

class Userinfo extends Model
{
    protected $table = 'userinfo';

    protected $primaryKey = 'phone';

    public $incrementing = false;

    protected $keyType = 'string';

    public $timestamps = false;
}
