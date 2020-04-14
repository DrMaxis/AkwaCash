<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\ProductMethod;
use App\Models\Auth\Traits\Relationship\ProductRelationship;
use App\Models\Auth\Traits\Attribute\ProductAttribute;




/**
 * Class Account.
 */
class Product extends Model
{
    use ProductRelationship, Uuid, ProductMethod, ProductAttribute;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'products';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        'market_id',
        'name',
        'slug',
        'model',
        'sku',
        'details',
        'price',
        'shipping_weight',
        'box_length',
        'box_width',
        'box_height',
        'description',
        'inventory_stock',
        'featured',
        'image',
        'images',
        'category',
        'color',

    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
