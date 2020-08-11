<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\PastaRizottoResource;

use App\Model\Pasta\PastaRizotto;
use App\Model\Pasta\PastaRizottoPrice;

use App\Http\Controllers\Traits\FoodControllerHelper;

class PastaRizottoController extends Controller
{
    use FoodControllerHelper;

    public function index(){
        return view('foods.pasta');
    }

    // public function getAllPasta(){
    //     return PastaRizottoResource::collection(PastaRizotto::all());
    // }

    public function getAllPasta(){
        return FoodControllerHelper::getAllFood(PastaRizottoResource::class, PastaRizotto::class);
    }

    public function getMinMaxPrice(){
        return FoodControllerHelper::getMinMaxPrice(PastaRizottoPrice::class);
    }
}
