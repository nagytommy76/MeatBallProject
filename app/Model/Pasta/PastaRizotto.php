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


    /**
    * Get the Type of Pasta/Rizotto.
    *
    * @return string
    */
    public function getTypeAttribute()
    {
        return self::TYPES[$this->attributes['type']];
    }


//     /**
//    * set type
//    */
//    public function setTypeAttribute($type)
//    {
//       $roleID = self::getRoleID($type);
//       if ($roleID) {
//          $this->attributes['type'] = $roleID;
//       }
//    }

//    public static function getRoleID($type)
//    {
//       return array_search($type, self::TYPES);
//    }
}
