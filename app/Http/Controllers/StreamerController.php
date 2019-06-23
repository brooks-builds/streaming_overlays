<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;

class StreamerController extends Controller
{
    public function index($streamerName) {

        $streamer = User::where('name', $streamerName)->first();
        
        if ($streamer) {
            return view('streamers.index', ['streamer' => $streamer]);
        } else {
            return redirect('/');
        }

    }
}
