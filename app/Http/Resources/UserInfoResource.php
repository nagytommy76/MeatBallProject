<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserInfoResource extends JsonResource
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
            'phone' => $this->phone,
            'user_email' => $this->user_email,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'zipCode' =>$this->zipCode,
            'city' => $this->city,
            'street' => $this->street,
            'houseNumber' => $this->houseNumber,
            'floorDoor' => $this->floorDoor
        ];
    }
}
