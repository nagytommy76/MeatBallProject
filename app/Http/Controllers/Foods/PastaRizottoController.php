<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\PastaRizottoResource;

use App\Model\Pasta\PastaRizotto;
use App\Model\Pasta\PastaRizottoPrice;

class PastaRizottoController extends BaseFoodController
{

    public function getAllPasta(){
        return self::getAllFood(PastaRizottoResource::class, PastaRizotto::class);
    }

    public function getPastaByOrder(Request $request){
        return self::getFoodByOrder($request, PastaRizottoResource::class, PastaRizotto::class);
    }

    public function getPastaByName(Request $request){
        return self::searchFoodByName($request, PastaRizottoResource::class, PastaRizotto::class);
    }

    public function getMinMaxPrice(){
        return self::getMinMaxPrices(PastaRizottoPrice::class);
    }
}
