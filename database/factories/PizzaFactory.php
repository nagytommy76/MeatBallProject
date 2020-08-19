<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Foods\Pizzas;
use Faker\Generator as Faker;

$factory->define(Pizzas::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        
    ];
});
