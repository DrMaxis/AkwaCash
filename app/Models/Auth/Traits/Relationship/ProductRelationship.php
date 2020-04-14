<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\Market;
use App\Models\Auth\ProductVariant;






/**
 * Class ProductRelationship.
 */
trait ProductRelationship
{
    
     


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
    public function variants()
    {
        return $this->hasMany(ProductVariant::class);
    }

    

}
