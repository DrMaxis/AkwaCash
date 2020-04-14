<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\User;
use App\Models\Auth\Market;
use App\Models\Auth\Account;



/**
 * Class MarketManagerRelationship
 */
trait MarketManagerRelationship
{
    /**
     * @return mixed
     * 
     *   
     * 
     */
  

    
    


     /**
     * @return mixed
     */
    public function market()
    {
        return $this->belongsTo(Market::class);
    }

      /**
     * @return mixed
     */
    public function user()
    {
        return $this->hasOne(User::class);
    }

    

}
