<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\BankAccountMethod;
use App\Models\Auth\Traits\Relationship\BankAccountRelationship;





/**
 * Class User.
 */
class BankAccount extends Model
{
    use BankAccountRelationship, Uuid, BankAccountMethod;


    /**
     * The database table used by the model.
     *
     * @var string
     */


    protected $table = 'bank_accounts';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */



    protected $fillable = [

        'account_id',
        'bank_code',
        'bank_name',
        'bank_branch_code',
        'account_first_name',
        'account_last_name',
        'account_number',
        'account_routing',
        'account_passcode',
        'account_bvn',
        'account_currency',
        'account_country',
        'error',
        'last_updated',


    ];



    /**
     * Auto update created_at and updated_at
     *
     * @var array
     */


    public $timestamps = true;
}
