<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Model\Foods\Pizzas;
use App\Model\Foods\PizzaPrice;
use App\Model\Foods\PizzaIngredPrices;

use App\Http\Resources\PizzaResource;
use App\Http\Resources\PizzaIPResource;

use App\Http\Controllers\Traits\FoodControllerHelper;

class PizzaController extends BaseFoodController
{
    use FoodControllerHelper;

    // Get all Pizza ordered by asc at page load
    public function getAllPizza(){    
        return self::getAllFood(PizzaResource::class, Pizzas::class);
    }

    public function getPizzaByOrder(Request $request){
        return self::getFoodByOrder($request, PizzaResource::class, Pizzas::class);
    }

    public function getMinMaxPrice(){
        return self::getMinMaxPrices(PizzaPrice::class);
    }

    public function searchPizzaByName(Request $request){
        return self::searchFoodByName($request, PizzaResource::class, Pizzas::class);
    }

    public function getPlusIngreds(){
        return PizzaIPResource::collection(
            PizzaIngredPrices::orderBy('price', 'asc')->get()
        );
    }
}
