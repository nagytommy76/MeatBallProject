<?php

namespace App\Model\Dessert;

use Illuminate\Database\Eloquent\Model;

class Dessert extends Model
{
    public $timestamps = false;

    public function images(){
        return $this->hasOne('App\Model\Dessert\DessertImage', 'id', 'image_id');
    }

    public function prices(){
        return $this->hasOne('App\Model\Dessert\DessertPrice', 'id', 'price_id');
    }
    
    public static function boot() {
        parent::boot();

        static::deleting(function($dessert) {
            $dessert->images()->delete();
            $dessert->prices()->delete();             
        });
    }
}
