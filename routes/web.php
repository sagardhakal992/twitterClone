<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//})->name("ind");

Route::middleware(['auth:sanctum'])->group(function (){
    Route::get('/',[\App\Http\Controllers\PostController::class,'index'])->name("home.index");
    Route::get('/post/{post}',[\App\Http\Controllers\PostController::class,'show'])->name("home.show");
    Route::post("/post/{post}/like",[\App\Http\Controllers\PostController::class,'like'])->name("home.like");
    Route::post("/post/create",[\App\Http\Controllers\PostController::class,'store'])->name("home.store");
    Route::post("/post/{post}/comment",[\App\Http\Controllers\CommentController::class,'store'])->name("comment.store");
    Route::get("/notification",[\App\Http\Controllers\NotificationController::class,'index'])->name("notifications");
    Route::get("/post/{post}/bookmark",[\App\Http\Controllers\BookmarkController::class,'bookmark'])->name("bookmarks.toggle");
    Route::get("/bookmarks",[\App\Http\Controllers\BookmarkController::class,'index'])->name("bookmarks");
    Route::get('/lists/followers',[\App\Http\Controllers\FollowController::class,'followers'])->name('lists.followers');
    Route::get('/lists/following',[\App\Http\Controllers\FollowController::class,'following'])->name('lists.following');
    Route::post('/follow/{id}',[\App\Http\Controllers\FollowController::class,'store'])->name('lists.follow');
    Route::post('/unfollow/{id}',[\App\Http\Controllers\FollowController::class,'destroy'])->name('lists.unfollow');
    Route::get('/explore',[\App\Http\Controllers\ExpolreController::class,'users'])->name('explore.users');

});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
