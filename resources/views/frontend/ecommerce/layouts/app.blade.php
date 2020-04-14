<!DOCTYPE html>
@langrtl
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
@include('frontend.ecommerce.includes.head')
    <body >
            
            @include('frontend.ecommerce.includes.nav')
            <div class="main-content">
                @include('frontend.ecommerce.includes.navbar')
 @include('frontend.ecommerce.includes.header') 
                @yield('content')
            </div>
            
            @include('includes.partials.messages')
            
        <!-- Scripts -->




  <!--   Core   -->
  <script src="{{asset('eapp/js/vendor/jquery/dist/jquery.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
 

  <script src="{{asset('eapp/js/vendor/owlcarousel/owl.carousel.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/owlcarousel/owl.carousel.min.js')}}"></script>
 <!--   Optional JS   -->
  <script src="{{asset('eapp/js/vendor/chart.js/dist/Chart.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/chart.js/dist/Chart.extension.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/js-cookie/js.cookie.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/jquery.scrollbar/jquery.scrollbar.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net/js/jquery.dataTables.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net-bs4/js/dataTables.bootstrap4.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net-buttons/js/dataTables.buttons.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net-buttons/js/buttons.html5.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net-buttons/js/buttons.flash.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net-buttons/js/buttons.print.min.js')}}"></script>
  <script src="{{asset('eapp/js/vendor/datatables.net-select/js/dataTables.select.min.js')}}"></script>
 
  <!--   Argon JS   -->
  <script src="{{asset('eapp/js/vendor/argon/argon.js?v=1.1.0')}}"></script>
  



        @yield('page-scripts') 

        
        @include('includes.partials.ga')
    </body>
</html>
