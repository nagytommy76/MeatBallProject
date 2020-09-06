<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;

use App\Model\Meal\Meal;

class AdminMealController extends AdminBaseFoodController
{
    public function index(){
        return view('admin.meal.meal')->with([
            'allFood' =>  Meal::all(),
            'routeStore' => 'meal.store',
            'routeDestroy' => 'meal.destroy',
            'routeEdit' => 'meal.edit',
            'deleteMethod' => 'DELETE',
            'editMethod' => 'PATCH',
            'inputCardName' => 'Főételek bevitele',
            'deleteCardName' => 'Főételek Törlése',
            'editCardName' => 'Főételek Módosítása',
            'btnDeleteClass' => 'btn btn-delete',
            'btnDeleteValue' => 'Törlés',
            'btnModifyClass' => 'btn btn-modify',
            'btnModifyValue' => 'Módosítás',
        ]);
    }

    public function store(Request $request){
        $valid = Validator::make($request->all(), [
            'name' => ['required', 'unique:meals'],
            'image' => ['required', 'image', 'max:1999'],
            'price' => ['required'],
            'ingredient' => ['required']
        ]);
        if ($valid->fails()) {
            return redirect('admin/meal')->withErrors($valid)->withInput($request->all());
        }
        try {
            $meal = $this->saveFood(Meal::class, $request, 'meal');
            $meal->save();
            return redirect('admin/meal')->withErrors([
                'inputSuccess' => "A(z) $meal->name bevitele sikeres volt!"
            ]);
        } catch (QueryException $ex) {
            return redirect('admin/meal')->withErrors([
                'inputFail' => "A(z) $meal->name bevitele sikertelen volt: $ex->getMessasge()"
            ]);
        }
    }

    public function edit(Request $request){
        $meal = Meal::find($request->foodId);
        return view('admin.meal.edit-meal')->with([
            'foodName' => $meal->name,
            'route' => 'meal.update',
            'foodId' => $meal->id,
            'ingredients' => $meal->ingredients,
            'prices' => $meal->prices,
            'images' => $meal->images
        ]);
    }

    public function update($id, Request $request){
        try {
            $meal = $this->updateFood(Meal::class, $id, $request, 'meal');
            $meal->save();
            return redirect('admin/meal')->withErrors([
                'success' => "A(z) $meal->name módosítása sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/meal')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
    }

    public function destroy(Request $request){
        try {
            $mealName = $this->destroyFood($request ,Meal::class);
    
            return redirect('admin/meal')->withErrors([
                'success' => "A $mealName törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/meal')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
    }
}
