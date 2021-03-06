



<div class="row">
        <div class="col-12 col-md-6">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="media">
                        <div class="media-body"  data-toggle="modal" data-target="#cashModal">
                            <p class="content-color-primary mb-0">Cash Balance</p>
                            <h4 class="mb-0 mt-1">${{$logged_in_user->account()->first()->account_balance}}</h4>
                        </div>
                        <div class="w-auto position-relative">
                            <div class="text-success"><i class="material-icons icon-sm">arrow_drop_up</i> Default</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="media">
                        <div class="media-body" data-toggle="modal" data-target="#mobileMoneyModal">
                            <p class="content-color-primary mb-0">Mobile Money</p>
                            <h4 class="mb-0 mt-1">{{$logged_in_user->phone_network}} | {{$logged_in_user->phone_number}}</h4>
                        </div>
                        <div class="w-auto position-relative">
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="media">
                        <div class="media-body" data-toggle="modal" data-target="#debitModal">
                            <p class="content-color-primary mb-0">Debit </p>
                            <h4 class="mb-0 mt-1">Visa | 7980 <span class="dynamicsparkline mt-1 float-right"><canvas width="54" height="15" style="display: inline-block; width: 54px; height: 15px; vertical-align: top;"></canvas></span></h4>
                        </div>
                        <div class="w-auto position-relative">
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
     

    </div>

{{-- <div class="modal-body text-center pr-4 pl-4">
        <figure class="avatar avatar-120 mx-auto">
          <img src="" class="bank-logo" alt="user image">
            </figure>


            <h5 class="my-3 f-light bank"><span class="bank-name">Choose Your Bank</span></h5>
        
       
                    
        <div class="input-group mb-3">
            

                
                            <select class="form-control bank-selector">
                                <option>Bank By Country</option>
                                
                            </select>

                   

<!-- <input  type="text" class="form-control border-light" id="livesearch-banks" placeholder="Search for a bank.."> -->
          <div class="input-group-append">
              <button class="btn btn-danger dropdown-toggle bank-country-button" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Country
              </button>
              <div class="dropdown-menu" x-placement="bottom-start" style="position: absolute; transform: translate3d(420px, 38px, 0px); top: 0px; left: 0px; will-change: transform;">
                  <a class="dropdown-item" href="#"><span class="bank-country-button-text">GH</span></a>
                  <a class="dropdown-item" href="#"><span class="bank-country-button-text">NG</span></a>
                  <a class="dropdown-item" href="#"><span class="bank-country-button-text">KE</span></a>
                  <a class="dropdown-item" href="#"><span class="bank-country-button-text">TZ</span></a>
                  <a class="dropdown-item" href="#"><span class="bank-country-button-text">UG</span></a>
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#"><span class="bank-country-button-text">Other</span></a>
              </div>
          </div>
        </div>

            <div class="input-group mb-2">
                 <input type="text" class="form-control" id="bankaccountnumber-input" placeholder="Account number.."  aria-label="Text input with dropdown button">
              </div>
       
             

   
        <div class="text-center">
          <br>
          <br>
         <button id="send-money" class="btn btn-circle btn-outline-light btn-block col"><span class="save-bank-button-text">Save</span></button>
        </div>
        <br>
      </div> --}}




{{-- 
{{ html()->modelForm($logged_in_user, 'POST', route('frontend.user.profile.update'))->class('form-horizontal')->attribute('enctype', 'multipart/form-data')->open() }}
@method('PATCH')


<div class="row">
    <div class="col">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.frontend.username'))->for('username') }}

            {{ html()->text('username')
                 ->class('form-control form-control-lg border-0')
                ->placeholder(__('validation.attributes.frontend.username'))
                ->attribute('maxlength', 191)
                ->required()
                ->autofocus() }}
        </div><!--form-group-->
    </div><!--col-->
</div><!--row-->

<div class="row">
    <div class="col">
        <div class="form-group">
            {{ html()->label(__('validation.attributes.frontend.status'))->for('status') }}

            {{ html()->text('status')
                ->class('form-control form-control-lg border-0')
                ->placeholder(__('validation.attributes.frontend.status'))
                ->attribute('maxlength', 191)
                 }}
        </div><!--form-group-->
    </div><!--col-->
</div><!--row-->

<div class="row">
    <div class="col">
        <div class="form-group mb-0 clearfix">
                {{ form_submit(__('labels.general.buttons.update').'<i class="material-icons">edit</i>')->class('btn btn-outline-light btn-sm rounded d-inline-block') }}
           
        </div><!--form-group-->
    </div><!--col-->
</div><!--row-->
{{ html()->closeModelForm() }}
 --}}
 @section('xcomponents') 

 @include('frontend.user.account.modals.cashModal')
 @include('frontend.user.account.modals.mobileMoneyModal')
 @include('frontend.user.account.modals.debitModal')
 
 @include('frontend.user.account.modals.addDebitModal')
 
  @endsection
 
 

@section('page-scripts')
@include('frontend.includes.partials.scripts.search.selectbank')
@endsection