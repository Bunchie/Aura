<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/tests/{categories}', 'TestController@index');
Route::get('/test/{id}', 'TestController@show');
Route::post('/create-test', 'TestController@store');

Route::get('/categories', 'CategoryController@index');
Route::post('/create-category', 'CategoryController@store');

Route::get('/results/{userId}', 'UserController@results');

Route::post('/save-result', 'ResultController@store');
