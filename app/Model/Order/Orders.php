<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $fillable = [
        'user_email',
        'cartItems',
        'orderNumber',
        'with_paypal',
        'transaction_id',
    ];
}
