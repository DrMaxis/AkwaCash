<?php

namespace App\Http\Controllers\Frontend\Ecommerce\Market;

use App\Models\Auth\Market;
use App\Http\Controllers\Controller;
use App\Helpers\Auth\SocialiteHelper;
use App\Repositories\Frontend\Auth\MarketRepository;
use App\Http\Requests\Frontend\Ecommerce\Market\CreateMarketRequest;

/**
 * Class MarketController.
 */
class MarketController extends Controller
{


    /**
     * @var MarketRepository
     */
    protected $marketRepository;


    /**
     * MarketController constructor.
     *
     * @param marketRepository $marketRepository
     */
    public function __construct(MarketRepository $marketRepository)
    {
        $this->marketRepository = $marketRepository;
    }


    /**
     * @return \Illuminate\View\View
     */
    public function index()
    {

        if (auth()->user()->account->market == null) {
            registerNewMarket();
        } else {
            $market = auth()->user()->account->market;
        }

        return view('frontend.ecommerce.market.dashboard')->with('market', $market);
    }


    /**
     * @return \Illuminate\View\View
     */
    public function create(CreateMarketRequest $request)
    {
        $data = $request->only('market_name', 'contact_email', 'contact_phonenumber', 'country_of_origin');

        $market = $this->marketRepository->create($data);

        if ($market) {
            return response()->json('Market Created');
        }

        return view('frontend.ecommerce.market.register');
    }



    public function profile(Market $market)
    {

        $market = auth()->user()->account->market;

        return view('frontend.ecommerce.market.profile')->with('market', $market);
    }

    public function orders() {
        $market = auth()->user()->account->market;
        return view('frontend.ecommerce.market.orders')->with('market', $market);
    }

    /**
     * @return \Illuminate\View\View
     */
    public function registerNewMarket()
    {
        return view('frontend.ecommerce.market.register');
    }
}
