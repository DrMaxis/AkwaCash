<!-- main header -->
<header class="main-header">

      

    @auth
    <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-auto px-0">
                    <button class="btn pink-gradient btn-icon" id="left-menu"><i
                                class="material-icons">star</i></button>
                    <a href="index.html" class="logo"><img src="img/logo-icon.png" alt=""><span
                                class="text-hide-xs"><b>Akwa</b>Cash<br><span class="small">African Mobile Money</span></span>
                        </a>
                    <form class="search-header">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search...">
                            <div class="input-group-append">
                                <button class="btn " type="button"><i class="material-icons">search</i></button>
                            </div>
                        </div>
    
                    </form>
                </div>
    
                <div class="col px-0 text-right">
                   
    
                    <div class="dropdown d-inline-block text-hide-xs">
                        <a class="btn header-color-secondary btn-icon dropdown-toggle caret-none" href="#" role="button" id="dropdownmessage2" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                         ({{ strtoupper(app()->getLocale()) }})
                        </a>
                        @include('includes.partials.lang')
                        
                    </div>
                  
    
    
                    <div class="dropdown d-inline-block">
                        <a class="btn header-color-secondary btn-icon dropdown-toggle caret-none" href="#" role="button" id="dropdownmessage" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">mail_outline</i>
                                <span class="status-number bg-danger text-white">9+</span>
                            </a>
                        <div class="dropdown-menu notification-dropdown align-center arrow-top pt-0" aria-labelledby="dropdownmessage">
                            <div class="arrow pink-gradient"></div>
                            <div class="pink-gradient py-3 text-center">
                                <h5 class="mb-0">Messages</h5>
                                <p class="mb-0">Just Recieved Messages</p>
                            </div>
                            <div class="media new">
                                <figure class="avatar avatar-40">
                                    <img src="img/user2.png" alt="Generic placeholder image">
                                </figure>
                                <div class="media-body">
                                    <h5 class="mt-0">Alizee Johnson</h5>
                                    <p class="mb-2">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                    <a href="">Reply</a>
                                    <a href="" class="ml-2">View</a>
                                </div>
                            </div>
                            <a href="#" class="media pink-gradient-active new">
                                <figure class="avatar avatar-40">
                                    <img src="img/user3.png" alt="Generic placeholder image">
                                </figure>
                                <div class="media-body">
                                    <h5 class="my-0">Donald Costapor </h5>
                                    <small class="text-muted d-block mb-2">2:05 am</small>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                    </p>
                                </div>
                            </a>
                            <a href="#" class="media pink-gradient-active">
                                <figure class="avatar avatar-40">
                                    <img src="img/user2.png" alt="Generic placeholder image">
                                </figure>
                                <div class="media-body">
                                    <h5 class="mt-0">Alizee McMohan <small class="text-muted float-right">4:05
                                                am</small></h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="dropdown text-hide-lg d-inline-block">
                        <a class="btn header-color-secondary btn-icon dropdown-toggle caret-none" href="#" role="button" id="dropdownnotification"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">notifications_none</i>
                                <span class="status-dot pink-gradient"></span>
                            </a>
                        <div class="dropdown-menu notification-dropdown" aria-labelledby="dropdownnotification">
                            <a href="#" class="media  pink-gradient-active new">
                                <figure class="avatar avatar-40">
                                    <img src="img/user1.png" alt="Generic placeholder image">
                                </figure>
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                    </p>
                                </div>
                            </a>
                            <a href="#" class="media  pink-gradient-active">
                                <figure class="avatar avatar-40">
                                    <img src="img/user1.png" alt="Generic placeholder image">
                                </figure>
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                    </p>
                                </div>
                            </a>
                            <a href="#" class="media  pink-gradient-active">
                                <figure class="avatar avatar-40">
                                    <img src="img/user1.png" alt="Generic placeholder image">
                                </figure>
                                <div class="media-body">
                                    <h5 class="mt-0">Media heading</h5>
                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="dropdown d-inline-block">
                            <a class="btn header-color-secondary dropdown-toggle username" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <figure class="userpic"><img src="{{ $logged_in_user->picture }}" alt=""></figure>
                                <h5 class="text-hide-xs">
                                    <small class="header-color-secondary">Welcome,</small>
                                    <span class="header-color-primary">{{ $logged_in_user->name }}</span>
                                </h5>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown" aria-labelledby="dropdownMenuLink">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <a href="profile.html">
                                            <figure class="avatar avatar-120 mx-auto my-3">
                                                <img src="{{ $logged_in_user->picture }}" alt="">
                                            </figure>
                                            <h5 class="card-title mb-2 header-color-primary">{{ $logged_in_user->name }}</h5>
                                            <h6 class="card-subtitle mb-3 header-color-secondary">{{ $logged_in_user->username }}</h6>
                                        </a>
                                        <p class="card-text">{{ $logged_in_user->status }}</p>
                                        
                                    </div>
                                </div>
                               
                                    @can('view backend')
                                <a class="dropdown-item pink-gradient-active" href="{{ route('admin.dashboard') }}">
                                    <div class="row align-items-center">
                                        <div class="col">
                                                @lang('navs.frontend.user.administration')
                                        </div>
        
                                        <div class="col-auto">
                                            <div class="header-color-secondary ml-2"><i class="material-icons vm">settings</i></div>
                                        </div>
                                    </div>
                                </a>
                                @endcan
                                <div class="dropdown-divider m-0"></div>
                                <a class="dropdown-item pink-gradient-active {{ active_class(Active::checkRoute('frontend.user.account')) }}" href="{{ route('frontend.user.account') }}">
                                    <div class="row align-items-center">
                                        <div class="col">
                                                @lang('navs.frontend.user.account')
                                        </div>
        
                                        <div class="col-auto">
                                            <div class="header-color-secondary ml-2"><i class="material-icons vm">settings</i></div>
                                        </div>
                                    </div>
                                </a>
                               
                        
                                <div class="dropdown-divider m-0"></div>
                                <a class="dropdown-item pink-gradient-active" href="{{ route('frontend.auth.logout') }}">
                                    <div class="row align-items-center">
                                        <div class="col">
                                                @lang('navs.general.logout')
                                        </div>
        
                                        <div class="col-auto">
                                            <div class="text-danger ml-2"><i class="material-icons vm">exit_to_app</i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
        
                            </div>
                        </div>
        
    
                </div>
            </div>
        </div>
    @endauth

    @guest
    <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-auto pl-0">
                    <button class="btn pink-gradient btn-icon" id="left-menu"><i class="material-icons">widgets</i></button>
                    <a href="index.html" class="logo"><img src="img/logo-icon.png" alt=""><span class="text-hide-xs"><b>Akwa</b>Cash</span></a>
                </div>
                <div class="col-auto ml-auto">
                    <a href="{{route('frontend.auth.login')}}" class="btn pink-gradient btn-sm rounded d-inline-block {{ active_class(Active::checkRoute('frontend.auth.login')) }}"><i class="material-icons">person</i>@lang('navs.frontend.login')</a>
                    @if(config('access.registration'))
                    <a href="{{route('frontend.auth.register')}}" class="btn pink-gradient btn-sm rounded d-inline-block {{ active_class(Active::checkRoute('frontend.auth.register')) }}"><i class="material-icons">person</i>@lang('navs.frontend.register')</a>
                    @endif

                </div>
            </div>
        </div>

    @endguest

    


    
{{-- loged in --}}


    
</header>
<!-- main header ends -->