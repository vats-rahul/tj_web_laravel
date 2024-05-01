<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Techjockey;
use App\Http\Controllers\Ajax;
use Jenssegers\Agent\Agent;

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
$agent = new Agent();
$isMobile = $agent->isMobile();

if ($isMobile) {
    // Routes for mobile users
    Route::get('/', [Techjockey::class,"mob_index"]);
} else {
    // Routes for desktop users
    Route::get('/', [Techjockey::class,"index"]);
}

Route::get('/ajax/userInfo', [Ajax::class, 'userInfo'])->name('ajax.userInfo');
Route::get('/ajax/renderHeaderNavElements', [Ajax::class, 'renderHeaderNavElements'])->name('ajax.renderHeaderNavElements');
Route::get('/ajax/renderMobileElements', [Ajax::class, 'renderMobileElements'])->name('ajax.renderMobileElements');

