<?php

namespace App\Models\Auth\Traits\Relationship;

use App\Models\Auth\Product;






/**
 * Class ProductVariantRelationship.
 */
trait ProductVariantRelationship
{
    
     

public function product() {
    $this->belongsTo(Product::class);
}

    

}
