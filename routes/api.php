<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function () {
    return Auth::user();
});

Route::get('pasta', 'Foods\PastaRizottoController@test');


// List Pizzas
Route::get('pizzas', 'Foods\PizzaController@getAllPizza');
Route::get('getPizzaByOrder', 'Foods\PizzaController@getPizzaByOrder');
Route::get('getMinMaxPrice', 'Foods\PizzaController@getMinMaxPrice');
Route::get('searchPizzaByName', 'Foods\PizzaController@searchPizzaByName');
Route::get('getPlusIngreds', 'Foods\PizzaController@getPlusIngreds');

Route::post('login', 'Auth\LoginController@login');

// CART CONTROLLER
Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post('addFoodToCart','Cart\CartController@addFoodToCart');
    Route::get('getCartItemsFromSession', 'Cart\CartController@getCartItemsFromSession');
    Route::delete('removeItemFromCart', 'Cart\CartController@removeItemFromCart');
    
});

