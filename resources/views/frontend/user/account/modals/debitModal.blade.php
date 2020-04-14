<div class="modal fade" id="debitModal" tabindex="-1" role="dialog" style="display: none;" aria-hidden="true">
    <div class="modal-dialog  modal-sm modal-dialog-centered " role="document">
        <div class="modal-content box-shadow pink-gradient">
            <div class="modal-header border-0  px-0">
                <div class="col-6">
                    <h5 class="card-title mb-0">Login</h5>
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
                                <i class="fa fa-exclamation-circle text-secondary"></i> Report</a>
                            <a class="dropdown-item" href="#">
                                <i class="fa fa-cog text-secondary"></i> Settings</a>
                            <a class="dropdown-item" href="#">
                                <i class="fa fa-trash text-secondary"></i> Remove</a>
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
                                
                                    
                                        <div class="card mb-4 fullscreen">
                                            <div class="card-header">
                                                <div class="media">
                                                    <div class="media-body">
                                                        <h4 class=" mb-0">Bank Account</h4>
                                                    </div>
                                                    
                                                    
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
                            
                                               {{--  <h5 class="card-title mb-2 text-white text-center">{{ $logged_in_user->account->banks->first()->bank_name }}</h5>
                                                <h6 class="card-subtitle mb-3 text-white text-center">Account Ending in {{ substr($logged_in_user->account->banks->first()->account_number, -4) }}</h6>
                             --}}
                                                <div class="row bg-light-secondary text-center">
                                                   
                                                    <div class="col py-3">
                                                        <p class=" text-white small mb-0">Remove Bank</p>
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