<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;

use App\Model\Drink\Drink;

class AdminDrinkController extends AdminBaseFoodController
{
    public function index(){
        return view('admin.drink.drink')->with([
            'allFood' =>  Drink::all(),
            'isIngredients' => false,
            'isCapacity' => true,
            'routeStore' => 'drink.store',
            'routeDestroy' => 'drink.destroy',
            'routeEdit' => 'drink.edit',
            'deleteMethod' => 'DELETE',
            'editMethod' => 'PATCH',
            'inputCardName' => 'Ital bevitele',
            'deleteCardName' => 'Italok Törlése',
            'editCardName' => 'Italok Módosítása',
            'btnDeleteClass' => 'btn btn-delete',
            'btnDeleteValue' => 'Törlés',
            'btnModifyClass' => 'btn btn-modify',
            'btnModifyValue' => 'Módosítás',
        ]);
    }

    public function store(Request $request){
        $valid = Validator::make($request->all(), [
            'name' => ['required', 'unique:drinks'],
            'image' => ['required', 'image', 'max:1999'],
            'capacity' => ['required'],
            'price' => ['required'],
        ]);
        if ($valid->fails()) {
            return redirect('admin/drink')->withErrors($valid)->withInput($request->all());
        }
        try {
            $drink = $this->saveFood(Drink::class, $request, 'drink');
            $drink->capacity = $request->capacity;
            $drink->save();
            return redirect('admin/drink')->withErrors([
                'inputSuccess' => "A(z) $drink->name bevitele sikeres volt!"
            ]);
        }catch (Exception $ex) {
            return redirect('admin/drink')->withErrors([
                'inputFail' => "A(z) $drink->name bevitele sikertelen volt: $ex->getMessage()"
            ]);
        }   
    }

    public function edit(Request $request){
        $drink = Drink::find($request->foodId);
        return view('admin.drink.edit-drink')->with([
            'foodName' => $drink->name,
            'route' => 'drink.update',
            'foodId' => $drink->id,
            'isIngredients' => false,
            'isCapacity' => true,
            'capacity' => $drink->capacity,
            'prices' => $drink->prices,
            'images' => $drink->images
        ]);
    }


    public function update($id, Request $request){
        try {
            $drink = $this->updateFood(Drink::class, $id, $request, 'drink');
            $drink->capacity = $request->capacity;
            $drink->save();
            return redirect('admin/drink')->withErrors([
                'success' => "A(z) $drink->name módosítása sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/drink')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
    }

    public function destroy(Request $request){
        try {
            $drinkName = $this->destroyFood($request ,Drink::class);
    
            return redirect('admin/drink')->withErrors([
                'success' => "A $drinkName törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/drink')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
    }
}
