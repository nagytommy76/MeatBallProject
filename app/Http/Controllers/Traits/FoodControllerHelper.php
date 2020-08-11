<?php
namespace App\Http\Controllers\Traits;

use Exception;


trait FoodControllerHelper{

    public static function getAllFood($resource, $foodModel){
        return $resource::collection($foodModel::get()->sortBy( function($q){
            return $q->prices->price;
        })->all());
    }

    public static function getMinMaxPrice($foodPriceModel){
        return response()->json([
            'minPrice' => $foodPriceModel::min('price'),
            'maxPrice' => $foodPriceModel::max('price')
        ]);
    }

}


