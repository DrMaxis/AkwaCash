<?php

namespace App\Http\Controllers\Frontend\Ecommerce\Market;

use App\Http\Controllers\Controller;
use App\Helpers\Auth\SocialiteHelper;

/**
 * Class MarketController.
 */
class ProductController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {

        // $products
        $user= auth()->user();
        $market = $user->account->market;

       return view('frontend.ecommerce.market.products')->with('market', $market);
    }

     public function view(Product $product) { 

        // return view('frontend.ecommerce.market.product.view')->with('product', $product);
     }

     public function create(AddNewProductRequest $request) {
    
     }

    
    public function update(UpdateProductRequest  $request, Product $product) {
//
        
}

public function delete(Product $product) {


}

}

