<?php

namespace App\Http\Resources;

use App\Http\Resources\UserInfoResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'username' => $this->username,
            'userinfo_filled' => $this->userinfo_filled,
            'userInfo' => $this->userinfo
        ];
    }
}
