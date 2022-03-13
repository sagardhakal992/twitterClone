<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        auth()->user()->unreadNotifications->markAsRead();
        return Inertia::render("NotificationPage",[
            "notifications"=>auth()->user()->notifications()->latest()->paginate()
        ]);
    }
}
