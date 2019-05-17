<?php

namespace App\Http\Requests\Frontend\BankAccount;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class SendContactRequest.
 */
class SaveBankAccountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'account_number' => ['required'],
            'bank_code' => ['required'],
            'bank_name' => ['required'],
            'bank_currency' => 'min:1',
            'bank_country' => 'min:1',
           
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            
        ];
    }
}
