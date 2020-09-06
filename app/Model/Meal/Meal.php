<?php

namespace App\Model\Meal;

use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    public $timestamps = false;

    public function images(){
        return $this->hasOne('App\Model\Meal\MealImage', 'id', 'image_id');
    }

    public function prices(){
        return $this->hasOne('App\Model\Meal\MealPrice', 'id', 'price_id');
    }
    
    public static function boot() {
        parent::boot();

        static::deleting(function($meal) {
            $meal->images()->delete();
            $meal->prices()->delete();             
        });
    }
}
