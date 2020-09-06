<?php

namespace App\Model\Meal;

use Illuminate\Database\Eloquent\Model;

class MealPrice extends Model
{
    public $timestamps = false;
    protected $table = 'meal_price';
    protected $fillable = ['price'];
}
