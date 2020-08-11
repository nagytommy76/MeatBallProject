<?php
namespace App\Http\Controllers\Traits;

use Exception;

use Illuminate\Database\Eloquent\Builder;


trait FoodControllerHelper{

    public static function getAllFood($resource, $foodModel){
        return $resource::collection($foodModel::get()->sortBy( function($q){
            return $q->prices->price;
        })->all());
    }

    public static function getFoodByOrder($request, $foodResource, $foodModel){
        $food = self::getFoodByPrice($foodModel, $request->minPrice, $request->maxPrice);

        if ($request->orderBy == 'asc') {
            return $foodResource::collection($food->sortBy(
                function($q){
                    return $q->prices->price;
                }
            ));
        }else{
            return $foodResource::collection($food->sortByDesc(
                function($q){
                    return $q->prices->price;
                }
            ));
        }
    }

    public static function getMinMaxPrice($foodPriceModel){
        return response()->json([
            'minPrice' => $foodPriceModel::min('price'),
            'maxPrice' => $foodPriceModel::max('price')
        ]);
    }

    private static function getFoodByPrice($foodModel, $minPrice, $maxPrice){
        return $foodModel::whereHas('prices', function(Builder $query) use($minPrice, $maxPrice) {
            $query->whereBetween('price', [$minPrice, $maxPrice]);
        })->get();
    }

}


