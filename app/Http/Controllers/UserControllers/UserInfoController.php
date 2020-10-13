<?php

namespace App\Http\Controllers\UserControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserOrdersResource;

use App\User;
use Auth;



class UserInfoController extends Controller
{
    private $user;
    
    public function __construct(){
        $this->middleware('auth');
        if (Auth::user()) {
            $this->user = Auth::user();
        }
    }

    public function apiStrore(Request $request){
        $valid = $this->validator($request->all());
        if ($valid->fails()) {
            return response()->json(['exception' => false,'hasError' => true, 'errors' => $valid->errors()]);
        }
        $this->saveInfoData($request);
        return response()->json(['exception' => false,'hasError' => false]);
    }

    public function apiUpdate(Request $request){
        $valid = $this->validator($request->all());
        if ($valid->fails()) {
            return response()->json(['exception' => false, 'hasError' => true, 'errors' => $valid->errors()]);
        }
        try {
            $this->user->userinfo()->update([
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'city' => $request->city,
                'zipCode' => $request->zipCode,
                'street' => $request->street,
                'houseNumber' => $request->houseNumber,
                'floorDoor' => $request->floorDoor,
                'phone' => $request->phone,                    
            ]);
            $this->user->save();
            return response()->json(['message' => 'A módosítás sikeres volt','exception' => false, 'hasError' => false, 'errors' => $valid->errors()]);
        } catch (Exception $ex) {
            
        }
        
    }

    public function getUserOrders(){
        return UserOrdersResource::collection($this->user->orders);
    }

    protected function validator(array $data){
        return Validator::make($data, [
            'phone' => ['required', 'max:11'],
            'zipCode' => ['required', 'integer', 'max:9999'],
            'firstName' => ['required', 'string'],
            'lastName' => ['required', 'string'],
            'city' => ['required', 'string'],
            'street' => ['required', 'string'],
            'houseNumber' => ['required', 'integer']
        ]);
    }

    private function saveInfoData($request){
        try {
            $this->user->userinfo_filled = 1;
            $this->user->userinfo()->create([
                'user_email' => Auth::user()->email,
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'city' => $request->city,
                'zipCode' => $request->zipCode,
                'street' => $request->street,
                'houseNumber' => $request->houseNumber,
                'floorDoor' => $request->floorDoor,
                'phone' => $request->phone,                    
            ]);
            $this->user->save();
        } catch (Exception $ex) {
            return response()->json(['exception' => $ex->getMessage()]);
        }
        
    }
}