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

class AdminPastaController extends Controller
{
    public function __construct(){
        $this->middleware('auth:admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allPasta = PastaRizotto::all();
        return view('admin.pasta.pasta')->with([
            'allPasta' => $allPasta,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
            $price = new PastaRizottoPrice;
            $price->price = $request->price;
            $price->save();

            $path = $request->file('image')->store('pasta');
            $image = new PastaRizottoImage;
            $image->image_path = $path;
            $image->save();

            $pasta = new PastaRizotto;
            $pasta->name = $request->name;
            $pasta->ingredients = $request->ingredient;
            $pasta->image_id = $image->id;
            $pasta->price_id = $price->id;
            $pasta->type = $request->type;
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {   
        $pasta = PastaRizotto::find($request->pastaId);
        return view('admin.pasta.edit-pasta')->with([
            'pastaName' => $pasta->name,
            'pastaId' => $request->pastaId,
            'pastaType' => $pasta->type,
            'ingredients' => $pasta->ingredients,
            'prices' => $pasta->prices,
            'images' => $pasta->images
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        // die(var_dump($request->file('image')));
        try {
            $pasta = PastaRizotto::find($id);

            $pasta->name = $request->name;
            $pasta->type = $request->type;
            $pasta->ingredients = $request->ingredient;

            if ($request->file('image') != null) {
                $pasta->images()->delete();
                $newImage = new PastaRizottoImage;
                $newImage->image_path = $request->file('image')->store('pasta');

                $oldImage = PastaRizottoImage::find($pasta->image_id);
                
                $newImage->save();
                
                $pasta->image_id = $newImage->id;
                
                Storage::delete($oldImage->image_path);
                $oldImage->delete();
            }

            $pasta->save();

            $prices = PastaRizottoPrice::where('id', '=', $pasta->price_id)->first();
            $prices->price = $request->price;
            
            $prices->save();

            return redirect('admin/pasta')->withErrors([
                'modifySuccess' => "A(z) $pasta->name módosítása sikeres volt"
            ]);            
        } catch ( Exception $ex ) {
            return redirect('admin/pasta')->withErrors([
                'modifyFail' => $ex->getMessage()
            ]);
        }
        
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try {
            $toDeletePasta = PastaRizotto::find($request->pastaId);
            $deleteImage = PastaRizottoImage::find($toDeletePasta->image_id);
            $deletePrice = PastaRizottoPrice::find($toDeletePasta->price_id);

            Storage::delete($deleteImage->image_path);

            $toDeletePasta->delete();
            $deleteImage->delete();
            $deletePrice->delete();            
    
            return redirect('admin/pasta')->withErrors([
                'deleteSuccess' => "A $toDeletePasta->name törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/pasta')->withErrors([
                'fail' => $ex->getMessage()
            ]);
        }
       
    }
}
