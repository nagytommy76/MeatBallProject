<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserOrdersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $date = date_parse($this->created_at);
        $finalDate = $date['year'].'-'.$date['month'].'-'.$date['day'].' '.$date['hour'].':'.$date['minute'].':'.$date['second'];
        return [
            'id' => $this->id,
            'cartItems' => json_decode($this->cartItems),
            'created_at' => $finalDate,
            // 'created_at' => $this->created_at,
            'orderNumber' => $this->orderNumber,
            'userEmail' => $this->user_email
        ];
    }
}
