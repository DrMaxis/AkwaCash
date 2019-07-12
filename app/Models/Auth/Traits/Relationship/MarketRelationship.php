<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\Account;





/**
 * Class MarketRelationship.
 */
trait MarketRelationship
{
    
     


     /**
     * @return mixed
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    

}
