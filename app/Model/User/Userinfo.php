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

    protected $fillable = [
        'user_email',
        'firstName',
        'lastName',
        'city',
        'zipCode',
        'street',
        'houseNumber',
        'floorDoor',
        'phone',
        'userinfo_filled',
    ];
}
