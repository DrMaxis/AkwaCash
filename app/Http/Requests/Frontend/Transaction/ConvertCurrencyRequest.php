<?php

namespace App\Http\Requests\Frontend\Transaction;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ConvertCurrencyRequest.
 */
class ConvertCurrencyRequest extends FormRequest
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
            'paymentAmount' => ['required'],
            'baseCurrency' => ['required'],
            'factorCurrency' => ['required'],
           
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
