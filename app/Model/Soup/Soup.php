<?php

namespace App\Model\Soup;

use Illuminate\Database\Eloquent\Model;

class Soup extends Model
{
    protected $table = 'soup';
    public $timestamps = false;

    public function images(){
        return $this->hasOne('App\Model\Soup\SoupImage', 'id', 'image_id');
    }

    public function prices(){
        return $this->hasOne('App\Model\Soup\SoupPrice', 'id', 'price_id');
    }
    
    public static function boot() {
        parent::boot();

        static::deleting(function($soup) {
            $soup->images()->delete();
            $soup->prices()->delete();             
        });
    }
}
