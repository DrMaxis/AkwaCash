<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\MarketMethod;
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

        'user_id',
        'default_currency',
        'Market_balance',
        'Market_owner',
        'Market_email',
        'Market_type',
        'Market_phone',
        'Market_phone_network',
        'default_funding',
        'last_updated',
        'closed'

    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
