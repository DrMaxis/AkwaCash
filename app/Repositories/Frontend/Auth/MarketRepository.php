<?php

namespace App\Repositories\Frontend\Auth;


use App\Models\Auth\Market;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;


/**
 * Class MarketRepository.
 */
class MarketRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Market::class;
    }


    /**
     * @param $uuid
     *
     * @throws GeneralException
     * @return mixed
     */
    public function findByUuid($uuid)
    {
        $market = $this->model
            ->uuid($uuid)
            ->first();

        if ($market instanceof $this->model) {
            return $market;
        }

        throw new GeneralException('Market Account not found');
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
            $market = parent::create([
                'account_id' => auth()->user()->account->uuid ?? null,
                'name' => $data['market_name'],
                'slug' => slugify($data['market_name']),
                'default_currency' => 'USD',
                'contact_email' => $data['contact_email'] ?? auth()->user()->account->account_email,
                'contact_phonenumber' => $data['contact_phonenumber'] ?? auth()->user()->account->account_phone,
                'owner' => auth()->user()->name,
                //'active' => $data['bank_account_passcode'] ?? null,
                'country_of_origin' => $data['country_of_origin'],
                
  
                
            ]);
            
            // account created event

          /*   throw new GeneralException('Bank Account not found'); */
            // Return the user object
            return $market;
        });
    }

   

   
 
}
