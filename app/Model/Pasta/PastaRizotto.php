<?php

namespace App\Model\Pasta;

use Illuminate\Database\Eloquent\Model;

class PastaRizotto extends Model
{
    public const TYPES = [
        0 => "risotto",
        1 => "pasta"
    ];

    protected $table = 'pasta_and_rizotto';
    public $timestamps = false;

    /**
    *   Get the image record associated with the Pasta/rizotto
    */
    public function images(){
        return $this->hasOne('App\Model\Pasta\PastaRizottoImage', 'id', 'image_id');
    }

    /**
    *   Get the price record associated with the Pasta/rizotto
    */
    public function prices(){
        return $this->hasOne('App\Model\Pasta\PastaRizottoPrice', 'id', 'price_id');
    }

    public static function boot() {
        parent::boot();

        static::deleting(function($pasta) {
            $pasta->images()->delete();
            $pasta->prices()->delete();             
        });
    }

    /**
    * Get the Type of Pasta/Rizotto.
    *
    * @return string
    */
    public function getTypeAttribute()
    {
        return self::TYPES[$this->attributes['type']];
    }
}
