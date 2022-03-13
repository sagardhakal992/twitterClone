<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FollowController extends Controller
{

    public function followers()
    {
      $users=auth()->user()->followers;
      return Inertia::render("FollowPage",['users'=>$users]);
    }
    public function following()
    {
        $users=auth()->user()->followings;
        return Inertia::render("FollowPage",['users'=>$users]);
    }
    public function store(Request $request,$user){



        $result=$request->user()->followings()->attach($user);

        return redirect()->back();
    }
    public function destroy(Request $request,$user){
        $result=$request->user()->followings()->detach($user);
        return redirect()->back();
    }

}
