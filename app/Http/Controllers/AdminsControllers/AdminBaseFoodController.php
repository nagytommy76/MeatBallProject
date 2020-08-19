<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class AdminBaseFoodController extends Controller
{
    public function __construct(){
        $this->middleware('auth:admin');
    }
    
    protected function updateFoodImage(&$food, $request, $imageModel, $foodType){
        Storage::delete($imageModel::find($food->image_id)->image_path);

        $food->images()->update([
            'image_path' => $request->file('image')->store($foodType)
        ]);
    }

    protected function destroyFood($request, $foodModel){
        $foodToDelete = $foodModel::find($request->foodId);

        Storage::delete($foodToDelete->images->image_path);
        $foodToDelete->delete();
        return $foodToDelete->name;
    }
}
