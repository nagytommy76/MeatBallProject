<?php

namespace App\Model\Soup;

use Illuminate\Database\Eloquent\Model;

class SoupImage extends Model
{
    public $timestamps = false;
    protected $table = 'soup_images';
    protected $fillable = ['image_path'];
}
