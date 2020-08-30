<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

use App\Mail\OrderConfirm;
use Illuminate\Support\Facades\Mail;

use Auth;

// PIZZA
use App\Model\Cart;
use App\Model\Foods\Pizzas;
use App\Model\Foods\PizzaIngredPrices;

// PASTA
use App\Model\Pasta\PastaRizotto;


class CartController extends Controller
{
    protected $sessionName;
    protected $cartItems;

    public function __construct(){
        if (Auth::user()) {           
            $this->sessionName = 'cart_'.Auth::user()->username;  
            $this->cartItems = $this->getCartItemsFromSession();         
        }
    }

    public function addFoodToCart(Request $request){
        $dataFromCard = json_decode($request->getContent());
        return $this->addElementToCart($dataFromCard);
    }

    public function getCartItemsFromSession()
    {
        if ($this->getParamsFromSession()) {
            return response()->json($this->getParamsFromSession());
        }
        return response()->json([
            'totalQty' => 0,
            'totalPrice' => 0,
            'message' => 'ok'       
        ]);
    }

    /**
    * Remove an item from cart items
    */
    public function removeItemFromCart(Request $request){
        $response = json_decode($request->getContent());
        
        $oldCart = Session::has($this->sessionName) ? $this->getParamsFromSession() : null;

        $cart = new Cart($oldCart, true);

        $cart->removeFromCart($response->foodId, $response->selectedItemIndex);

        Session::put($this->sessionName, $cart);

        return \response()->json($cart);
    }

    public function sendEmail(){
        var_dump(Auth::user()->userinfo);
        Mail::to(Auth::user()->email)->send(new OrderConfirm($this->cartItems, Auth::user()->userinfo));
    }
    

    // ========================================================================
    //                             PRIVATE FUNCTIONS
    // ========================================================================

    private function addElementToCart($dataFromCard){       
        $anyTypeOfFood = $this->getDataFromDatabaseByFoodType($dataFromCard);

        $oneFoodItem = [
            'id' => $dataFromCard->foodId,
            'foodName' => $anyTypeOfFood->name,
            'price' => intval($anyTypeOfFood->prices->price),
            'imagePath' => $anyTypeOfFood->images->image_path,
            'plusIngreds' => $this->getIngredNameAndPrice($dataFromCard)
        ];
        $oldCart = Session::has($this->sessionName) ? $this->getParamsFromSession() : null;

        $cart = new Cart($oldCart);
        $cart->addToCart($oneFoodItem, $dataFromCard->foodId, $dataFromCard->foodType);

        Session::put($this->sessionName, $cart);

        return response()->json($this->getParamsFromSession());
    }

    /** 
    * @param Array ingredientIds
    * Get Ingredient prices and return an array: ingredientName => price
    */
    private function getIngredNameAndPrice($dataFromCard){
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

    private function getIngredPriceFromDatabaseByIngredientType($foodType, $ingredId){
        switch ($foodType) {
            case 'pizza':
                return PizzaIngredPrices::where('ingredient_id','=',$ingredId)->first();
                break;
            
            default:
                return;
                break;
        }
    }

    private function getDataFromDatabaseByFoodType($dataFromCard){
        switch ($dataFromCard->foodType) {
            case 'pizza':
                return Pizzas::find($dataFromCard->foodId);
                break;
            case 'pasta' || 'rizotto':
                return PastaRizotto::find($dataFromCard->foodId);
                break;
            default:
                return;
                break;
        }
    }

    private function getParamsFromSession(){
        return Session::get($this->sessionName);
    }
}
