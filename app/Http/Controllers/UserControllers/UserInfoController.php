<?php

namespace App\Http\Controllers\UserControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\User\Userinfo;
use App\User;
use Auth;



class UserInfoController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $userinfo = Userinfo::where('user_email','like',$user->email)->first();
        
        if ($userinfo === null) {
            return view('user.userinfo')->with([
                'username' => $user->username,
                'email' => $user->email,
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
                'username' => $user->username,
                'email' => $user->email,
                'firstname' => $userinfo->firstName,
                'lastname' => $userinfo->lastName,
                'city' => $userinfo->city,
                'zipCode' => $userinfo->zipCode,
                'street' => $userinfo->street,
                'houseNumber' => $userinfo->houseNumber,
                'floorDoor' => $userinfo->floorDoor,
                'phone' => $userinfo->phone,
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
            'phone' => ['required', 'max:11'],
            'zipCode' => ['required'],
            'firstname' => ['required'],
            'lastname' => ['required'],
            'city' => ['required'],
            'street' => ['required'],
            'houseNumber' => ['required']
        ]);
        switch ($request->input('action')) {
            case 'Mentés':
                $info = new UserInfo;                
                //$info->username = $request->username;
                $info->user_email = $request->email;
                $info->firstname = $request->firstname;
                $info->lastname = $request->lastname;
                $info->city = $request->city;
                $info->zipCode = $request->zipCode;
                $info->street = $request->street;
                $info->houseNumber = $request->houseNumber;
                $info->floorDoor = $request->floorDoor;
                $info->phone = $request->phone;

                $info->save();

                return redirect()->route('userinfo.index');
            break;
            case 'Módosítás' :
                $valid = $request->validate([
                    'email' => ['required', 'max:255'],
                    'phone' => ['required', 'max:11'],
                    'zipCode' => ['required'],
                    'firstname' => ['required'],
                    'lastname' => ['required'],
                    'city' => ['required'],
                    'street' => ['required'],
                    'houseNumber' => ['required']
                ]);
                $user = Auth::user();
                
                $userInDB = User::where('email','like',$user->email)->first();
                $info = UserInfo::where('user_email','like',$user->email)->first();
        
                $userInDB->email = $request->email;
                $userInDB->username = $request->username;

                $info->user_email = $request->email;
                $info->firstname = $request->firstname;
                $info->lastname = $request->lastname;
                $info->city = $request->city;
                $info->zipCode = $request->zipCode;
                $info->street = $request->street;
                $info->houseNumber = $request->houseNumber;
                $info->floorDoor = $request->floorDoor;
                $info->phone = $request->phone;
        
                $userInDB->save();
                $info->save();
        
                return redirect()->route('userinfo.index');
            break;
        }

        
    }
}
