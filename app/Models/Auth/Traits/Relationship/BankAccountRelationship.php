<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\Account;




/**
 * Class UserRelationship.
 */
trait BankAccountRelationship
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
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    

}
