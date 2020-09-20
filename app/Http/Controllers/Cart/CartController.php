<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use \Illuminate\Database\QueryException;

use Auth;
use Exception;

use App\Model\Cart;

class CartController extends BaseCartController
{
    public function addFoodToCart(Request $request){
        $dataFromCard = json_decode($request->getContent());
        return $this->addElementToCart($dataFromCard);
    }

    public function getCartItemsFromSession()
    {
        if ($this->cartItems) {
            return response()->json($this->cartItems);
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
        
        $oldCart = $this->getOldCartData();

        $cart = new Cart($oldCart, true);

        $cart->removeFromCart($response->foodId, $response->selectedItemIndex);

        Session::put($this->sessionName, $cart);

        return \response()->json($cart);
    }

    public function saveOrder(){        
        try {  
            $userOrder = $this->createOrder();
            if ($userOrder && $userOrder->wasRecentlyCreated) { 
                if ($this->sendOrderEmail()) {
                    Session::forget($this->sessionName);
                }              
            }
            return \response()->json(['exception' => false]);
        } catch (Exception $ex) {
            return \response()->json(['message' => $ex->getMessage(), 'exception' => true]);
        }
    }
}


        