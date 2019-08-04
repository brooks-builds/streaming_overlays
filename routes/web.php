<?php

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


Route::get('/api/streamers', 'StreamerController@getStreamerNames');
// Route::post('/api/accounts', 'RegisterController@register');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::fallback(function () {
    return view('landing');
});
