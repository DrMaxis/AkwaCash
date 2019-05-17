@extends('frontend.layouts.app') 
@section('content')

<!-- content page title -->
<div class="container-fluid bg-light-opac">
    <div class="row">
        <div class="container my-3 main-container">
            <div class="row align-items-center">
                <div class="col">
                    <h2 class="content-color-primary page-title"><strong>
                        @lang('navs.frontend.user.account')
                    </strong></h2>
                    <p class="content-color-secondary page-sub-title">Creative, amazing, awesome and unique</p>
                </div>
                <div class="col-auto">
                    <button class="btn btn-rounded pink-gradient text-uppercase"><i class="material-icons">add</i> <span class="text-hide-xs">Create</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- content page title ends -->

<!-- content page -->
<div class="container-fluid mt-4 main-container">

    <div class="row" style="justify-content: center;">

        <div class="col-12 col-md-6">
            <div class="card mb-4 fullscreen">
                <div class="card-header">
                    <div class="media">
                        <div class="media-body">
                            <h4 class=" mb-0">Profile </h4>
                        </div>
                        <button class="btn btn-sm primary-gradient mr-2">Edit</button>
                        
                    </div>
                </div>
                <div class="card-body pb-0">
                    <div class="row align-items-center no-gutters">
                      
                        <a href="profile.html " class="col">
                            <figure class="avatar avatar-120 mx-auto mb-3">
                                <img src="{{ $logged_in_user->picture }}" alt="">
                            </figure>
                        </a>
                       
                    </div>

                    <h5 class="card-title mb-2 text-white text-center">{{ $logged_in_user->name }}</h5>
                    <h6 class="card-subtitle mb-3 text-white text-center">{{ $logged_in_user->username }}</h6>

                    <div class="row bg-light-secondary text-center">
                        <div class="col py-3">
                            <h5 class=" text-white mb-0">5000</h5>
                            <p class=" text-white small mb-0">Transactions</p>
                        </div>
                        <div class="col py-3">
                            <h5 class=" text-white mb-0">$450</h5>
                            <p class=" text-white small mb-0">Money Sent</p>
                        </div>
                        <div class="col py-3">
                            <h5 class=" text-white mb-0">$1586</h5>
                            <p class=" text-white small mb-0">Money Recieved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">

        <div class="col-12 col-md-12">
            <div class="card mb-4 fullscreen">
                <div class="card-header">
                    <div class="media">
                        <div class="media-body">
                            <h4 class=" mb-0">Account Information </h4>
                        </div>

                       
                    </div>
                </div>


                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile">
    @include('frontend.user.account.tabs.profile') </div>
                        <div class="tab-pane fade" id="account" role="tabpanel" aria-labelledby="account">
    @include('frontend.user.account.tabs.edit')
                        </div>
                        @if($logged_in_user->canChangePassword())
                        <div class="tab-pane " id="security" role="tabpanel" aria-labelledby="security">
    @include('frontend.user.account.tabs.change-password')
                        </div>
                        @endif
                    </div>
                </div>
                <div class="card-footer border-top tabs-footer">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a id="profile-tab" href="#profile" class="nav-link" aria-controls="profile" data-toggle="tab" role="tab" aria-selected="true">@lang('navs.frontend.user.profile')</a>
                        </li>
                        <li class="nav-item">
                            <a id="account-tab" href="#account" class="nav-link" aria-controls="account" role="tab" data-toggle="tab">@lang('navs.frontend.user.account')</a>
                        </li>
                        @if($logged_in_user->canChangePassword())
                        <li class="nav-item">
                            <a id="security-tab" href="#security" class="nav-link" aria-controls="security" role="tab" data-toggle="tab">@lang('navs.frontend.user.security')</a>
                        </li>
                        @endif
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="row">

            <div class="col-12 col-md-12">
                <div class="card mb-4 fullscreen">
                    <div class="card-header">
                        <div class="media">
                            <div class="media-body">
                                <h4 class=" mb-0">Funding</h4>
                            </div>
    
                            
                        </div>
                    </div>
    
    
                    <div class="card-body">
                        <div class="tab-content">
                           
                            <div class="tab-pane fade show active" id="banks" role="tabpanel" aria-labelledby="banks">
        @include('frontend.user.account.tabs.banking')
                            </div>
                          
                            <div class="tab-pane fade" id="creditcards" role="tabpanel" aria-labelledby="creditcards">
        @include('frontend.user.account.tabs.cards')
                            </div>
                            
                        </div>
                    </div>
                    <div class="card-footer border-top tabs-footer">
                        <ul class="nav nav-tabs" role="tablist">
                            
                            <li class="nav-item">
                                <a id="account-tab" href="#banks" class="nav-link" aria-controls="banks" role="tab" data-toggle="tab">@lang('navs.frontend.user.bank_account')</a>
                            </li>
                            
                            <li class="nav-item">
                                <a id="security-tab" href="#creditcards" class="nav-link" aria-controls="creditcards" role="tab" data-toggle="tab">@lang('navs.frontend.user.credit_cards')</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

</div>
<!-- content page ends -->
@endsection