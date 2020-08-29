<?php

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

// Route::middleware('auth:sanctum')->post('/userInfoFilled', function () {
//     return response()->json(Auth::user());
// });

Route::get('pastas', 'Foods\PastaRizottoController@getAllPasta');
Route::post('getPastaByOrder', 'Foods\PastaRizottoController@getPastaByOrder');
Route::post('getPastaByName', 'Foods\PastaRizottoController@getPastaByName');
Route::get('getPastaMinMaxPrice', 'Foods\PastaRizottoController@getMinMaxPrice');


// List Pizzas
Route::get('pizzas', 'Foods\PizzaController@getAllPizza');
Route::get('getPizzaByOrder', 'Foods\PizzaController@getPizzaByOrder');
Route::get('getMinMaxPrice', 'Foods\PizzaController@getMinMaxPrice');
Route::get('searchPizzaByName', 'Foods\PizzaController@searchPizzaByName');
Route::get('getPlusIngreds', 'Foods\PizzaController@getPlusIngreds');

Route::post('login', 'Auth\LoginController@login');

// CART CONTROLLER
Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post('addUserInfo', 'UserControllers\UserInfoController@apiStrore');
    Route::get('userInfoFilled', function(){
        return response()->json(['user' => Auth::user(), 'userInfo' => Auth::user()->userinfo]);
    });

    Route::post('addFoodToCart','Cart\CartController@addFoodToCart');
    Route::get('getCartItemsFromSession', 'Cart\CartController@getCartItemsFromSession');
    Route::delete('removeItemFromCart', 'Cart\CartController@removeItemFromCart');
    
});

