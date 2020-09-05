<?php

namespace App\Model\Dessert;

use Illuminate\Database\Eloquent\Model;

class DessertImage extends Model
{
    public $timestamps = false;
    protected $fillable = ['image_path'];
}
