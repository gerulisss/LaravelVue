<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerificationController;
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

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', RegisterController::class);
    Route::post('/forgot-password', ForgotPasswordController::class);
    Route::post('/reset-password', ResetPasswordController::class);

    // guest verification (temporary auth)
    // Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
    // Route::post('/verify-resend', [VerificationController::class, 'resend']);
});

Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
Route::post('/verify-resend', [VerificationController::class, 'resend']);

Route::middleware('auth:sanctum')->group(function () {
    Route::patch('/profile', ProfileController::class);
    Route::patch('/password', PasswordController::class);
    Route::get('/user', UserController::class);
    Route::post('/logout', [AuthController::class, 'logout']);

    // in app verification
    // Route::post('/verify-email/{id}/{hash}', [VerificationController::class, 'verify'])->name('verify');
    // Route::post('/verify-resend', [VerificationController::class, 'resend']);
});

Route::group(['prefix' => 'tasks', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/', [\App\Http\Controllers\API\TaskController::class, 'index']);
    Route::post('add', [\App\Http\Controllers\API\TaskController::class, 'add']);
    Route::get('edit/{id}', [\App\Http\Controllers\API\TaskController::class, 'edit']);
    Route::post('update/{id}', [\App\Http\Controllers\API\TaskController::class, 'update']);
    Route::delete('delete/{id}', [\App\Http\Controllers\API\TaskController::class, 'delete']);
});

Route::group(['prefix' => 'users', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/', [\App\Http\Controllers\UserController::class, 'index']);
    Route::post('add', [\App\Http\Controllers\UserController::class, 'add']);
    Route::get('edit/{id}', [\App\Http\Controllers\UserController::class, 'edit']);
    Route::post('update/{id}', [\App\Http\Controllers\UserController::class, 'update']);
    Route::delete('delete/{id}', [\App\Http\Controllers\UserController::class, 'delete']);
});
