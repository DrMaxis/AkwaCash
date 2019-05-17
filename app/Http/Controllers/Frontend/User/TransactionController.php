<?php

namespace App\Http\Controllers\Frontend\User;

use GuzzleHttp\Client;
use Illuminate\Support\Str;
use App\Models\Auth\Account;
use App\Models\Auth\Transaction;
use App\Exceptions\GeneralException;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use App\Repositories\Frontend\Auth\TransactionRepository;
use App\Http\Requests\Frontend\Transaction\SendMoneyRequest;
use App\Events\Frontend\Auth\MobileMoney\DirectGhanaMobileMoneyTransactionCreated;

/**
 * Class TransactionsController.
 */
class TransactionController extends Controller
{

    /**
     * @var TransactionRepository
     */
    protected $transactionRepository;

    /**
     * TransactionController constructor.
     *
     * @param TransactionRepository $transactionRepository
     */
    public function __construct(TransactionRepository $transactionRepository)
    {
        $this->transactionRepository = $transactionRepository;
    }






    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('frontend.user.transactions.index');
    }



    public function sendMoney(SendMoneyRequest $request)
    {

        $transactionType = $request['transaction_type'];


        switch ($transactionType) {
            case 'internationalaccount':
                return $this->payWithInternationalBankAccount($request);
                break;
            case 'mobilemoneygh':
                return $this->payWithGhanaMobileMoney($request);
                break;
            case 'mpesa':
                return  $this->payWithMpesa($request);
                break;
            case 'mobilemoneyuganda':
                return   $this->payWithUgandaMobileMoney($request);
                break;
            case 'mobilemoneyzambia':
                return  $this->payWithZambiaMobileMoney($request);
                break;
            case 'mobilemoneyrwanda':
                return  $this->payWithRwandaMobileMoney($request);
                break;
            case 'pwc_qr':
                return   $this->payWithQR($request);
                break;
            case 'usaccount':
                return  $this->payWithAmericanBankAccount($request);
                break;
                case 'card':
                return  $this->payWithCard($request);
                break;
            default:
                throw new GeneralException('Payment Type was not found');
                break;
        }
    }

    //transfer from customer bank to receipiant user account balance


    public function payWithInternationalBankAccount($request)
    {

        $transactionRecipiant = Account::where('account_owner', '=', $request['recipiant'])->get()->first();
        $sender = auth()->user();
        $userAccount = $sender->account()->first();
        $bank = $userAccount->bank;

        $data = array(
            'PBFPubKey' =>  env('RAVE_PUBLIC_KEY'),
            'accountbank' => $bank->bank_code,
            'accountnumber' => $bank->account_number,
            'currency' => $bank->account_currency,
            'country' => $bank->account_country,
            'payment_type' => 'account',
            'amount' => $request['amount'],
            'phonenumber' => $sender->phone_number,
            'firstname' => $sender->first_name,
            'lastname' => $sender->last_name,
            'email' => $sender->email,
            'IP' => Request::ip(),
            'txRef' => 'IBAT-DIR-' . Str::random(8),
            'orderRef' => 'IBAT-DIRF-' . Str::random(16),
            'bvn' => $bank->account_bvn ?: $request['account_bvn'] ?? 12345678901,
            'device_fingerprint' => '',
            'transaction_type' => $request['transaction_type'],
        );

        $transaction = $this->transactionRepository->createInternationalBankTransaction($data, $transactionRecipiant);

        if ($transaction) {
            event(new BankAccountTransaction($transaction, $sender));
            return response()->json('Transaction Accepted, Pending User Verification');
        } else {
            throw new GeneralException('Problem with the request');
        }
    }

    public function payWithGhanaMobileMoney($request)
    {

        $transactionRecipiant = Account::where('account_owner', '=', $request['recipiant'])->get()->first();
        $sender = auth()->user();
        // collect required data from request & db

        $data = array(
            'PBFPubKey' => env('RAVE_PUBLIC_KEY'),
            'currency' => 'GHS',
            'country' => 'GH',
            'payment_type' => 'mobilemoneygh',
            'amount' => $request['amount'],
            'phonenumber' => $sender->phone_number,
            'firstname' => $sender->first_name,
            'lastname' => $sender->last_name,
            'network' => $sender->phone_network,
            'email' => $sender->email,
            'IP' => Request::ip(),
            'txRef' => 'GMM-DIR-' . Str::random(8),
            'orderRef' => 'GMM-DIRF-' . Str::random(16),
            'is_mobile_money_gh' => 1,
            /* 'device_fingerprint' => '' */
            'transaction_type' => $request['transaction_type'],
        );

        $transaction = $this->transactionRepository->createGhanaMobileMoneyTransaction($data, $transactionRecipiant);

        if ($transaction) {
            event(new DirectGhanaMobileMoneyTransactionCreated($transaction, $sender));
            return response()->json('Transaction Accepted, Pending User Verification');
        } else {
            throw new GeneralException('Problem with the request');
        }

        //after verifcation

        //update the recipiant account balance

        // finally display confirm to customer

    }



  //transfer from customer mobile money  to receipiant user account balance

    public function userMobileMoneyTransaction()
    { }







    //transfer from customer Debit/Credit Card to receipant user account balance

    public function userCardTransaction()
    {

        // charge the card


        //verify the card payment

        //confirm the card payment

        //update receipant account balance


    }














    //transfer from user account balance to receipant user account balance

    public function userPayContactTransaction()
    { }

    //transfer from user account balance to  user bank account

    public function userCashOutTransaction()
    { }

    //transfer from user account balance to  user mobile money
    public function userMobileMoneyCashOuTransaction()
    { }
}
