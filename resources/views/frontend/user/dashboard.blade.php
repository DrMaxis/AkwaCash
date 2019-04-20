@extends('frontend.layouts.app') {{-- @lang('strings.frontend.welcome_to', ['place' => app_name()]) --}} 
@section('content')
<!-- content page title -->
<div class="container-fluid bg-light-opac">
    <div class="row">
        <div class="container my-3 main-container">
            <div class="row align-items-center">
                <div class="col">
                    <h2 class="content-color-primary page-title">Dashboard</h2>
                    <p class="content-color-secondary page-sub-title">Creative, amazing, awesome and unique</p>
                </div>
                <div class="col-auto">
                    <button class="btn btn-rounded pink-gradient text-uppercase" data-toggle="modal" data-target="#createOrder"><i class="material-icons">add</i> <span class="text-hide-xs">Pay Bill</span></button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- content page title ends -->

<!-- content page -->
<div class="container-fluid mt-4 main-container">
    <div class="row">
        <div class="col-12 col-md-12">
            <div class="card mb-4 fullscreen">
                <div class="card-header">
                    <div class="media">
                        <div class="media-body">
                            <h4 class="content-color-primary mb-0">My Cards</h4>
                        </div>
                        <input type="text" class="form-control form-control-sm daterange mr-2 d-none" name="daterange" value="01/01/2018 - 01/15/2018"
                        />
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
                                        <div class="swiper-slide card-carousel">
                                            <div class="primary-gradient p-3 debit-card">
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
                                        <div class="swiper-slide card-carousel">
                                            <div class="danger-gradient p-3 debit-card">
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
                                        <div class="swiper-slide card-carousel">
                                            <div class="warning-gradient p-3 debit-card">
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
                <div class="card-body">
                    <div class="media mb-3">
                        <div class="media-body">
                            <h4 class="content-color-primary mb-0">$ 2541.00</h4>
                            <p class="content-color-secondary mb-0">This month | Updated 1 min ago</p>
                        </div>
                    </div>
                    <canvas class="" id="linechartarea"></canvas>
                </div>
                <div class="card-footer border-top mt-1">
                    <div class="row">
                        <div class="col-auto border-right">
                            <div class="media">
                                <div class="media-body">
                                    <h5 class="content-color-primary mb-0">208</h5>
                                    <p class="content-color-secondary mb-0 small">Income</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto border-right">
                            <div class="media">
                                <div class="media-body">
                                    <h5 class="content-color-primary mb-0">165</h5>
                                    <p class="content-color-secondary mb-0 small">Expense</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="media">
                                <div class="media-body">
                                    <h5 class="content-color-primary mb-0">50</h5>
                                    <p class="content-color-secondary mb-0 small">Billed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card mb-4 fullscreen has-background-img ">
                        <div class="card-header">
                            <div class="media">
                                <div class="media-body">
                                    <h4 class="mb-0">3 Bills</h4>
                                    <p class="mb-0">Pending to be paid</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-1 pb-0 px-0">
                            <ul class="list-group border-top border-bottom list-group-flush">
                                <li class="list-group-item link-media">
                                    <a href="" class="media">
                                        <div class="icon-circle icon-40 bg-light-primary mr-3">
                                            <i class="material-icons">assignment</i>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 content-color-primary"><span class="text-primary">$15.00</span> Dinner caffe</h6>
                                            <p class="small">Due Date: 7/11/2018</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item link-media">
                                    <a href="" class="media">
                                        <div class="icon-circle icon-40 bg-light-primary mr-3">
                                            <i class="material-icons">assignment</i>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 content-color-primary"><span class="text-primary">$12.00</span> Alexa Cotton</h6>
                                            <p class="small">Due Date: 7/11/2018</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item link-media">
                                    <a href="" class="media">
                                        <div class="icon-circle icon-40 bg-light-primary mr-3">
                                            <i class="material-icons">assignment</i>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 content-color-primary"><span class="text-primary">$30.00</span> Raymond Swe...</h6>
                                            <p class="small">Due Date: 7/11/2018</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="list-group-item link-media">
                                    <a href="" class="media">
                                        <div class="icon-circle icon-40 bg-light-primary mr-3">
                                            <i class="material-icons">assignment</i>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 content-color-primary"><span class="text-primary">$30.00</span> Raymond Swe...</h6>
                                            <p class="small">Due Date: 7/11/2018</p>
                                        </div>
                                    </a>
                                </li>

                            </ul>
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
                            <h4 class="content-color-primary mb-0">Connected Companies</h4>
                        </div>
                        <a href="javascript:void(0);" class="icon-circle icon-30 content-color-secondary fullscreenbtn">
                                <i class="material-icons ">crop_free</i>
                            </a>
                    </div>
                </div>
                <div class="card-body pt-0">
                    <table class="table border-bottom mb-0 footable">
                        <thead class="d-none">
                            <tr>
                                <th>Business</th>
                                <th data-breakpoints="xs">Total</th>
                                <th data-breakpoints="xs sm">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="media">
                                        <div class="icon-circle icon-50 bg-light-primary mr-3">
                                            T
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 mt-1">TataSky</h6>
                                            <p class="small">C. No. 02145/2254/8524</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="my-0 mt-1">$ 3250</h6>
                                </td>
                                <td class="text-center">
                                    <span class="btn btn-rounded btn-outline-success px-3 btn-sm">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="media">
                                        <div class="icon-circle icon-50 bg-light-primary mr-3">
                                            E
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 mt-1">Electricity</h6>
                                            <p class="small">C. No. 8524</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="my-0 mt-1">$ 1250</h6>
                                </td>
                                <td class="text-center">
                                    <span class="btn btn-rounded btn-outline-danger px-3 btn-sm">cancelled</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="media">
                                        <div class="icon-circle icon-50 bg-light-primary mr-3">
                                            B
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 mt-1">Broadband</h6>
                                            <p class="small">C. No. 021458524</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="my-0 mt-1">$ 5250</h6>
                                </td>
                                <td class="text-center">
                                    <span class="btn btn-rounded btn-outline-warning px-3 btn-sm">Pending</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <div class="card mb-4 fullscreen">
                <div class="card-header">
                    <div class="media">
                        <div class="media-body">
                            <h4 class="content-color-primary mb-0">Services Buyers</h4>
                        </div>
                        <a href="javascript:void(0);" class="icon-circle icon-30 content-color-secondary fullscreenbtn">
                                <i class="material-icons ">crop_free</i>
                            </a>
                    </div>
                </div>
                <div class="card-body pt-0">
                    <table class="table border-bottom mb-0 footable">
                        <thead class="d-none">
                            <tr>
                                <th>User</th>
                                <th data-breakpoints="xs">Total</th>
                                <th data-breakpoints="xs sm">Earning</th>
                                <th data-breakpoints="xs sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="media">
                                        <div class="icon-circle icon-50 bg-light-primary mr-3">
                                            M
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 mt-1">MII</h6>
                                            <p class="small">+52854 USD</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="my-0 mt-1">$ 3250</h6>
                                    <div class="text-success"><i class="material-icons icon-sm">arrow_drop_up</i> 10%</div>
                                </td>
                                <td>
                                    <div class="smallsparkchart"></div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-rounded btn-outline-danger px-3 btn-sm">Sell</button>
                                    <button class="btn btn-rounded btn-outline-success px-3 btn-sm">Buy</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="media">
                                        <div class="icon-circle icon-50 bg-light-primary mr-3">
                                            T
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 mt-1">Teslaa</h6>
                                            <p class="small">+ 52525 USD</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="my-0 mt-1">$ 1250</h6>
                                    <div class="text-danger"><i class="material-icons icon-sm">arrow_drop_down</i> 2%</div>
                                </td>
                                <td>
                                    <div class="smallsparkchart"></div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-rounded btn-outline-danger px-3 btn-sm">Sell</button>
                                    <button class="btn btn-rounded btn-outline-success px-3 btn-sm">Buy</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="media">
                                        <div class="icon-circle icon-50 bg-light-primary mr-3">
                                            B
                                        </div>
                                        <div class="media-body">
                                            <h6 class="my-0 mt-1">Boarding UI</h6>
                                            <p class="small">-150 USD</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="my-0 mt-1">$ 5250</h6>
                                    <div class="text-danger"><i class="material-icons icon-sm">arrow_drop_down</i> 2%</div>
                                </td>
                                <td>
                                    <div class="smallsparkchart"></div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-rounded btn-outline-danger px-3 btn-sm">Sell</button>
                                    <button class="btn btn-rounded btn-outline-success px-3 btn-sm">Buy</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</div>
<!-- content page ends -->
@endsection
 
@section('page-scripts')
    @include('frontend.includes.partials.scripts.dashboard.financeScript')

<script>
    /* footable  */
$(".footable").footable({
    "paging": {
        "enabled": true,
        "position": "center"
    }
});
</script>


<script>

/* swiper control */
var mySwiper = new Swiper('.swiper-product', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});




</script>
@endsection