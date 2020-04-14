<?php

use App\Http\Controllers\Frontend\Ecommerce\Market\MarketController;
use App\Http\Controllers\Frontend\Ecommerce\Market\ProductController;


Route::group(['namespace' => 'ecommerce', 'as' => 'ecommerce.'], function () {
    Route::get('market/register', [MarketController::class, 'registerNewMarket'])->name('market.register');
    Route::post('market/register/create', [MarketController::class, 'create'])->name('market.create');
Route::get('market/dashboard', [MarketController::class, 'index'])->name('market.index');
Route::get('market/products', [ProductController::class, 'index'])->name('market.products');
Route::get('market/profile',[MarketController::class, 'profile'])->name('market.profile');
Route::get('market/orders', [MarketController::class, 'orders'])->name('market.orders');

});