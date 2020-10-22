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
        $date = date_parse_from_format("Y-m-d H:i:s" ,$this->created_at);
        $finalDate = $date['year'].'-'.$date['month'].'-'.$date['day'].' '.$date['hour'].':'.$date['minute'].':'.$date['second'];
        return [
            'id' => $this->id,
            'cartItems' => json_decode($this->cartItems),
            'created_at' => $finalDate,
            'orderNumber' => $this->orderNumber,
            'userEmail' => $this->user_email,
            'with_paypal' => $this->with_paypal,
            'transaction_id' => $this->transaction_id
        ];
    }
}
