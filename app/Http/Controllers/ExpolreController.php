<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpolreController extends Controller
{
    public function users(){
        $users= User::paginate(20);
        return Inertia::render("ExplorePage",['users'=>$users]);
    }
}
