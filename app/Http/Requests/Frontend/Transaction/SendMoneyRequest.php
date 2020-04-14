<?php

namespace App\Http\Requests\Frontend\Transaction;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class SendContactRequest.
 */
class SendMoneyRequest extends FormRequest
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
            'amount' => ['required'],
            'recipient' => ['required'],
            'transaction_type' => ['required'],
           
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
