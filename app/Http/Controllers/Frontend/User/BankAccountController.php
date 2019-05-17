<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Repositories\Frontend\Auth\BankAccountRepository;
use App\Http\Requests\Frontend\BankAccount\SaveBankAccountRequest;
use App\Exceptions\GeneralException;

/**
 * Class ProfileController.
 */
class BankAccountController extends Controller
{
    /**
     * @var BankAccountRepository
     */
    protected $bankAccountRepository;

    /**
     * ProfileController constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(BankAccountRepository $bankAccountRepository)
    {
        $this->bankAccountRepository = $bankAccountRepository;
    }

    /**
     * @param CreateBankAccountRequest $request
     *
     * @throws \App\Exceptions\GeneralException
     * @return mixed
     */
    public function saveABank(SaveBankAccountRequest $request)
    {
         $bankAccount = $this->bankAccountRepository->create($request->only('account_number','bank_name', 'bank_code', 'bank_currency','bank_country'));
if($bankAccount) {
return response()->json('bank saved');


}

        /* event(new BankAccountCreated($bankAccount)); */

        throw new GeneralException('Error when creating your account');
        /* return redirect()->route('frontend.user.account')->withFlashSuccess(__('strings.frontend.user.profile_updated'));  */
    }
}
