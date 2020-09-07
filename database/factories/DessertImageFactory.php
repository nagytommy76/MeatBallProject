<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Dessert\DessertImage;
use Faker\Generator as Faker;

$factory->define(DessertImage::class, function (Faker $faker) {
    return [
        'image_path' => 'dessert/teszt.jpg'
    ];
});
