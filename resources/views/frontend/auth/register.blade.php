@extends('frontend.layouts.register') 
@section('title', app_name() . ' | ' . __('labels.frontend.auth.register_box_title')) 
@section('content')



<!-- content page -->
<div class="container-fluid h-100 h-sm-auto">
    <div class="row h-100 h-sm-auto">
        <div class="col-12 col-md-6 h-md-100 order-2 order-md-1">
            <div class="row align-items-center h-100">
                <div class="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto mt-2">
                    <h1 class="font-weight-light mb-3 content-color-secondary text-left">African<span class="font-weight-normal content-color-primary">Mobile Money</span></h1>
                    <h4 class="font-weight-light mb-5 content-color-secondary text-left">Provide few details and sign up now<br> Its easy and Quick.</h4>
                    <div class="card mb-2">
                        <div class="card-body p-0">
                            {{ html()->form('POST', route('frontend.auth.register.post'))->open() }} {{ html()->label(__('validation.attributes.frontend.first_name'))->for('first_name')
                            }} {{ html()->text('first_name') ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.first_name'))
                            ->attribute('maxlength', 191) ->required()}}
                            <!--col-->
                            <hr class="my-0"> {{ html()->label(__('validation.attributes.frontend.last_name'))->for('last_name') }} {{ html()->text('last_name')
                            ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.last_name'))
                            ->attribute('maxlength', 191) ->required() }}
                            <hr class="my-0"> {{ html()->label(__('validation.attributes.frontend.email'))->for('email') }} {{ html()->text('email')
                            ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.email'))
                            ->attribute('maxlength', 191) ->required() }}
                            <hr class="my-0"> {{ html()->label(__('validation.attributes.frontend.phone_number'))->for('mobilenumber') }}
                            {{ html()->text('mobilenumber') ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.phone_number'))
                            ->attribute('maxlength', 191) ->required() }}

                            <span id="valid-msg" class="hide">✓ Valid</span>
                            <span id="error-msg" class="hide"></span>
                            <hr class="my-0"> {{ html()->label(__('validation.attributes.frontend.password'))->for('password') }} {{ html()->password('password')
                            ->class('form-control form-control-lg border-0') ->placeholder(__('validation.attributes.frontend.password'))
                            ->required() }}
                            <hr class="my-0"> {{ html()->label(__('validation.attributes.frontend.password_confirmation'))->for('password_confirmation')
                            }} {{ html()->password('password_confirmation') ->class('form-control form-control-lg border-0')
                            ->placeholder(__('validation.attributes.frontend.password_confirmation')) ->required() }}
                            <hr class="my-0">

                            <div class="my-4 row">
                                <div class="col">
                                    <div class="custom-control custom-checkbox">
                                        {{ html()->checkbox('accept-terms', true, 1)->class('custom-control-input') }}
                                        {{ html()->label('Accept our Terms and Conditions.' )->for('accept-terms')->class('custom-control-label text-white') }}
                                    </div>
                                </div>
                            </div>

                            @if(config('access.captcha.registration'))
                            <div class="row">
                                <div class="col">
                                    @captcha {{ html()->hidden('captcha_status', 'true') }}
                                </div>
                                <!--col-->
                            </div>
                            <!--row-->
                            @endif
                            <div class="text-left mb-4">
                                {{ form_submit(__('labels.frontend.auth.register_button')) }}
                            </div>
                            {{ html()->form()->close() }}


                        </div>
                    </div>




                    <div class="row">
                        <div class="col">
                            <div class="text-center">
                                {!! $socialiteLinks !!}
                            </div>
                        </div>
                        <!--/ .col -->
                    </div>
                    <!-- / .row -->


                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 h-md-100 order-1 order-md-2 min-height-300 p-0 bg-dark ">
            <div class="carosel swiper-location-carousel h-100">
                <div data-pagination='{"el": ".swiper-pagination"}' data-space-between="0" data-slides-per-view="1" class="swiper-container swiper-init swiper-signin h-100">
                    <div class="swiper-pagination"></div>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide text-center ">
                            <div class="background-img"><img src="img/banner.png" alt="" class="w-auto float-right"></div>
                            <div class="row align-items-center h-100 text-white">
                                <div class="col-10 col-md-8 col-lg-6 mx-auto my-4">
                                    <h1 class="font-weight-light mb-4">We are growing and you also Join Us</h1>
                                    <p>AkwaCash-Mobile is very unique and flexible with large number of customized components.
                                        Get this now, share with beautiful world. </p>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide text-center">
                            <div class="background-img"><img src="img/banner2.png" alt="" class="w-auto"></div>
                            <div class="row align-items-center h-100 text-white">
                                <div class="col-10 col-md-8 col-lg-6 mx-auto my-4">
                                    <h1 class="font-weight-light mb-4">Save 1000s hours, Efforts and your own Money</h1>
                                    <p>AkwaCash | African Mobile Moneyhas many more flexible unique component with very creative
                                        design you can save much more with this template.</p>
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
 @push('after-scripts') @if(config('access.captcha.registration')) @captchaScripts @endif
    @include('frontend.includes.partials.scripts.login.phoneNumberInputValidation')
<script>
    'use strict';
            var mySwiper = new Swiper('.swiper-signin', {
                slidesPerView: 1,
                spaceBetween: 0,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });

</script>


@endpush