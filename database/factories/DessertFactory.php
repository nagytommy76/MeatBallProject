<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Dessert\Dessert;
use App\Model\Dessert\DessertImage;
use App\Model\Dessert\DessertPrice;
use Faker\Generator as Faker;

$factory->define(Dessert::class, function (Faker $faker) {
    return [
        'name' => $faker->words(5 ,true),
        'ingredients' => $faker->words(12, true),
        'price_id' => factory(DessertPrice::class)->create(),
        'image_id' => factory(DessertImage::class)->create(),
    ];
});
