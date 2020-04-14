<?php

namespace App\Repositories\Frontend\Auth;


use App\Models\Auth\Product;
use Illuminate\Support\Facades\DB;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;


/**
 * Class MarketRepository.
 */
class ProductRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Product::class;
    }


    /**
     * @param $uuid
     *
     * @throws GeneralException
     * @return mixed
     */
    public function findByUuid($uuid)
    {
        $product = $this->model
            ->uuid($uuid)
            ->first();

        if ($product instanceof $this->model) {
            return $product;
        }

        throw new GeneralException('Product Account not found');
    }

    

      




   
 
}
