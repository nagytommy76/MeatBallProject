<?php

namespace App\Model\Pasta;

use Illuminate\Database\Eloquent\Model;

class PastaRizottoPrice extends Model
{
    protected $table = 'pasta_and_rizotto_price';
    public $timestamps = false;

    protected $fillable = [
        'price'
    ];
}
