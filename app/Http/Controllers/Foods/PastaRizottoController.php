<?php

namespace App\Http\Controllers\Foods;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Http\Resources\PastaRizottoResource;
use App\Model\Pasta\PastaRizotto;

class PastaRizottoController extends Controller
{
    public function test(){
        return PastaRizottoResource::collection(PastaRizotto::all());
    }
}
