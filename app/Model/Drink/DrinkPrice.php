<?php

namespace App\Model\Drink;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrinkPrice extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'drink_price';
    protected $fillable = ['price'];
}
