<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request,Post $post){
        $request->validate([
            "comment"=>'required'
        ]);
       $post->comments()->create([
           "comment"=>$request->input('comment'),
           'user_id'=>auth()->user()['id']
       ]);
       return redirect()->back();
    }
}
