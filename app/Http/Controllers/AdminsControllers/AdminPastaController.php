<?php

namespace App\Http\Controllers\AdminsControllers;

use Exception;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

use App\Model\Pasta\PastaRizotto;
use App\Model\Pasta\PastaRizottoImage;
use App\Model\Pasta\PastaRizottoPrice;

class AdminPastaController extends AdminBaseFoodController
{
    public function index()
    {
        $allPasta = PastaRizotto::all();
        return view('admin.pasta.pasta')->with([
            'allPasta' => $allPasta,
        ]);
    }

    public function store(Request $request)
    {
        $valid = Validator::make($request->all(), [
            'name' => ['required', 'unique:pasta_and_rizotto'],
            'image' => ['required', 'image', 'max:1999'],
            'price' => ['required'],
            'ingredient' => ['required']
        ]);
        if ($valid->fails()) {
            return redirect('admin/pasta')->withErrors($valid)->withInput($request->all());
        }
        
        try {
            $pasta = new PastaRizotto;
            $pasta->name = $request->name;
            $pasta->ingredients = $request->ingredient;
            $pasta->type = $request->type;

            $imageId = $pasta->images()->create([
                'image_path' => $request->file('image')->store('pasta')
            ]);

            $priceId = $pasta->prices()->create([
                'price' => $request->price
            ]);
            $pasta->image_id = $imageId->id;
            $pasta->price_id = $priceId->id;
            
            $pasta->save();

            return redirect('admin/pasta')->withErrors([
                'success' => "A(z) $pasta->name bevitele sikeres volt!"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/pasta')->withErrors([
                'inputFail' => "A(z) $pasta->name bevitele sikertelen volt Hiba: ".$ex->getMessage()
            ]);
        }    
    }


    public function edit(Request $request)
    {   
        $pasta = PastaRizotto::find($request->foodId);
        return view('admin.pasta.edit-pasta')->with([
            'pastaName' => $pasta->name,
            'pastaId' => $request->foodId,
            'pastaType' => $pasta->type,
            'ingredients' => $pasta->ingredients,
            'prices' => $pasta->prices,
            'images' => $pasta->images
        ]);
    }


    public function update($id, Request $request)
    {
        try {
            // $this->updateFood(PastaRizotto::class);
            $pasta = PastaRizotto::find($id);

            $pasta->name = $request->name;
            $pasta->type = $request->type;
            $pasta->ingredients = $request->ingredient;

            if ($request->file('image') != null) {
                $this->updateFoodImage($pasta, $request, PastaRizottoImage::class, 'pasta');
            }

            $pasta->prices()->update([
                'price' => $request->price
            ]);
            $pasta->save();

            return redirect('admin/pasta')->withErrors([
                'modifySuccess' => "A(z) $pasta->name módosítása sikeres volt"
            ]);            
        } catch ( Exception $ex ) {
            return redirect('admin/pasta')->withErrors([
                'modifyFail' => $ex->getMessage()
            ]);
        } 
    }


    public function destroy(Request $request)
    {
        try {
            $pastaName = $this->destroyFood($request ,PastaRizotto::class);
    
            return redirect('admin/pasta')->withErrors([
                'deleteSuccess' => "A $pastaName törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/pasta')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
       
    }
}