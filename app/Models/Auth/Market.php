<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\MarketMethod;
use App\Models\Auth\Traits\Attribute\MarketAttribute;
use App\Models\Auth\Traits\Relationship\MarketRelationship;




/**
 * Class Account.
 */
class Market extends Model
{
    use MarketRelationship, Uuid, MarketMethod, MarketAttribute;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'markets';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        'account_id',
        'name',
        'slug',
        'default_currency',
        'about_market',
        'buisness_type',
        'offical_website',
        'selling_platforms',
        'managing_address',
        'operating_address',
        'country_of_origin',
        'tax_id',
        'year_established',
        'number_of_employees',
        'main_product_types',
        'owner',
        'phone_network',
        'contact_email',
        'contact_phonenumber',
        'managing_address',
        'operating_address',
        'country_of_origin',
        'pruchasing_volume',
        'primary_sourcing_purpose',
        'average_sourcing_frequency',
        'supplier_qualifications',

    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
