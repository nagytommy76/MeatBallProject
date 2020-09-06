<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\MealResource;
use App\Model\Meal\Meal;
use App\Model\Meal\MealPrice;

class MealController extends BaseFoodController
{
    public function getAllMeal(){
        return self::getAllFood(MealResource::class, Meal::class);
    }

    public function getMealByOrder(Request $request){
        return self::getFoodByOrder($request, MealResource::class, Meal::class);
    }

    public function getMealByName(Request $request){
        return self::searchFoodByName($request, MealResource::class, Meal::class);
    }

    public function getMinMaxPrice(){
        return self::getMinMaxPrices(MealPrice::class);
    }
}
