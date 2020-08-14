<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Exception;
use Illuminate\Database\Eloquent\Builder;

class BaseFoodController extends Controller
{
    
    /**
    * @param FoodResource
    * @param FoodModel
    * @return Resource collection
    */
    protected static function getAllFood($resource, $foodModel){
        return $resource::collection($foodModel::get()->sortBy( function($q){
            return $q->prices->price;
        })->all());
    }

    protected static function getFoodByOrder($request, $foodResource, $foodModel){
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

    protected static function getMinMaxPrices($foodPriceModel){
        return response()->json([
            'minPrice' => $foodPriceModel::min('price'),
            'maxPrice' => $foodPriceModel::max('price')
        ]);
    }

    protected static function searchFoodByName($request, $foodResource, $foodModel){
        return $foodResource::collection($foodModel::where('name', 'LIKE', "%$request->name%")->paginate(10));
    }

    private static function getFoodByPrice($foodModel, $minPrice, $maxPrice){
        return $foodModel::whereHas('prices', function(Builder $query) use($minPrice, $maxPrice) {
            $query->whereBetween('price', [$minPrice, $maxPrice]);
        })->get();
    }
}
