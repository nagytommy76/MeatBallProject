<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Database\Eloquent\Builder;

use App\Model\Foods\Pizzas;
use App\Model\Foods\PizzaIngredients;
use App\Model\Foods\PivotPI;
use App\Model\Foods\PizzaImages;
use App\Model\Foods\PizzaPrice;
use App\Model\Foods\PizzaIngredPrices;

use App\Http\Resources\PizzaResource;
use App\Http\Resources\PizzaIPResource;

use App\Http\Controllers\Traits\FoodControllerHelper;

class PizzaController extends Controller
{
    use FoodControllerHelper;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function index()
    // { 
    //     return view('foods.foods');
    // }

    // Get all Pizza ordered by asc at page load
    public function getAllPizza(){    
        return FoodControllerHelper::getAllFood(PizzaResource::class, Pizzas::class);
    }

    public function getPizzaByOrder(Request $request){
        return FoodControllerHelper::getFoodByOrder($request, PizzaResource::class, Pizzas::class);
    }

    public function getMinMaxPrice(){
        return FoodControllerHelper::getMinMaxPrice(PizzaPrice::class);
    }

    public function searchPizzaByName(Request $request){
        return FoodControllerHelper::searchFoodByName($request, PizzaResource::class, Pizzas::class);
    }

    public function getPlusIngreds(){
        return PizzaIPResource::collection(
            PizzaIngredPrices::orderBy('price', 'asc')->get()
        );
    }
}
