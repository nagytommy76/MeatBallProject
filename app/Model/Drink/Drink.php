<?php

namespace App\Model\Drink;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function images(){
        return $this->hasOne('App\Model\Drink\DrinkImage', 'id', 'image_id');
    }

    public function prices(){
        return $this->hasOne('App\Model\Drink\DrinkPrice', 'id', 'price_id');
    }
    
    public static function boot() {
        parent::boot();

        static::deleting(function($drink) {
            $drink->images()->delete();
            $drink->prices()->delete();             
        });
    }
}
