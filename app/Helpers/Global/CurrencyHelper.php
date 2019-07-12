<?php

use GuzzleHttp\Client;


if (!function_exists('convertCurrency')) {

    function convertCurrency($paymentAmount, $baseCurrency, $convertingCurrency) {
        
        // set up Guzzle Client request

        $client = new Client();
        $uri = env('RAVE_CURRENCY_CONVERSION_URI');
        $postdata = [
            'secret_key' => env('RAVE_SECRET_KEY'),
            'service' => 'rates_convert',
            'service_method' => 'post',
            'service_version' => 'v1',
            'service_channel' => 'transactions',
            'service_channel_group' => 'merchants',
            'service_payload' => [
                'FromCurrency' => 'USD',
                'ToCurrency' => 'GHS',
                'Amount' => 5000,
            ],
        ];
        $options = [
            'headers'   => ['Content-Type' => 'application/json'],
            'body'      => json_encode($postdata, true),
            'timeout' => 200
        ];

        $response = $client->post($uri, $options);
        $result = json_encode($response, true);
         dd($postdata, $result, $response, $options); 

        }
  
      
    }
  

