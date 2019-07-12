<?php

namespace App\Models\Auth\Traits\Attribute;

/**
 * Trait AccountAttribute.
 */
trait AccountAttribute
{
   
 

    public function getPaymentMethodsAttribute() {

        $bankAccounts = $this->banks;
        $creditCards = $this->cardReferences;
        $methods = array();
        foreach($bankAccounts as $account) {
            $name = $account->bank_name;
            $identifier = $account->uuid;
            $defaultMethod = $account->default_payment_method;
            $methods[] = ['name' => $name, 'id' => $identifier, 'default' => $defaultMethod];
        }

        foreach($creditCards as $card) {
            $name = $card->name;
            $identifier = $card->uuid;
            $defaultMethod = $card->default_payment_method;
            $methods[] = ['name' => $name, 'id' => $identifier, 'default' => $defaultMethod];
        }

      
        /* dd($bankAccounts, $creditCards, $mobileMoney, $methods); */
       
        return $methods;
    }

    public function getDefaultPaymentMethodAttribute() {
        $paymentType = $this->default_payment_method_type;
        $paymentMethodId = $this->default_payment_method_id;

        if($paymentType == 'bank') {
            $paymentMethod = $this->banks->where('uuid', '=', $paymentMethodId)->first();
        } elseif ($paymentType == 'card') {
            $paymentMethod = $this->cardReferences->where('uuid', '=', $paymentMethodId)->first();
        } elseif ($paymentType == 'mobile') {
            $paymentMethod = $this->account_phone;
        } elseif($this->account_balance <= 0 || $this->account_balance == null) {
            return 'Please Select A Method';
        } else {
            return 'Cash Balance';
        }
        return $paymentMethod;
    }
}
