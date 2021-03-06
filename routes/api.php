<?php

use Illuminate\Support\Facades\Route;

Route::post('register', 'Auth\RegisterController@register');

Route::post('/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
Route::get('/email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout');

Route::get('pastas', 'Foods\PastaRizottoController@getAllPasta');
Route::post('getPastaByOrder', 'Foods\PastaRizottoController@getPastaByOrder');
Route::post('getPastaByName', 'Foods\PastaRizottoController@getPastaByName');
Route::get('getPastaMinMaxPrice', 'Foods\PastaRizottoController@getMinMaxPrice');


// List Pizzas
Route::get('pizzas', 'Foods\PizzaController@getAllPizza');
Route::post('getPizzaByOrder', 'Foods\PizzaController@getPizzaByOrder');
Route::get('getMinMaxPrice', 'Foods\PizzaController@getMinMaxPrice');
Route::post('searchPizzaByName', 'Foods\PizzaController@searchPizzaByName');
Route::get('getPlusIngreds', 'Foods\PizzaController@getPlusIngreds');

// Soups
Route::get('soup', 'Foods\SoupController@getAllSoup');
Route::post('getSoupByOrder', 'Foods\SoupController@getSoupByOrder');
Route::post('getSoupByName', 'Foods\SoupController@getSoupByName');
Route::get('getSoupMinMaxPrice', 'Foods\SoupController@getMinMaxPrice');

// Desserts
Route::get('dessert', 'Foods\DessertController@getAllDessert');
Route::post('getDessertByOrder', 'Foods\DessertController@getDessertByOrder');
Route::post('getDessertByName', 'Foods\DessertController@getDessertByName');
Route::get('getDessertMinMaxPrice', 'Foods\DessertController@getDessertMinMaxPrice');

// Meals
Route::get('meal', 'Foods\MealController@getAllMeal');
Route::post('getMealByOrder', 'Foods\MealController@getMealByOrder');
Route::post('getMealByName', 'Foods\MealController@getMealByName');
Route::get('getMealMinMaxPrice', 'Foods\MealController@getMinMaxPrice');

// Drinks
Route::get('drink', 'Foods\DrinkController@getAllDrinks');
Route::post('getDrinksByOrder', 'Foods\DrinkController@getDrinksByOrder');
Route::post('getDrinkByName', 'Foods\DrinkController@getDrinkByName');
Route::get('getDrinkMinMaxPrice', 'Foods\DrinkController@getDrinkMinMaxPrice');

// CART CONTROLLER
Route::group(['middleware' => ['auth:sanctum', 'verified']], function(){
    Route::post('addUserInfo', 'UserControllers\UserInfoController@apiStrore');
    Route::get('userInfoFilled', 'UserControllers\UserInfoController@getUserData');
    Route::post('updateUserInfo', 'UserControllers\UserInfoController@apiUpdate');
    Route::get('myOrders', 'UserControllers\UserInfoController@getUserOrders');

    Route::post('addFoodToCart','Cart\CartController@addFoodToCart');
    Route::get('getCartItemsFromSession', 'Cart\CartController@getCartItemsFromSession');
    Route::delete('removeItemFromCart', 'Cart\CartController@removeItemFromCart');

    // Sending order E-mail
    Route::post('/saveOrder', 'Cart\CartController@saveOrder');
});