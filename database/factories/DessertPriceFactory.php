<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Dessert\DessertPrice;
use Faker\Generator as Faker;

$factory->define(DessertPrice::class, function (Faker $faker) {
    return [
        'price' => $faker->numberBetween(500, 7900),
    ];
});
