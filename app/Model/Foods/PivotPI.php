<?php

namespace App\Model\Foods;

use Illuminate\Database\Eloquent\Model;

class PivotPI extends Model
{
    protected $table = 'pivot_pizza_ingredients';

    protected $primaryKey = 'id';

    public $timestamps = false;



    
}
