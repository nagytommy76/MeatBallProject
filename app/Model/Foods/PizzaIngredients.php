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
}
