<?php

namespace App\Model\Dessert;

use Illuminate\Database\Eloquent\Model;

class DessertPrice extends Model
{
    public $timestamps = false;
    protected $table = 'dessert_price';
    protected $fillable = ['price'];
}
