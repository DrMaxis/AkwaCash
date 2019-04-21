<?php

namespace App\Models\Auth\Traits\Relationship;



/**
 * Class UserRelationship.
 */
trait AccountRelationship
{
    /**
     * @return mixed
     * 
     *   public function providers()
     *  {
     *  return $this->hasMany(SocialAccount::class);
     * }
     * 
     */
  

    
    

      /**
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
