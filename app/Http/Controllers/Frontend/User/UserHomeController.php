<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;

/**
 * Class DashboardController.
 */
class UserHomeController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {

        $user = auth()->user();
        $userAccount = $user->account()->first();
        $userCard = $userAccount->cardReferences()->where('default_card', '=', 1)->get()->first();
        $userBank = $userAccount->bank->bank_name;
        $userPhone = 'MTN | '.''.$userAccount->account_phone;
        $paymentOptions = [

            $userBank,
            $userCard,
            $userPhone,
        ];

/* 
        $transactions = $userAccount->transactions()->get();
        dd($transactions); */
      

      



        return view('frontend.user.index')->with(['paymentProviders' => $paymentOptions]);
    }
}
