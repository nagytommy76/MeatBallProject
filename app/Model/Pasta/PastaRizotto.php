<?php

namespace App\Model\Pasta;

use Illuminate\Database\Eloquent\Model;

class PastaRizotto extends Model
{
    protected $table = 'pasta_and_rizotto';
    public $timestamps = false;

    /**
    *   Get the image record associated with the Pasta/rizotto
    */
    public function images(){
        return $this->hasOne('App\Model\Pasta\PastaRizottoImage');
    }

    /**
    *   Get the price record associated with the Pasta/rizotto
    */
    public function prices(){
        return $this->hasOne('App\Model\Pasta\PastaRizottoPrice');
    }
}
