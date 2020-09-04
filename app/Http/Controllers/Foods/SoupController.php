<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\SoupResource;
use App\Model\Soup\Soup;
use App\Model\Soup\SoupPrice;

class SoupController extends BaseFoodController
{
    public function getAllSoup(){
        return self::getAllFood(SoupResource::class, Soup::class);
    }

    public function getMinMaxPrice(){
        return self::getMinMaxPrices(SoupPrice::class);
    }

    public function getSoupByOrder(Request $request){
        return self::getFoodByOrder($request, SoupResource::class, Soup::class);
    }

    public function getSoupByName(Request $request){
        return self::searchFoodByName($request, SoupResource::class, Soup::class);
    }
}
