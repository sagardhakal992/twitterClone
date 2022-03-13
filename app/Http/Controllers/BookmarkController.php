<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookmarkController extends Controller
{
    public function bookmark(Request $request,Post $post){
        $post->bookmark()->toggle(auth()->user());
        return redirect()->back();
    }
    public function index(){
//        $posts=Post::with(["user","like","comments",'comments.user'])->withCount('like')->orderByDesc('id')>orderByDesc('id')
        $posts=auth()->user()->bookmarks->load(["user","like","comments",'comments.user'])->loadCount('like');
        return Inertia::render("BookmarkPage",['posts'=>$posts]);
    }
}
