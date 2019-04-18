@extends('frontend.layouts.app')


{{-- @lang('strings.frontend.welcome_to', ['place' => app_name()]) --}}
@section('content')
    <!-- content page -->
    <div class="container-fluid mt-4 main-container">
        <div class="row">

                <!-- <div class="col-12 col-md-12">
                        <div class="card mb-4 fullscreen">
                            <div class="card-header">
                                <div class="media">
                                    <div class="media-body">
                                        <h4 class="content-color-primary mb-0">My Cards</h4>
                                    </div>
                                    <input type="text" class="form-control form-control-sm daterange mr-2 d-none" name="daterange" value="01/01/2018 - 01/15/2018" />
                                    <a href="javascript:void(0);" class="icon-circle icon-30 content-color-secondary fullscreenbtn">
                                        <i class="material-icons ">crop_free</i>
                                    </a>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row align-items-center no-gutters">
                                    <div class="col">
                                        <div class="carosel swiper-location-carousel">
                                            <div data-pagination='{"el": ".swiper-pagination"}' data-space-between="0" data-slides-per-view="auto" class="swiper-container swiper-init swiper-product">
                                                <div class="swiper-pagination"></div>
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide  card-carousel">
                                                        <div class="pink-gradient p-3 debit-card">
                                                            <h2 class="d-block">
                                                                <i class="material-icons">local_play</i>
                                                            </h2>
                                                            <h4 class="mt-2 font-weight-normal">0000 0000 0000 0000</h4>
                                                            <div class="row mt-3">
                                                                <div class="col">
                                                                    <h5 class="mb-0">John McMohan</h5>
                                                                    <p class="mb-0 small">Card Holder</p>
                                                                </div>
                                                                <div class="col text-right">
                                                                    <h5 class="mb-0">7/11</h5>
                                                                    <p class="mb-0 small">Expiry</p>
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
                    </div> -->
            <div class="col-12 col-md-6">
                <div class="card mb-4 fullscreen">
                    <div class="card-header">
                        <div class="media">
                            <div class="media-body">
                                <h4 class="content-color-primary mb-0">Account Balance</h4>
                                <p class="content-color-secondary mb-0">GHS</p>
                            </div>
                            <a href="javascript:void(0);"
                                class="icon-circle icon-30 content-color-secondary fullscreenbtn">
                                <i class="material-icons ">crop_free</i>
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h1 class="mt-4"><span class="font-weight-light">$</span> 2053.19</h1>
                        <p class="small mb-1 text-success "><i class="material-icons icon-sm">arrow_drop_up</i> $250
                        </p>
                    </div>
                    <div class="card-footer border-top">
                        <div class="media">
                            <div class="media-body">
                                <h5 class="content-color-primary mb-0">Latest Transaction</h5>
                                <p class="content-color-secondary mb-0 small"><span
                                        class="content-color-primary">$340 Recieved </span> from Trevor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">

                <div class="card mb-4 fullscreen">
                    <div class="card-header">
                        <div class="media">
                            <div class="media-body">
                                <h4 class="content-color-primary mb-0">Send or Recieve</h4>
                            </div>
                            <a href="javascript:void(0);"
                                class="icon-circle icon-30 content-color-secondary fullscreenbtn">
                                <i class="material-icons ">crop_free</i>
                            </a>
                        </div>
                    </div>
                    <div  class="card-body pt-0">
                         
                      
                     
  <div id="app" class="dial-payment-section">
    <md-layout md-gutter md-align="center">
      <md-layout >
        <md-layout >
          <md-input-container md-inline class="no-margin">
            <md-input class="dial-input" v-model="number"></md-input>
          </md-input-container>
        </md-layout>
      </md-layout>
    </md-layout>
    <md-layout md-gutter md-align="center">
      <md-layout >
        <md-layout   md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(1)">1</md-button>
        </md-layout>
        <md-layout   md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(2)">2</md-button>
        </md-layout>
        <md-layout   md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(3)">3</md-button>
        </md-layout>
      </md-layout>
    </md-layout>
    <md-layout md-gutter md-align="center">
      <md-layout >
        <md-layout  md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(4)">4</md-button>
        </md-layout>
        <md-layout   md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(5)">5</md-button>
        </md-layout>
        <md-layout   md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(6)">6</md-button>
        </md-layout>
      </md-layout>
    </md-layout>
    <md-layout md-gutter md-align="center">
      <md-layout >
        <md-layout  md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(7)">7</md-button>
        </md-layout>
        <md-layout   md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(8)">8</md-button>
        </md-layout>
        <md-layout   md-align="center">
          <md-button class="btn-key" v-on:click="addNumber(9)">9</md-button>
        </md-layout>
      </md-layout>
    </md-layout>
    <md-layout md-gutter md-align="center">
      <md-layout >
        <md-layout md-align="center" >
                <md-button class="btn-key" v-on:click="addNumber('.')">.</md-button>
                      
        </md-layout>
        <md-layout  md-align="center" >
          <md-button class="btn-key" v-on:click="addNumber(0)">0</md-button>
        </md-layout>
        <md-layout  >
                <md-button class="md-warn btn-key">
                        <md-icon>clear</md-icon>
                      </md-button>
        </md-layout>
      </md-layout>
    </md-layout>
    <md-layout md-gutter md-align="center">
      <md-layout >
        <md-layout md-align="center" >
                <md-button class="btn-key">Request</md-button>
         
        </md-layout>
        <md-layout  md-align="center" >
                <md-button class="btn-key">Pay</md-button>
        </md-layout>
       
      </md-layout>
    </md-layout>
    
  </div>


                                        </div>
                                    </div>
                        
                    </div>
                </div>
            </div>
       <!-- content page ends -->
@endsection


@section('page-scripts')

@include('frontend.includes.partials.scripts.dashboard.financeScript')

<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js'></script>
<script src='https://unpkg.com/vue-material@0.7.4'></script>

<script>

Vue.use(VueMaterial)
var app=new Vue({
  el:"#app",
  data:{
    number:""
  },
  methods:{
    addNumber:function(number){
      this.number+=number;
    }
  }
});

</script>

@endsection
