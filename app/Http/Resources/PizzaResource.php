<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PizzaResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->images,
            'ingredients' => $this->ingredients,
            'price' => intval($this->prices->price)
        ];
    }
}