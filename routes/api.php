<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::namespace('Api')->group(function () {
    Route::get('/cars', "CarController@getList");
    Route::get('/car/{car_id}', "CarController@history");
    Route::post('/user', "UserController@register");
    Route::get('/user', "UserController@login");

    Route::group(['middleware' => 'login.check'], function () {
        Route::post('/user/password', "UserController@updatePassword");
        Route::post('/user/signature', "UserController@updateSignature");
        Route::post('/user/avatar', "UserController@updateAvatar");
        Route::post('/user/nickname', "UserController@updateNickname");

        Route::get('/orders', "OrderController@orderList");
        Route::get('/order/{id}', "OrderController@order");
        Route::post('/order', "OrderController@create");
        Route::post('/order/{id}/close', "OrderController@close");
        Route::post('/image', "ImageController@upload");
    });
});
