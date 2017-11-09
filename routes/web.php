<?php

use Auth;
use Queue;

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

Auth::routes();

Route::group(['prefix' => '/admin', 'middleware' => 'admin'], function () {
    Route::get('/', function () {
        return view('admin_panel.index');
    });
    Route::get('{any}', function () {
        return view('admin_panel.index');
    })->where('any', '.*');
});

Route::get('{any}', function () {

    Cookie::queue('UI', Auth::id(), 1500, null, null, false, false);

    return view('test_panel.index');
})->where('any', '.*');