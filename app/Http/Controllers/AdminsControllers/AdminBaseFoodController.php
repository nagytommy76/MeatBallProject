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

    protected function saveFood($foodModel, $request, $imageStorage){
        $food = new $foodModel;
        $food->name = $request->name;

        $imageId = $food->images()->create([
            'image_path' => $request->file('image')->store($imageStorage)
        ]);

        $priceId = $food->prices()->create([
            'price' => $request->price
        ]);

        $food->price_id = $priceId->id;
        $food->image_id = $imageId->id;

        return $food;
    }

    protected function updateFood($foodModel, $id, $request, $foodType){
        $food = $foodModel::find($id);
        $food->name = $request->name;

        if ($request->file('image') != null) {
            $this->updateFoodImage($food, $request ,$food->images->image_path, $foodType);
        }
        $food->prices()->update([
            'price' => $request->price
        ]);
        return $food;
    }

    protected function destroyFood($request, $foodModel){
        $foodToDelete = $foodModel::find($request->foodId);

        Storage::delete($foodToDelete->images->image_path);
        $foodToDelete->delete();
        return $foodToDelete->name;
    }

    private function updateFoodImage(&$food, $request ,$imagePath, $foodType){
        Storage::delete($imagePath);

        $food->images()->update([
            'image_path' => $request->file('image')->store($foodType)
        ]);
    }
}
