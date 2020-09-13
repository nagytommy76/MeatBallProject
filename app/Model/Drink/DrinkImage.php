<?php

namespace App\Model\Drink;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrinkImage extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['image_path'];
}
