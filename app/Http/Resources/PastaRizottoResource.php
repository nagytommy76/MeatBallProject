<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PastaRizottoResource extends JsonResource
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
            'ingredients' => explode(',', str_replace(' ', '', $this->ingredients)),
            'type' => $this->type,
            'price' => intval($this->prices->price),
            'image' => $this->images
        ];
    }
}
