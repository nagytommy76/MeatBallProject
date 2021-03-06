<?php

use Illuminate\Support\Facades\Route;

// ADMINS
Route::prefix('admin')->group(function() {
    Route::middleware(['guest'])->get('/login', 'AdminsControllers\AdminLoginController@showLoginForm' )->name('admin.login');
    Route::post('/login/submit', 'AdminsControllers\AdminLoginController@login')->name('admin.login.submit');
    Route::get('/logout' , 'AdminsControllers\AdminLoginController@adminLogout')->name('admin.logout');

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
    Route::prefix('pasta')->group(function() {
        Route::get('/', 'AdminsControllers\AdminPastaController@index')->name('pasta.index');
        Route::post('/store', 'AdminsControllers\AdminPastaController@store')->name('pasta.store');

        Route::patch('/edit', 'AdminsControllers\AdminPastaController@edit')->name('pasta.edit');
        Route::patch('/{id}/update', 'AdminsControllers\AdminPastaController@update')->name('pasta.update');

        Route::delete('/delete', 'AdminsControllers\AdminPastaController@destroy')->name('pasta.destroy');
    });

    Route::prefix('soup')->group(function() {
        Route::get('/', 'AdminsControllers\AdminSoupController@index')->name('soup.index');
        Route::post('/store', 'AdminsControllers\AdminSoupController@store')->name('soup.store');
        Route::patch('/edit', 'AdminsControllers\AdminSoupController@edit')->name('soup.edit');
        Route::patch('/{id}/update', 'AdminsControllers\AdminSoupController@update')->name('soup.update');
        Route::delete('/destroy', 'AdminsControllers\AdminSoupController@destroy')->name('soup.destroy');
    });

    // Desserts
    Route::prefix('dessert')->group(function(){
        Route::get('/', 'AdminsControllers\AdminDessertController@index')->name('dessert.index');
        Route::post('/store', 'AdminsControllers\AdminDessertController@store')->name('dessert.store');
        Route::patch('/edit', 'AdminsControllers\AdminDessertController@edit')->name('dessert.edit');
        Route::patch('/{id}/update', 'AdminsControllers\AdminDessertController@update')->name('dessert.update');
        Route::delete('/destroy', 'AdminsControllers\AdminDessertController@destroy')->name('dessert.destroy');
    });

    // Meals
    Route::prefix('meal')->group(function(){
        Route::get('/', 'AdminsControllers\AdminMealController@index')->name('meal.index');
        Route::post('/store', 'AdminsControllers\AdminMealController@store')->name('meal.store');
        Route::patch('/edit', 'AdminsControllers\AdminMealController@edit')->name('meal.edit');
        Route::patch('/{id}/update', 'AdminsControllers\AdminMealController@update')->name('meal.update');
        Route::delete('/destroy', 'AdminsControllers\AdminMealController@destroy')->name('meal.destroy');
    });

    // DRINKS
    Route::prefix('drink')->group(function(){
        Route::get('/', 'AdminsControllers\AdminDrinkController@index')->name('drink.index');
        Route::post('/store', 'AdminsControllers\AdminDrinkController@store')->name('drink.store');
        Route::patch('/edit', 'AdminsControllers\AdminDrinkController@edit')->name('drink.edit');
        Route::patch('/{id}/update', 'AdminsControllers\AdminDrinkController@update')->name('drink.update');
        Route::delete('/destroy', 'AdminsControllers\AdminDrinkController@destroy')->name('drink.destroy');
    });

});

Route::get('/{any}', function () {
    return view('layouts.app');
})->where('any', '.*');