<?php

namespace App\Http\Controllers\UserControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if ($this->user->userinfo === null) {
            return view('user.userinfo')->with([
                'username' => $this->user->username,
                'email' => $this->user->email,
                'firstname' => '',
                'lastname' => '',
                'city' => '',
                'zipCode' => '',
                'street' => '',
                'houseNumber' => '',
                'floorDoor' => '',
                'phone' => '',
                'modify' => 'disabled',
                'input' => ''
            ]);
        }else{
            return view('user.userinfo')->with([
                'username' => $this->user->username,
                'email' => $this->user->email,
                'firstname' => $this->user->userinfo->firstName,
                'lastname' => $this->user->userinfo->lastName,
                'city' => $this->user->userinfo->city,
                'zipCode' => $this->user->userinfo->zipCode,
                'street' => $this->user->userinfo->street,
                'houseNumber' => $this->user->userinfo->houseNumber,
                'floorDoor' => $this->user->userinfo->floorDoor,
                'phone' => $this->user->userinfo->phone,
                'modify' => '',
                'input' => 'disabled'
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $valid = $request->validate([
            'email' => ['required', 'max:255'],
            'phone' => ['required', 'max:11'],
            'phone' => ['required', 'max:11'],
            'zipCode' => ['required', 'size:4'],
            'firstname' => ['required'],
            'lastname' => ['required'],
            'city' => ['required'],
            'street' => ['required'],
            'houseNumber' => ['required']
        ]);
        switch ($request->input('action')) {
            case 'Mentés':
                $this->user->userinfo_filled = 1;

                $this->user->userinfo()->create([
                    'user_email' => $request->email,
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,
                    'city' => $request->city,
                    'zipCode' => $request->zipCode,
                    'street' => $request->street,
                    'houseNumber' => $request->houseNumber,
                    'floorDoor' => $request->floorDoor,
                    'phone' => $request->phone,                    
                ]);
                $this->user->save();

                return redirect()->route('userinfo.index');
            break;
            case 'Módosítás' :                
                $this->user->email = $request->email;
                $this->user->username = $request->username;

                $this->user->userinfo()->update([
                    'user_email' => $request->email,
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,
                    'city' => $request->city,
                    'zipCode' => $request->zipCode,
                    'street' => $request->street,
                    'houseNumber' => $request->houseNumber,
                    'floorDoor' => $request->floorDoor,
                    'phone' => $request->phone,                    
                ]);
                $this->user->save();              
        
                return redirect()->route('userinfo.index');
            break;
        } 
    }
}