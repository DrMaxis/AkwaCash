<?php

namespace App\Events\Frontend\Auth\MobileMoney;

use App\Models\Auth\User;
use App\Models\Auth\Transaction;
use Illuminate\Queue\SerializesModels;

/**
 * Class UserConfirmed.
 */
class DirectGhanaMobileMoneyTransactionCreated
{
    use SerializesModels;

    /**
     * @var
     */
    public $transaction;
    public $user;

    /**
     * @param $transaction, $user
     */
    public function __construct(Transaction $transaction, User $user)
    {
        $this->transaction = $transaction;
        $this->user = $user;
    }
}
