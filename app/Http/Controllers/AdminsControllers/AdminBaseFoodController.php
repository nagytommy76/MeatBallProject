<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class AdminBaseFoodController extends Controller
{
    protected function storeFood($foodModel, $priceModel, $imageModel){
        
    }

    protected function updateFood($request, $foodModel){
        $food = $foodModel::find(1);
        if (isset($food->ingredients)){
            $food->ingredients()->detach();
            foreach ($request->ingredType as $value) {
                $food->ingredients()->attach($value);
            }
        }
        
    }
}
