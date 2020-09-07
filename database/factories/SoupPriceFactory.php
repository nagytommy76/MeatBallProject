<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Soup\SoupPrice;
use Faker\Generator as Faker;

$factory->define(SoupPrice::class, function (Faker $faker) {
    return [
        'price' => $faker->numberBetween(500, 7900)
    ];
});
