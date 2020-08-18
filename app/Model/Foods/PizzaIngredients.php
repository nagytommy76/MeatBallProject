<?php

namespace App\Model\Foods;

use Illuminate\Database\Eloquent\Model;

class PizzaIngredients extends Model
{
    protected $table = 'pizza_ingredients';

    public $timestamps = false;

    protected $hidden = [
        'pivot'
    ];

    protected $fillable = [
        'ingredient'
    ];

    public function ingredPrices(){
        return $this->belongsTo('App\Model\Foods\PizzaIngredPrices', 'id', 'ingredient_id');
    }
}
