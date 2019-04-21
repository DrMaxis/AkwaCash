 <!-- sidebar left -->
 <div class="sidebar sidebar-left">
    <div class="container has-background-img">
        <figure class="background-img pink-gradient">
            <img src="img/singer-690117_640.jpg" alt="" class="">
        </figure>
        <div class="media w-100 my-3">
            <figure class="avatar avatar-40 rounded-circle align-self-start ">
              
                <img src="{{ $logged_in_user->picture }}" alt="Generic placeholder image">
            </figure>
            <div class="media-body mx-70">
                <h5 class="time-title mb-0 text-white">{{ $logged_in_user->name}}</h5>
                <p class="mb-0 text-truncate text-white">{{ $logged_in_user->email }}</p>
                <p class="mb-0 text-truncate text-white">{{ $logged_in_user->phone_number }}</p>
            </div>
        </div>
    </div>

    <ul class="nav flex-column">
        <li class="nav-item">
            <a href="/" class="nav-link"><i
                    class="material-icons icon">insert_chart_outlined</i> <span>Home</span></a>

        </li>
        <li class="nav-item">
                <a href="{{ route('frontend.user.account') }}" class="nav-link {{ active_class(Active::checkRoute('frontend.user.account')) }}"><i class="material-icons icon">assignment</i>
                    <span>Account</span></a>
    
            </li> 
        <li class="nav-item">
            <a href="{{route('frontend.user.dashboard')}}" class="nav-link"><i class="material-icons icon">assignment</i>
                <span>Dashboard</span></a>

        </li>
        <li class="nav-item">
                <a href="{{route('frontend.user.transactions')}}" class="nav-link"><i class="material-icons icon">assignment</i>
                    <span>Transactions</span></a>
    
            </li>
        <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link"><i class="material-icons icon">shopping_cart</i>
                <span>eCommerce</span></a>

        </li>

        <li class="nav-item">
            <a href="javascript:void(0);" class="nav-link"><i class="material-icons icon">assignment</i>
                <span>Other Pages</span></a>

        </li>
    </ul>
</div>
<div class="backdrop"></div>
<!-- sidebar left ends -->
