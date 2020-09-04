<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Exception;

use App\Model\Soup\Soup;

class AdminSoupController extends AdminBaseFoodController
{
    public function index(){
        return view('admin.soup.soup')->with([
            'allFood' => Soup::all(),
            'routeStore' => 'soup.store',
            'routeDestroy' => 'soup.destroy',
            'routeEdit' => 'soup.edit',
            'deleteMethod' => 'DELETE',
            'editMethod' => 'PATCH',
            'inputCardName' => 'Levesek bevitele',
            'deleteCardName' => 'Levesek Törlése',
            'editCardName' => 'Levesek Módosítása',
            'btnDeleteClass' => 'btn btn-delete text-white',
            'btnDeleteValue' => 'Törlés',
            'btnModifyClass' => 'btn btn-modify',
            'btnModifyValue' => 'Módosítás',
        ]);
    }

    public function store(Request $request){
        $valid = Validator::make($request->all(), [
            'name' => ['required', 'unique:soup'],
            'image' => ['required', 'image', 'max:1999'],
            'price' => ['required'],
            'ingredient' => ['required']
        ]);
        if ($valid->fails()) {
            return redirect('admin/soup')->withErrors($valid)->withInput($request->all());
        }
        try {
            $food = $this->saveFood(Soup::class, $request, 'soup');
            $food->save();
            return redirect('admin/soup')->withErrors([
                'inputSuccess' => "A(z) $food->name bevitele sikeres volt!"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/soup')->withErrors([
                'inputFail' => "A(z) $food->name bevitele sikertelen volt: ".$ex->getMessage()
            ]);
        }
    }

    public function edit(Request $request){
        $soup = Soup::find($request->foodId);
        return view('admin.soup.edit-soup')->with([
            'foodName' => $soup->name,
            'route' => 'soup.update',
            'foodId' => $soup->id,
            'ingredients' => $soup->ingredients,
            'prices' => $soup->prices,
            'images' => $soup->images

        ]);
    }

    public function update($id, Request $request){
        try {
            $soup = $this->updateFood(Soup::class, $id, $request, 'soup');
            $soup->save();
            return redirect('admin/soup')->withErrors([
                'success' => "A(z) $soup->name módosítása sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/soup')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
        
    }

    public function destroy(Request $request){
        try {
            $soupName = $this->destroyFood($request ,Soup::class);
    
            return redirect('admin/soup')->withErrors([
                'success' => "A $soupName törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/soup')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
    }

}
