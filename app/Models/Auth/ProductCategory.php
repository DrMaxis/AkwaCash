<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\ProductCategoryMethod;
use App\Models\Auth\Traits\Attribute\ProductCategoryAttribute;
use App\Models\Auth\Traits\Relationship\ProductCategoryRelationship;




/**
 * Class Account.
 */
class ProductCategory extends Model
{
    use ProductCategoryRelationship, Uuid, ProductCategoryMethod, ProductCategoryAttribute;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'product_categories';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        
        'name',
        'slug',

    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
