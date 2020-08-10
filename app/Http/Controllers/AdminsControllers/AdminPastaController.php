<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

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
        return view('admin.pasta.pasta')->with([
            'success' => ''
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        
        // die(var_dump($pasta->types));
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

        return redirect('admin/pasta')->with([
            'success' => "A(z) $pasta->name bevitele sikeres volt!"
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
