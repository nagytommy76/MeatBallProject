<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Soup\Soup;
use App\Model\Soup\SoupPrice;
use App\Model\Soup\SoupImage;

use Faker\Generator as Faker;

$factory->define(Soup::class, function (Faker $faker) {
    return [
        'name' => $faker->words(4 ,true),
        'ingredients' => $faker->words(12, true),
        'price_id' => factory(SoupPrice::class)->create(),
        'image_id' => factory(SoupImage::class)->create(),
        
    ];
});
