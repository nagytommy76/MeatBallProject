<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

use App\Model\Pasta\PastaRizotto;
use App\Model\Foods\Pizzas;
use App\Model\Soup\Soup;
use App\Model\Dessert\Dessert;
use App\Model\Meal\Meal;
use App\Model\Drink\Drink;

use App\Model\Foods\PizzaIngredPrices;



use App\Model\Cart;

use App\Model\Order\Orders;
use Auth;

class BaseCartController extends Controller
{
    protected $sessionName;
    protected $cartItems;

    public function __construct(){
        if (Auth::user()) {           
            $this->sessionName = 'cart_'.Auth::user()->username;  
            $this->cartItems = $this->getParamsFromSession();         
        }
    }

    protected function generateOrderNumber($min = 0, $max = 9999999999){
        return rand($min, $max);
    }

    protected function checkNumberInOrders(){
        $number = $this->generateOrderNumber();
        $order = Orders::where('orderNumber', '=', $number)->get();
        if (count($order) > 0) {
            $number = $this->generateOrderNumber();
        }
        return $number;
    }

    protected function addElementToCart($dataFromCard){       
        $anyTypeOfFood = $this->getDataFromDatabaseByFoodType($dataFromCard);

        $oneFoodItem = [
            'id' => $dataFromCard->foodId,
            'foodName' => $anyTypeOfFood->name,
            'price' => intval($anyTypeOfFood->prices->price),
            'imagePath' => $anyTypeOfFood->images->image_path,
            'plusIngreds' => $this->getIngredNameAndPrice($dataFromCard)
        ];
        $oldCart = $this->getOldCartData();

        $cart = new Cart($oldCart);
        $cart->addToCart($oneFoodItem, $dataFromCard->foodId, $dataFromCard->foodType);

        Session::put($this->sessionName, $cart);

        return response()->json($this->getParamsFromSession());
    }

    protected function getDataFromDatabaseByFoodType($dataFromCard){
        switch ($dataFromCard->foodType) {
            case 'pizza':
                return Pizzas::find($dataFromCard->foodId);
                break;
            case 'soup':
                return Soup::find($dataFromCard->foodId);
                break;
            case 'dessert':
                return Dessert::find($dataFromCard->foodId);
                break;
            case 'meal':
                return Meal::find($dataFromCard->foodId);
                break;
            case 'drink':
                return Drink::find($dataFromCard->foodId);
                break;
            case 'pasta' || 'rizotto':
                return PastaRizotto::find($dataFromCard->foodId);
                break;
            default:
                return;
        }
    }

    /** 
    * @param Array ingredientIds
    * Get Ingredient prices and return an array: ingredientName => price
    */
    protected function getIngredNameAndPrice($dataFromCard){
        if(empty($dataFromCard->plusIngreds)) return;

        $result = ['totalIngredPrice' => 0];
        foreach ($dataFromCard->plusIngreds as $ingredId) {
            
            $foundPrice = $this->getIngredPriceFromDatabaseByIngredientType($dataFromCard->foodType, $ingredId);
            $temp = [
                'ingredId' => $foundPrice->ingredient_id,
                'ingredPrice' => $foundPrice->price,
                'ingredName' => $foundPrice->ingredients->ingredient
            ];
            $result['totalIngredPrice'] += $foundPrice->price;
            array_push($result,$temp);
        }
        return $result;
    }

    protected function getIngredPriceFromDatabaseByIngredientType($foodType, $ingredId){
        switch ($foodType) {
            case 'pizza':
                return PizzaIngredPrices::where('ingredient_id','=',$ingredId)->first();
                break;            
            default:
                return;
                break;
        }
    }

    protected function getParamsFromSession(){
        return Session::get($this->sessionName);
    }

    protected function getOldCartData(){
        return Session::has($this->sessionName) ? $this->cartItems : null;
    }
}
