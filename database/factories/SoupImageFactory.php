<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Soup\SoupImage;
use Faker\Generator as Faker;

$factory->define(soupImage::class, function (Faker $faker) {
    return [
        'image_path' => "soup/teszt.jpg"
    ];
});
