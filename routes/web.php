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

    Route::delete('/deleteIngred', 'AdminsControllers\AdminPizzaController@deleteIngred')->name('admin.deleteIngred');



    // Modify Pizza
    Route::patch('/showModifyPizza', 'AdminsControllers\AdminPizzaController@showModifyPizza')->name('admin.showModifyPizza');
    Route::patch('/{id}/modifyPizza', 'AdminsControllers\AdminPizzaController@modifyPizza')->name('admin.modifyPizza');


    // PASTA -------------------------------------------------------------

    Route::get('/pasta', 'AdminsControllers\AdminPastaController@index')->name('pasta.index');
    Route::post('/pasta/store', 'AdminsControllers\AdminPastaController@store')->name('pasta.store');

    Route::patch('/pasta/edit', 'AdminsControllers\AdminPastaController@edit')->name('pasta.edit');
    Route::patch('/pasta/{id}/update', 'AdminsControllers\AdminPastaController@update')->name('pasta.update');


    Route::delete('/pasta/delete', 'AdminsControllers\AdminPastaController@destroy')->name('pasta.destroy');

});

Route::get('/', function () {
    return view('welcome');
})->name('home');


// Users Controller

Route::resource('/userinfo', 'UserControllers\UserInfoController');


Route::get('/pizza', function () {
    return view('foods.foods');
})->name('pizza');


Route::get('/login' , 'Auth\LoginController@showLoginForm')->name('login');

Route::get('/logout' , 'Auth\LoginController@logout')->name('user.logout');
