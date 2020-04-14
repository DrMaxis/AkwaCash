<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Market;
use App\Models\Auth\BankAccount;
use App\Models\Auth\Transaction;
use App\Models\Auth\CardReference;



/**
 * Class UserRelationship.
 */
trait AccountRelationship
{
    /**
     * @return mixed
     * 
     *   public function providers()
     *  {
     *  return $this->hasMany(SocialAccount::class);
     * }
     * 
     */
  

    
    

      /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'uuid');
    }

        /**
     * @return mixed
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'account_id', 'uuid');
    }

     /**
     * @return mixed
     */
    public function banks()
    {
        return $this->hasMany(BankAccount::class, 'account_id', 'uuid');
    }

      /**
     * @return mixed
     */
    public function cardReferences()
    {
        return $this->hasMany(CardReference::class, 'account_id', 'uuid');
    }

    

      /**
     * @return mixed
     */
    public function market()
    {
        return $this->hasOne(Market::class, 'account_id', 'uuid');
    }



}
