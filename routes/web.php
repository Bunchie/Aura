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

Route::get('/', function () {
    return view('test_panel.index');
});

Auth::routes();

Route::group(['prefix' => '/admin', 'middleware' => 'admin'], function () {
    Route::get('/', function () {
        return view('admin_panel.index');
    });
});