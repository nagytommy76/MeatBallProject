<?php

namespace App\Model\Soup;

use Illuminate\Database\Eloquent\Model;

class SoupPrice extends Model
{
    public $timestamps = false;
    protected $table = 'soup_price';
    protected $fillable = ['price'];
}
