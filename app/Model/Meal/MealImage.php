<?php

namespace App\Model\Meal;

use Illuminate\Database\Eloquent\Model;

class MealImage extends Model
{
    public $timestamps = false;
    protected $fillable = ['image_path'];
}
