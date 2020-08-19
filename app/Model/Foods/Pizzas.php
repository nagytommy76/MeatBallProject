<?php

namespace App\Model\Foods;

use Illuminate\Database\Eloquent\Model;

class Pizzas extends Model
{
    protected $table = 'pizzas';
    public $timestamps = false;

    public function ingredients(){
        return $this->belongsToMany('App\Model\Foods\PizzaIngredients','pivot_pizza_ingredients','pizza_id','ingredient_id');
    }

    public function images(){
        return $this->hasOne('App\Model\Foods\PizzaImages','id','image_id');
    }

    public function prices(){
        return $this->belongsTo('App\Model\Foods\PizzaPrice','price_id','id')->orderBy('price','ASC');
    }

    public static function boot() {
        parent::boot();

        static::deleting(function($pizza) {
            $pizza->images()->delete();
            $pizza->prices()->delete();             
        });
    }
}
