<div class="modal fade" id="mobileMoneyModal" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
    <div class="modal-dialog  modal-sm modal-dialog-centered " role="document">
        <div class="modal-content box-shadow pink-gradient">
            <div class="modal-header border-0  px-0">
                <div class="col-6">
                    <h5 class="card-title mb-0">Mobile Money Account</h5>
                </div>
                <div class="col text-right">
                    <div class="dropdown">
                        <button class="btn btn-link btn-sm text-secondary rounded-0 dropdown-toggle float-right icon"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button">
                            <i class="fa fa-ellipsis-v"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end"
                            style="position: absolute; transform: translate3d(-12px, 33px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <a class="dropdown-item" href="#">
                                <i class="fa fa-exclamation-circle text-secondary"></i> Support</a>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body text-center pr-4 pl-4">
                <div class="row">

                    <div class="col-12 col-md-12">
                        <div class="card mb-4  purp-gradient fullscreen">

                            <div class="card-body">
                                <h1 id="test" class="mt-4"></h1>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="media-body" data-toggle="modal"
                                                        data-target="#cashModal">
                                                        <p class="content-color-primary mb-0">{{$logged_in_user->phone_number}}</p>
                                                        <h4 class="mb-0 mt-1">{{$logged_in_user->phone_network}}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="media-body">
                                                        <p class="content-color-primary mb-0">{{$logged_in_user->name}}</p>
                                                        <h4 class="mb-0 mt-1">Added {{ $logged_in_user->updated_at->diffForHumans() }}</h4>
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