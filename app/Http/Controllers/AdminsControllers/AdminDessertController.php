<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;

use App\Model\Dessert\Dessert;

class AdminDessertController extends AdminBaseFoodController
{
    public function index(){
        return view('admin.dessert.dessert')->with([
            'allFood' =>  Dessert::all(),
            'routeStore' => 'dessert.store',
            'routeDestroy' => 'dessert.destroy',
            'routeEdit' => 'dessert.edit',
            'deleteMethod' => 'DELETE',
            'editMethod' => 'PATCH',
            'inputCardName' => 'Desszert bevitele',
            'deleteCardName' => 'Desszertek Törlése',
            'editCardName' => 'Desszertek Módosítása',
            'btnDeleteClass' => 'btn btn-delete',
            'btnDeleteValue' => 'Törlés',
            'btnModifyClass' => 'btn btn-modify',
            'btnModifyValue' => 'Módosítás',
        ]);
    }

    public function store(Request $request){
        $valid = Validator::make($request->all(), [
            'name' => ['required', 'unique:dessert'],
            'image' => ['required', 'image', 'max:1999'],
            'price' => ['required'],
            'ingredient' => ['required']
        ]);
        if ($valid->fails()) {
            return redirect('admin/dessert')->withErrors($valid)->withInput($request->all());
        }
        try {
            $dessert = $this->saveFood(Dessert::class, $request, 'dessert');
            $dessert->save();
            return redirect('admin/dessert')->withErrors([
                'inputSuccess' => "A(z) $dessert->name bevitele sikeres volt!"
            ]);
        } catch (QueryException $ex) {
            return redirect('admin/dessert')->withErrors([
                'inputFail' => "A(z) $dessert->name bevitele sikertelen volt: $ex->getMessasge()"
            ]);
        }
    }

    public function edit(Request $request){
        $dessert = Dessert::find($request->foodId);
        return view('admin.dessert.edit-dessert')->with([
            'foodName' => $dessert->name,
            'route' => 'dessert.update',
            'foodId' => $dessert->id,
            'ingredients' => $dessert->ingredients,
            'prices' => $dessert->prices,
            'images' => $dessert->images
        ]);
    }

    public function update($id, Request $request){
        try {
            $dessert = $this->updateFood(Dessert::class, $id, $request, 'dessert');
            $dessert->save();
            return redirect('admin/dessert')->withErrors([
                'success' => "A(z) $dessert->name módosítása sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/dessert')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
    }

    public function destroy(Request $request){
        try {
            $dessertName = $this->destroyFood($request ,Dessert::class);
    
            return redirect('admin/dessert')->withErrors([
                'success' => "A $dessertName törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/dessert')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
    }
}
