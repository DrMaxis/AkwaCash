<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\Account;
use App\Models\Auth\Product;
use App\Models\Auth\MarketManager;


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

    
 /**
     * @return mixed
     */
    public function products()
    {
        return $this->hasMany(Product::class);
    }


/**
     * @return mixed
     */
    public function managers()
    {
        return $this->hasMany(MarketManager::class);
    }



}
