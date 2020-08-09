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

class PizzaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        return view('foods.pizza');
    }

    // Get all Pizza ordered by asc at page load
    public function getAllPizza(){    
        return PizzaResource::collection(Pizzas::get()->sortBy( function($q){
            return $q->prices->price;
        })->all());
    }

    public function getPizzaByOrder(Request $request){
        $pizza = $this->getPizzasByPrice($request->minPrice, $request->maxPrice);

        if ($request->orderBy == 'asc') {
            return PizzaResource::collection($pizza->sortBy(
                function($q){
                    return $q->prices->price;
                }
            ));
        }else{
            return PizzaResource::collection($pizza->sortByDesc(
                function($q){
                    return $q->prices->price;
                }
            ));
        }
    }

    public function getMinMaxPrice(){
       return response()->json([
        'minPrice' => PizzaPrice::min('price'),
        'maxPrice' => PizzaPrice::max('price')
       ]);
    }

    public function getPlusIngreds(){
        return PizzaIPResource::collection(
            PizzaIngredPrices::orderBy('price', 'asc')->get()
        );
    }

    public function searchPizzaByName(Request $request){
        return PizzaResource::collection(Pizzas::where('name', 'LIKE', "%$request->name%")->paginate(10));
    }

    private function getPizzasByPrice($minPrice, $maxPrice){
        return Pizzas::whereHas('prices', function(Builder $query) use($minPrice, $maxPrice) {
            $query->whereBetween('price', [$minPrice, $maxPrice]);
        })->get();
    }

}
