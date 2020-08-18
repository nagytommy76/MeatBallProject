<?php

namespace App\Model\Foods;

use Illuminate\Database\Eloquent\Model;

class PizzaImages extends Model
{
    protected $table = 'pizza_images';
    public $timestamps = false;

    protected $fillable = [
        'image_path'
    ];

    public function pizza(){
        return $this->hasOne('App\Model\Foods\Pizzas', 'pizza_id', 'id');
    }
}
