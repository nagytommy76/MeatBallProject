<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PizzaIPResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'price_id' => $this->id,
            'ingred_id' =>$this->ingredients->id,
            'ingredient_name' => $this->ingredients->ingredient,
            'price' => $this->price
        ];
    }
}
