<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
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

Route::get('products',[ProizvodController::class,'index']);
Route::get('products/{id}',[ProizvodController::class,'show']);
Route::post('products',[ProizvodController::class,'store']);
Route::put('products/{id}',[ProizvodController::class,'update']);
Route::delete('products/{id}',[ProizvodController::class,'destroy']);


Route::get('categories',[CategoryController::class,'index']);
Route::get('orders',[OrderController::class,'index']);
Route::get('orderItems',[OrderItemController::class,'index']);

Route::post('orders',[OrderController::class,'store']);
Route::post('orderItems',[OrderItemController::class,'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
