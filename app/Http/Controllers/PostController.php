<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Notifications\PostLikedNotification;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request){

        $posts=Post::with(["user","like","comments",'comments.user'])->withCount('like')->orderByDesc('id')->paginate(15);
        $data= [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts'=>$posts

        ];


        if($request->expectsJson()){
            return $posts;
        }
        return Inertia::render('HomePage',$data);
    }

    public function store(Request $request)
    {
        $request->validate([
            "caption"=>"required"
        ]);

    if($request->hasFile('avatar')) {



        $files=$request->file('avatar');
        $imageNameList=[];
        for($i=0;$i<count($files);$i++){
            $files[$i]->storeAs("public/images/".$request->user()->id."/",$files[$i]->getClientOriginalName());
            array_push($imageNameList,["name"=>$files[$i]->getClientOriginalName(),"size"=>$files[$i]->getSize()]);
        }
        $post=Post::create([
            "image_url"=>$imageNameList,
            "user_id"=>$request->user()->id,
            "caption"=>$request->input('caption')
        ]);
        return redirect()->back();
    }

        $post=Post::create([
            "image_url"=>null,
            "user_id"=>$request->user()->id,
            "caption"=>$request->caption
        ]);

        return redirect()->back();
    }

    public  function show(Post $post): \Inertia\Response
    {
        $newPost=$post->load(['user','comments','comments.user','like'])->loadCount('like');
        return Inertia::render('DetailPage',['post'=>$newPost]);
    }

    public function like(Request $request,Post $post): \Illuminate\Http\RedirectResponse
    {
         $result=$post->like()->toggle(auth()->user());
         if(count($result['attached'])){
             $post->user->notify(new PostLikedNotification($post,$request->user()));
         }
         return back();
    }
}
