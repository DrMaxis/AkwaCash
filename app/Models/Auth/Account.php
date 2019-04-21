<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\AccountMethod;
use App\Models\Auth\Traits\Relationship\AccountRelationship;




/**
 * Class User.
 */
class Account extends Model
{
    use AccountRelationship, Uuid, AccountMethod;
       
    protected $table = 'accounts';
    protected $fillable = ['user_id','default_currency','account_balance','account_owner','account_email','account_type','account_phone','last_updated','closed'];
    public $timestamps = true;
}
