<?php

namespace App\Model\Pasta;

use Illuminate\Database\Eloquent\Model;

class PastaRizottoImage extends Model
{
    protected $table = 'pasta_and_rizotto_images';
    public $timestamps = false;

    protected $fillable = [
        'image_path'
    ];
}
