<?php

namespace App\Repositories\Frontend\Auth;


use App\Models\Auth\BankAccount;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;


/**
 * Class UserRepository.
 */
class BankAccountRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return BankAccount::class;
    }


    /**
     * @param $uuid
     *
     * @throws GeneralException
     * @return mixed
     */
    public function findByUuid($uuid)
    {
        $bank = $this->model
            ->uuid($uuid)
            ->first();

        if ($bank instanceof $this->model) {
            return $bank;
        }

        throw new GeneralException('Bank Account not found');
    }

    

     /**
     * @param array $data
     *
     * @throws \Exception
     * @throws \Throwable
     * @return \Illuminate\Database\Eloquent\Model|mixed
     */
    public function create(array $data)
    {
        return DB::transaction(function () use ($data) {
            $bank = parent::create([
                'account_id' => auth()->user()->account->uuid ?? null,
                'bank_name' => $data['bank_name'],
                'bank_code' => $data['bank_code'],
                'bank_branch_code' => $data['bank_branch_code'] ?? null,
                'account_routing' => $data['phone_number'] ?? null,
                'account_first_name' => auth()->user()->first_name,
                'account_last_name' => auth()->user()->last_name,
                'account_number' => $data['account_number'],
                'account_passcode' => $data['bank_account_passcode'] ?? null,
                'account_bvn' => $data['bank_account_bvn'] ?? null,
                'account_currency' => $data['bank_currency'] ?? null,
                'account_country' => $data['bank_country'] ?? null,
            ]);
            
            // account created event

          /*   throw new GeneralException('Bank Account not found'); */
            // Return the user object
            return $bank;
        });
    }





   

   
 
}
