<?php

namespace App\Http\Requests\Frontend\Ecommerce\Market;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CreateMarketRequest.
 */
class CreateMarketRequest extends FormRequest
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
            'market_name' => ['required'],
            'contact_email' => [ 'sometimes'],
            'contact_phonenumber' => [ 'sometimes']
           
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
