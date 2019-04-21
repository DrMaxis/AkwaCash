

@extends('frontend.layouts.login')

@section('title', app_name() . ' | ' . __('labels.frontend.auth.login_box_title'))

@section('content')
 

<div class="container h-100  h-sm-auto align-items-center ">
        <div class="row align-items-center h-100  h-sm-auto">
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 mx-auto text-center">
                <h2 class="font-weight-light mb-3 text-white mt-3">Akwa African<span class="font-weight-normal">Mobile Money</span></h2>
                <h5 class="font-weight-light mb-5 text-white text-center">Welcome.<br>Please sign in to your account.</h5>
                {{ html()->form('POST', route('frontend.auth.login.post'))->open() }}
                <div class="card mb-2">
                    <div class="card-body p-0">
                            


                            
                             {{ html()->text('email')
                            ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.email'))
                            ->attribute('maxlength', 191) ->required() }}


                        <hr class="my-0">
                         {{ html()->password('password')
                        ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.password'))
                        ->required() }}


                    </div>
                </div>
                    <small class="form-text text-white text-center">This is basic html demo page. Click on Sign in button and you will be redirected to dashbaord admin page.</small>
                <div class="my-4 row">
                    <div class="col-12  text-center">
                        <div class="custom-control custom-checkbox">
                            {{ html()->checkbox('remember', true, 1)->class('custom-control-input') }}
                            {{ html()->label(__('labels.frontend.auth.remember_me') )->for('remember')->class('custom-control-label text-white') }}
                            
                            
                        </div>
                    </div>
                </div>
                <div class="text-center">
                        {{ form_submit(__('labels.frontend.auth.login_button').'<i class="material-icons">person</i>')->class('btn btn-outline-light btn-sm rounded d-inline-block') }}
                    @if(config('access.registration'))
                    <a href="{{route('frontend.auth.register')}}" class=" btn btn-outline-light btn-sm rounded d-inline-block {{ active_class(Active::checkRoute('frontend.auth.register')) }}"><i class="material-icons">person</i>@lang('navs.frontend.register')</a>
                    @endif
                    
                </div> 
                {{ html()->form()->close() }}
<br>
                <div class="row">
                        <div class="col">
                            <div class="text-center">
                                {!! $socialiteLinks !!}
                            </div>
                        </div><!--col-->
                    </div><!--row-->
                <br>
                <div class="text-center mb-4">
                        <a class="text-white" href="{{ route('frontend.auth.password.reset') }}">@lang('labels.frontend.passwords.forgot_password')</a>
                </div>

            </div>
        </div>
    </div>
    <!-- content page ends -->

@endsection















@section('page-scripts')



  @endsection
