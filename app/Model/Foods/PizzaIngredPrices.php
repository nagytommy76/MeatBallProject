<?php

namespace App\Model\Foods;

use Illuminate\Database\Eloquent\Model;

class PizzaIngredPrices extends Model
{
    public $timestamps = false;

    protected $table = 'ingredient_price';

    protected $casts = [
        'price' => 'integer'
    ];

    public function ingredients(){
        return $this->hasOne('App\Model\Foods\PizzaIngredients', 'id', 'ingredient_id');
    }
}
