@extends('frontend.layouts.app') {{-- @lang('strings.frontend.welcome_to', ['place' => app_name()]) --}} 
@section('content')

@section('meta')

<script>


const sendMoneyUrl = "{{route('frontend.user.sendcash')}}"; 
var token = '{{Session::token()}}';
const getUserUrl = "{{route('frontend.user.search.get')}}";
const searchForUserUrl = "{{route('frontend.user.search')}}";
</script>



@endsection
@section('xcss')
<style>
  .digit {
    font-size: 1.3rem;
    height: 75px;
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;
  }

  #currency-input {
    text-align: center;
  }




.off{
  display:!important none;
}

</style>

@endsection
<div class="container-fluid bg-light-opac">
    <div class="row">
        <div class="container my-3 main-container">
            <div class="row align-items-center">
                <div class="col">
                    <h2 class="content-color-primary page-title">Your Finances</h2>
                    <p class="content-color-secondary page-sub-title">View your Cash Card</p>
                </div>
                <div class="col-auto">
                    <button class="btn btn-rounded pink-gradient text-uppercase" data-toggle="modal" data-target="#createOrder"><i class="material-icons">add</i> <span class="text-hide-xs">Cash Card</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- content page -->


<div class="container-fluid mt-4 main-container">
   
  <div class="row">

    <div class="col-12 col-md-12">
      <div class="card mb-4  purp-gradient fullscreen">
        <div class="card-header">
          <div class="media">
            <div class="media-body">
              <h4 class="content-color-primary mb-0">Account Balance</h4>
              <p class="content-color-secondary mb-0">GHS</p>
            </div>

          </div>
        </div>
        <div class="card-body">
          <h1 id="test" class="mt-4"><span class="font-weight-light">$</span> {{$logged_in_user->account()->first()->account_balance}}</h1>
          <p class="small mb-1 text-success "><i class="material-icons icon-sm">arrow_drop_up</i> $250
          </p>
        </div>
        <div class="card-footer border-top">
          <div class="media">
            <div class="media-body">
              <h5 class="content-color-primary mb-0">Latest Transaction</h5>
              <p class="content-color-secondary mb-0 small"><span class="content-color-primary">$340 Recieved </span> from Trevor</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-12">

      <div class="card mb-4 purp-gradient fullscreen">
        <div class="card-header">
          <div class="media">
            <div class="media-body">
              <h4 class="content-color-primary mb-0">Send or Recieve</h4>
            </div>

          </div>
        </div>
        <div class="card-body pt-0">




          <div id="dial-payment" class="container">

            <div class="row">
              <div class="col-12 col-md-4">

                <form method="post" action="#">
                  <label for="currency-field">Enter Amount</label>
                  <input type="text" name="currency-field" id="currency-field" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" value="" data-type="currency"
                    placeholder="$0.00">
                </form>

              </div>


            </div>

            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number="1">
                1
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="2">
                2
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="3">
                3
              </div>
            </div>


            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number="4">
                4
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="5">
                5
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="6">
                6
              </div>
            </div>


            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number="7">
                7
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="8">
                8
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="9">
                9
              </div>
            </div>


            <div class="row">
              <div class="col-4 col-md-4 text-center digit " data-number=".">
                .
              </div>
              <div class="col-4 col-md-4 text-center digit " data-number="0">
                0
              </div>
              <div class="col-4 col-md-4 text-center digit " >
                x
              </div>
            </div>

            <div class="row">
              <div class="col-6 col-md-4 text-center digit " data-toggle="modal" data-target="#request">
                Request
              </div>
              <div class="col-6 col-md-4 text-center digit " data-toggle="modal" data-target="#send" >
                Pay

              </div>

            </div>

            <!-- Modal -->
            <div class="modal fade" id="send" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog  modal-sm modal-dialog-centered " role="document">
                <div class="modal-content box-shadow">
                  <div class="modal-header border-0  px-0">
                    <div class="col-6">
                      <h5 class="card-title mb-0">Send Money</h5>
                    </div>
                    <div class="col text-right">
                      <div class="dropdown">
                        <button class="btn btn-link btn-sm text-secondary rounded-0 dropdown-toggle float-right icon" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="true" type="button">
                          <i class="fa fa-ellipsis-v"></i>
                      </button>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="#">
                              <i class="fa fa-exclamation-circle text-secondary"></i> Report a problem</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-body text-center pr-4 pl-4 sendmoney">
                    <figure class="avatar avatar-120 mx-auto">
                      <img src="" class="recipiant-avi" alt="user image">
                        </figure>


                        <h5 class="my-3 f-light recipiant"><span class="send-recipiant-name">John McMohan</span></h5>
                    
                   
                        
                        <div class="input-group mb-2">
                            <input  type="text" class="form-control border-light" id="livesearch-send" placeholder="To: Name, $username, Email..">
                          </div>
                   
                          <div class="input-group mb-2">
                            <input  type="text" class="form-control border-light" placeholder="For: Plantains, Casava, Mangos...">
                          </div>
                    
                    <div class="input-group mb-3">
                     


                      <input type="text" class="form-control" id="currency-input" data-transactionType="{{$logged_in_user->account()->first()->default_funding}}" aria-label="Text input with dropdown button">


                      <div class="input-group-append">
                          <button class="btn btn-danger dropdown-toggle funding-button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pay With
                          </button>
                          <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(420px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">

@forelse($paymentProviders as $provider) 

@if($provider != null)
<a class="dropdown-item" href="#"><span class="funding-button-text"> {{$provider}} </span></a>
@else 
@endif
 @empty 
        
        

@endforelse
{{-- <a class="dropdown-item" href="#"><span class="funding-button-text">Mobile Account</span></a>
 <a class="dropdown-item" href="#"><span class="funding-button-text">Bank Account</span></a>
 <a class="dropdown-item" href="#"><span class="funding-button-text">Credit or Debit</span></a> --}}
                           
                              <div role="separator" class="dropdown-divider"></div>
                              
                              
                              
                              <a class="dropdown-item" href="#"><span class="funding-button-text">Other</span></a>
                          </div>
                      </div>
                  </div>
                  <div class="latest-transaction">
                    <div class="card mb-4">
                     
                        <div class="card-body">
                            
                            <div class="media">
                                <figure class="avatar avatar-50 mr-3">
                                    <img src="img/user1.png" alt="Generic placeholder image">
                                </figure>
                                <div class="media-body">
                                  <h5 class="content-color-primary mb-0">Last Contact</h5>
                                  <p class="content-color-secondary mb-0 small"><span class="content-color-primary">$255 Recieved </span> from John Doe</p>
                                </div>
                               
                            </div>
                        </div>
                       
                    </div>
                </div>
                    <div class="text-center">
                      <br>
                      <br>
                     <button class="btn btn-circle btn-outline-light btn-block col send-money">Send</button>
                    </div>
                    <br>
                  </div>


                  <div class="transaction-loader off">
    
                    <div class="row">
                        
                        <div class="col-12">
                
                <div class="payment-loader payment-loader4">
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                            
                        </div>
                    </div>
                </div>


                </div>
              </div>
            </div>


              <!-- Modal -->
              <div class="modal fade" id="request" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-dialog  modal-sm modal-dialog-centered " role="document">
                    <div class="modal-content box-shadow pink-gradient">
                      <div class="modal-header border-0  px-0">
                        <div class="col-6">
                          <h5 class="card-title mb-0">Request Payment</h5>
                        </div>
                        <div class="col text-right">
                          <div class="dropdown">
                            <button class="btn btn-link btn-sm text-secondary rounded-0 dropdown-toggle float-right icon" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="true" type="button">
                              <i class="fa fa-ellipsis-v"></i>
                          </button>
                            <div class="dropdown-menu dropdown-menu-right">
                              <a class="dropdown-item" href="#">
                                  <i class="fa fa-exclamation-circle text-secondary"></i> Report a problem</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-body text-center pr-4 pl-4">
                        <figure class="avatar avatar-120 mx-auto">
                          <img src="img/user1.png" class="recipiant-avi" alt="user image">
                            </figure>
                            <h5 class="my-3 f-light recipiant">John McMohan</h5>
                        
                       
                            
                            <div class="input-group mb-2">
                                <input  type="text" class="form-control border-light" id="livesearch-request" placeholder="To: Name, $username, Email..">
                              </div>
                       
                              <div class="input-group mb-2">
                                <input  type="text" class="form-control border-light" placeholder="For: Plantains, Casava, Mangos...">
                              </div>
                        
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" id="currency-input" aria-label="Text input with dropdown button">
                          <div class="input-group-append">
                              <button class="btn btn-danger dropdown-toggle funding-button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Funding
                              </button>
                              <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(420px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
                                  <a class="dropdown-item" href="#"><span class="button-text">MTN</span></a>
                                  <a class="dropdown-item" href="#"><span class="button-text">Bank Of Ghana</span></a>
                                  <a class="dropdown-item" href="#"><span class="button-text">Visa</span></a>
                                  <div role="separator" class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#"><span class="button-text">Other</span></a>
                              </div>
                          </div>
                      </div>

                      <div class="latest-transaction">
                        <div class="card mb-4">
                         
                            <div class="card-body">
                                
                                <div class="media">
                                    <figure class="avatar avatar-50 mr-3">
                                        <img src="img/user1.png" alt="Generic placeholder image">
                                    </figure>
                                    <div class="media-body">
                                      <h5 class="content-color-primary mb-0">Last Contact</h5>
                                      <p class="content-color-secondary mb-0 small"><span class="content-color-primary">$255 Recieved </span> from John Doe</p>
                                    </div>
                                   
                                </div>
                            </div>
                           
                        </div>
                    </div>
                        <div class="text-center">
                          <br>
                          <br>
                         <button class="btn btn-circle btn-outline-light btn-block col">Send</button>
                        </div>
                        <br>
                      </div>
                    </div>
                  </div>


              
                </div>

                
          </div>

 

        </div>

      </div>
    </div>

  </div>
</div>
  <!-- content page ends -->
@endsection
 
@section('page-scripts')

<script src="{{asset('js/MobileMoneyTransaction.js')}}"></script>
<script src="{{asset('js/MobileMoneyTransaction.js')}}"></script>
<script src="{{asset('js/UsernameSearch.js')}}"></script>
<script src="{{asset('js/RetrieveUserFromSearch.js')}}"></script>
@endsection




