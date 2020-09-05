<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\DessertResource;
use App\Model\Dessert\Dessert;
use App\Model\Dessert\DessertPrice;

class DessertController extends BaseFoodController
{
    public function getAllDessert(){
        return self::getAllFood(DessertResource::class, Dessert::class);
    }

    public function getDessertByOrder(Request $request){
        return self::getFoodByOrder($request, DessertResource::class, Dessert::class);
    }

    public function getDessertByName(Request $request){
        return self::searchFoodByName($request, DessertResource::class, Dessert::class);
    }

    public function getDessertMinMaxPrice(){
        return self::getMinMaxPrices(DessertPrice::class);
    }
}
