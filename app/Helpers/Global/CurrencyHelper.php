<?php


use GuzzleHttp\Client;
use Swap\Laravel\Facades\Swap;


if (!function_exists('convertCurrency')) {

    function convertCurrency($paymentAmount, $baseCurrency, $convertingCurrency) {
        
        // set up Guzzle Client request

        $rate = Swap::latest(''.$baseCurrency.'/'.$convertingCurrency.'')->getValue();
        
         $exchangeValue = $paymentAmount * $rate;
         return $exchangeValue;

        }
  
      
    }
  

