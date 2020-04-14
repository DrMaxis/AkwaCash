<?php

namespace App\Repositories\Frontend\Auth;


use GuzzleHttp\Client;
use App\Models\Auth\Transaction;
use App\Exceptions\GeneralException;
use App\Repositories\BaseRepository;


/**
 * Class UserRepository.
 */
class TransactionRepository extends BaseRepository
{
    /**
     * @return string
     */
    public function model()
    {
        return Transaction::class;
    }


    /**
     * @param $uuid
     *
     * @throws GeneralException
     * @return mixed
     */
    public function findByUuid($uuid)
    {
        $transaction = $this->model
            ->uuid($uuid)
            ->first();

        if ($transaction instanceof $this->model) {
            return $transaction;
        }

        throw new GeneralException('Transaction not found');
    }



    public function createGhanaMobileMoneyTransaction($data, $recipient)
    {

        $sender = auth()->user();
        //set up transaction api call
        // Encrypt data
        $apiSecretKey = env('RAVE_SECRET_KEY');
        $dataKey = $this->getKey($apiSecretKey);
        $dataReq = json_encode($data);
        $post_enc = $this->encrypt3Des($dataReq, $dataKey);

        // prepare post data
        $postdata = array(
            'PBFPubKey' => env('RAVE_PUBLIC_KEY'),
            'client' => $post_enc,
            'alg' => '3DES-24'
        );

        // set up Guzzle Client request

        $client = new Client();
        $uri = env('RAVE_BASEURI');
        $options = [
            'headers'   => ['Content-Type' => 'application/json'],
            'body'      => json_encode($postdata),
            'timeout' => 200
        ];

        $response = $client->post($uri, $options);

        // if the response is successful

        if ($response) {
            $result = json_encode($response, true);

            //verify the transaction on raves side
            $verification = $this->verifyTransactions($data['txRef']);

            if ($verification) {


                $transaction = parent::create([

                    'account_id' => $sender->account->uuid ?? null,
                    'user_id' => $sender->uuid,
                    'sender_name' => $sender->name,
                    'recipient_name' => $recipient->account_owner,
                    'transaction_type' => $data['transaction_type'],
                    'payment_type' => 'send',
                    'bill_amount' => $data['amount'],
                    'sender_id' => $sender->uuid,
                    'sender_email' => $sender->account_email,
                    'sender_phone' => $sender->account_phone,
                    'currency' => /* $data['currency'] */ 'GHS',
                    'ipaddress' =>  $data['IP'],
                    'txRef' =>  $data['txRef'],
                    'orderRef' => $data['orderRef'],
                    'verified' => 1,

                ]);


                $recipient->account_balance += $data['amount'];

                $transaction = parent::create([

                    'account_id' => $recipient->uuid,
                    'user_id' => $recipient->user_id,
                    'sender_name' => $sender->name,
                    'recipient_name' => $recipient->account_owner,
                    'transaction_type' => $data['transaction_type'],
                    'payment_type' => 'recieve',
                    'bill_amount' => $data['amount'],
                    'recipient_id' => $recipient->uuid,
                    'recipient_email' => $recipient->account_email,
                    'recipient_phone' => $recipient->account_phone,
                    'currency' => /* $data['currency'] */ 'GHS',
                    'ipaddress' =>  $data['IP'],
                    'txRef' =>  $data['txRef'],
                    'orderRef' => $data['orderRef'],
                    'verified' => 1,

                ]);

                $recipient->save();




                return $transaction;
            }
        }
    }


    public function createInternationalBankTransaction($data, $recipient)  {

       /*  die(print_r($data)) */;
        $sender = auth()->user();
 //set up transaction api call
        // Encrypt data
        $apiSecretKey = env('RAVE_SECRET_KEY');
        $dataKey = $this->getKey($apiSecretKey);
        $dataReq = json_encode($data);
        $post_enc = $this->encrypt3Des($dataReq, $dataKey);

        // prepare post data
        $postdata = array(
            'PBFPubKey' => env('RAVE_PUBLIC_KEY'),
            'client' => $post_enc,
            'alg' => '3DES-24'
        );

        // set up Guzzle Client request

        $client = new Client();
        $uri = env('RAVE_BASEURI');
        $options = [
            'headers'   => ['Content-Type' => 'application/json'],
            'body'      => json_encode($postdata),
            'timeout' => 200
        ];

        $response = $client->post($uri, $options);

        // if the response is successful

        if ($response) {
            $result = json_encode($response, true);

            //verify the transaction on raves side
            $verification = $this->verifyTransactions($data['txRef']);

            if ($verification) {


                $transaction = parent::create([

                    'account_id' => $sender->account->uuid ?? null,
                    'user_id' => $sender->uuid,
                    'sender_name' => $sender->name,
                    'recipient_name' => $recipient->account_owner,
                    'transaction_type' => $data['transaction_type'],
                    'payment_type' => 'send',
                    'bill_amount' => $data['amount'],
                    'recipient_id' => $recipient->uuid,
                    'recipient_email' => $recipient->account_email,
                    'recipient_phone' => $recipient->account_phone,
                    'currency' => $sender->account->default_currency,
                    'ipaddress' =>  $data['IP'],
                    'txRef' =>  $data['txRef'],
                    'orderRef' => $data['orderRef'],
                    'verified' => 1,

                ]);


                $recipient->account_balance += $data['amount'];
                $recipient->save();




                return $transaction;
            }


    }
}




