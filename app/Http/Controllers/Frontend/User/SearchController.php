<?php

namespace App\Http\Controllers\Frontend\User;

use GuzzleHttp\Client;
use App\Models\Auth\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use function GuzzleHttp\json_decode;

/**
 * Class AccountController.
 */
class SearchController extends Controller
{



    public function liveSearch(Request $request)
    {

        $currentUser = auth()->user();
        $data = User::select("*")
            ->where([["username", "LIKE", "%{$request->input('query')}%"]])
            ->orwhere([["username", "NOT LIKE", "%{$currentUser->username}%"]])
            ->orWhere("phone_number", "LIKE", "%{$request->input('query')}%")
            
            ->get();

        foreach ($data as $user) {


           
            $user->setHidden([
                'password_changed_at',
                'confirmation_code',
                'phone_number_confirmation_code',
                'last_login_ip',
                'uuid',
                'password',
                'account',
                'created_at',
                'updated_at',
                'first_name',
                'last_name',
                'id',
                'last_login_at',
                'deleted_at',
                'email',
                'first_name',
                'id',
                'last_login_at',
                'last_name',
                'password',
                'phone_number_changed_at',
                'phone_number_confirmed',
                'remember_token',
                'timezone',
                'to_be_logged_out',
                'avatar_type',
                'active',
                
            ]);
        }
        return response()->json($data);
    }

    public function getUserSearchedFor(Request $request) {

        $username = $request['username'];
        $user = User::where('username','=', $username)->get()->first();

        if(!$user) {
            return 'User not found';
        }

       
            
        
        $data = [
            'full_name' => $user->full_name,
            'avatar_location' => $user->avatar_location ?? 'https://www.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028.jpg?s=80&d=mm&r=g',
            'default_currency' => $user->account->default_currency,
            'phone_number' => $user->phone_number

        ];

        return response()->json($data);
    }


    public function getListOfBanks(Request $request) {

        $country = $request['country'];

          // set up Guzzle Client request

          $client = new Client();
          $uri = 'https://api.ravepay.co/v2/banks/'.$country.'?public_key='.env('RAVE_PUBLIC_KEY');
          $options = [
              'headers'   => ['Content-Type' => 'application/json'],
              'timeout' => 200
          ];
  
          $response = $client->get($uri, $options);
          $result = (string) $response->getBody()->getContents();
          $list = json_decode($result, true);
          $banks = $list['data']['Banks'];
          $bankArray = array();

          foreach($banks as $bank) {
              
              $code = $bank['Code'];
              $name = $bank['Name'];
              $bankArray[] = array('code' => $code, 'name' => $name);
          }



          return $bankArray;
    }

   
}
