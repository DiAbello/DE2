<?php

use App\Http\Controllers\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/createUser', [User::class, 'createUser']) -> name('createUser');
Route::post('/startSession', [User::class, 'startSession']) -> name('startSession');
Route::post('/getUser', [User::class, 'getUser']) -> name('getUser');