    public function testFlutterBank()
    {


        error_reporting(E_ALL);
        ini_set('display_errors', 1);

        $data = array(
            'PBFPubKey' => 'FLWPUBK_TEST-a4494eea1329708ae1a32fd3acb7affc-X',
            'accountbank' => '044',
            'accountnumber' => '0690000031',
            'currency' => 'NGN',
            'country' => 'NG',
            'payment_type' => 'account',
            'amount' => '305',
            'phonenumber' => '054709929300',
            'firstname' => 'Eddy ',
            'lastname' => 'Kwame',
            'email' => 'tester@unwanted.co',
            'IP' => '103.238.105.185',
            'txRef' => 'MXX-ASC-6774',
            'orderRef' => 'MXX-ASC-90929',
            'bvn' => '12345678901',
            'device_fingerprint' => ''
        );

        $SecKey = 'FLWSECK_TEST-cdebb4065945fb20077fbce903dbd0ee-X';

        $key = $this->getKey($SecKey);

        $dataReq = json_encode($data);

        $post_enc = $this->encrypt3Des($dataReq, $key);



        $postdata = array(
            'PBFPubKey' => 'FLWPUBK_TEST-a4494eea1329708ae1a32fd3acb7affc-X',
            'client' => $post_enc,
            'alg' => '3DES-24'
        );

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://api.ravepay.co/flwv3-pug/getpaidx/api/charge");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postdata)); //Post Fields
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 200);
        curl_setopt($ch, CURLOPT_TIMEOUT, 200);


        $headers = array('Content-Type: application/json');

        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $request = curl_exec($ch);

        if ($request) {
            $result = json_decode($request, true);

            $this->verifyFlutter($data['txRef']);
        } else {
            if (curl_error($ch)) {
                echo 'error:' . curl_error($ch);
            }
        }

        curl_close($ch);
    }

























    private function verifyTransactions($ref)
    {

        $result = array();

        $postdata =  array(
            'txref' => $ref,
            'SECKEY' => env('RAVE_SECRET_KEY')
        );


        // set up Guzzle Client request

        $client = new Client();
        $uri = env('RAVE_VERIFYURI');
        $options = [
            'headers'   => ['Content-Type' => 'application/json'],
            'body'      => json_encode($postdata),
            'timeout' => 200
        ];

        $response = $client->post($uri, $options);


        $result = (string)$response->getBody()->getContents();

        $verification = json_decode($result, true);


        if ('error' == $verification['status']) {
            // there was an error from the API
            die('API returned error: ' . $verification->message);
        }

        if ('success-pending-validation' == $verification['data']['status'] && '00' == $verification['data']['chargecode']) {
            // transaction was successful...
            // please check other things like whether you already gave value for this ref
            // If the amount and currency matches the expected amount and currency etc.
            // if the email matches the customer who owns the product etc
            // Give value



            return 'Transaction Verified';
        }
        return 'Transaction Accepted, Pending Verification';
    }


    // Encryption


    private function getKey($seckey)
    {
        $hashedkey = md5($seckey);
        $hashedkeylast12 = substr($hashedkey, -12);

        $seckeyadjusted = str_replace("FLWSECK-", "", $seckey);
        $seckeyadjustedfirst12 = substr($seckeyadjusted, 0, 12);

        $encryptionkey = $seckeyadjustedfirst12 . $hashedkeylast12;
        return $encryptionkey;
    }



    private  function encrypt3Des($data, $key)
    {
        $encData = openssl_encrypt($data, 'DES-EDE3', $key, OPENSSL_RAW_DATA);
        return base64_encode($encData);
    }
}
