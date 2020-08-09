<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

// ADMINS
Route::prefix('admin')->group(function() {
    Route::middleware(['guest'])->get('/login', 'AdminsControllers\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'AdminsControllers\AdminLoginController@login')->name('admin.login.submit');

    // Show Pizza Manager....
    Route::get('/pizza', 'AdminsControllers\AdminPizzaController@index')->name('admin.pizza');

    // Input Foods
    Route::post('/foodInput', 'AdminsControllers\AdminPizzaController@foodInput')->name('admin.foodInput');
    // Input Pizza Ingredients
    Route::post('/storePizzaIngredients', 'AdminsControllers\AdminPizzaController@storePizzaIngredients')->name('admin.storePizzaIngredients');   
    
    // Delete Pizza
    Route::delete('/deletePizza', 'AdminsControllers\AdminPizzaController@deletePizza')->name('admin.deletePizza');

    // Modify Pizza
    Route::patch('/showModifyPizza', 'AdminsControllers\AdminPizzaController@showModifyPizza')->name('admin.showModifyPizza');
    Route::patch('/modifyPizza', 'AdminsControllers\AdminPizzaController@modifyPizza')->name('admin.modifyPizza');

    Route::resource('/pasta', 'AdminsControllers\AdminPastaController');
});



Route::get('/', function () {
    return view('welcome');
})->name('home');

// Route::get('getTokenForUser', 'Auth\LoginController@getTokenForUser');
// Users Controller

Route::resource('/userinfo', 'UserControllers\UserInfoController');

// Foods Pizza

Route::get('/pizza', 'Foods\PizzaController@index')->name('pizza.index');


Route::get('/login' , 'Auth\LoginController@showLoginForm')->name('login');
// Route::post('/login' , 'Auth\LoginController@login')->name('login.submit');

Route::get('/logout' , 'Auth\LoginController@logout')->name('user.logout');
