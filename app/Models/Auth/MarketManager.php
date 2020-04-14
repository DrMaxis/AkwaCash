<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\MarketManagerMethod;
use App\Models\Auth\Traits\Relationship\MarketManagerRelationship;
use App\Models\Auth\Traits\Attribute\MarketManagerAttribute;




/**
 * Class MarketManager.
 */
class MarketManager extends Model
{
    use MarketManagerRelationship, Uuid, MarketManagerMethod, MarketManagerAttribute;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'market_managers';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        'market_id',
        'user_id',
    ];


    
    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
