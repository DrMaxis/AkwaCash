<?php

namespace App\Models\Auth;

use App\Models\Traits\Uuid;
use Illuminate\Database\Eloquent\Model;
use App\Models\Auth\Traits\Method\CardReferenceMethod;
use App\Models\Auth\Traits\Relationship\CardReferenceRelationship;






/**
 * Class User.
 */
class CardReference extends Model
{
    use CardReferenceRelationship, Uuid, CardReferenceMethod;


/**
     * The database table used by the model.
     *
     * @var string
     */
   protected $table = 'card_references';


  /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
       
    
    protected $fillable = [

        'account_id',
        'reference_email',
        'token',
        'default_card',

];


/**
     * Auto update created_at and updated_at
     *
     * @var array
     */
       
    public $timestamps = true;

}
