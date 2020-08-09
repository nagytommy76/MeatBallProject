<?php

namespace App\Model\Foods;

use Illuminate\Database\Eloquent\Model;

class PizzaImages extends Model
{
    protected $table = 'pizza_images';
    public $timestamps = false;

    public function pizza(){
        return $this->hasOne('App\Model\Foods\Pizzas', 'pizza_id', 'id');
    }
}
