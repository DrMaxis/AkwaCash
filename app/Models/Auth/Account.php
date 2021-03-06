<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\AccountMethod;
use App\Models\Auth\Traits\Relationship\AccountRelationship;
use App\Models\Auth\Traits\Attribute\AccountAttribute;

/**
 * Class Account.
 */
class Account extends Model
{
    use AccountRelationship, Uuid, AccountMethod, AccountAttribute;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'accounts';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        'user_id',
        'default_currency',
        'account_balance',
        'account_owner',
        'account_email',
        'account_type',
        'account_phone',
        'account_phone_network',
        'default_funding',
        'last_updated',
        'closed',
        'default_payment_method_id',
        'default_payment_method_type',

    ];



    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
