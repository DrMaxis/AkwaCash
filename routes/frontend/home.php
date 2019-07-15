<?php

use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\User\SearchController;
use App\Http\Controllers\Frontend\User\AccountController;
use App\Http\Controllers\Frontend\User\ProfileController;
use App\Http\Controllers\Frontend\User\UserHomeController;
use App\Http\Controllers\Frontend\User\DashboardController;
use App\Http\Controllers\Frontend\User\BankAccountController;
use App\Http\Controllers\Frontend\User\TransactionController;

/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */
Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('contact', [ContactController::class, 'index'])->name('contact');
Route::post('contact/send', [ContactController::class, 'send'])->name('contact.send');

Route::get('/test', [TransactionController::class, 'testFlutter']);
Route::get('/testbank', [TransactionController::class, 'testFlutterBank']);




/*
 * These frontend controllers require the user to be logged in
 * All route names are prefixed with 'frontend.'
 * These routes can not be hit if the password is expired
 */
Route::group(['middleware' => ['auth', 'password_expires']], function () {

    Route::group(['namespace' => 'User', 'as' => 'user.'], function () {

        // User Index Specific
        Route::get('home', [UserHomeController::class, 'index'])->name('index');
        // User Dashboard Specific
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // User Account Specific
        Route::get('account', [AccountController::class, 'index'])->name('account');

        
        // User Profile Specific
        Route::patch('profile/update', [ProfileController::class, 'update'])->name('profile.update');


        // User Send Make Mobile Money Transaction (Direct)
       /*  Route::post('/send/{recipiant}', [TransactionController::class, 'index'])->name('send'); */


        //search for a user by username or phone number

        Route::get('usersearch', [SearchController::class, 'liveSearch'])->name('search');

        Route::get('usersearch/get', [SearchController::class, 'getUserSearchedFor'])->name('search.get');


        Route::get('banks', [SearchController::class, 'getListOfBanks'])->name('bank.list');


Route::get('/conversion', [TransactionController::class, 'currencyConversion'])->name('currency.convert');

        Route::post('bank/save', [BankAccountController::class, 'saveABank'])->name('bank.save');

        Route::post('/sendcash', [TransactionController::class, 'sendMoney'])->name('sendcash');

    });


});
