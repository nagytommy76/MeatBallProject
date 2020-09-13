<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\DrinkResource;
use App\Model\Drink\Drink;
use App\Model\Drink\DrinkPrice;

class DrinkController extends BaseFoodController
{
    public function getAllDrinks(){
        return self::getAllFood(DrinkResource::class, Drink::class);
    }

    public function getDrinksByOrder(Request $request){
        return self::getFoodByOrder($request, DrinkResource::class, Drink::class);
    }

    public function getDrinkByName(Request $request){
        return self::searchFoodByName($request, DrinkResource::class, Drink::class);
    }

    public function getDrinkMinMaxPrice(){
        return self::getMinMaxPrices(DrinkPrice::class);
    }
}
