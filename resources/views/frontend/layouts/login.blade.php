<!DOCTYPE html>
@langrtl
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
@include('frontend.includes.head')
    <body class="fixed-header  sidebar-left-close">
            @include('frontend.includes.preloader')
        <div class="wrapper h-100  h-sm-auto justify-content-center pink-gradient">
            @include('includes.partials.messages')
     
       

        

                @yield('content')


            </div><!-- main wrapper -->
      
            
        <!-- Scripts -->
        @stack('before-scripts')
        {!! script(mix('js/manifest.js')) !!}
        {!! script(mix('js/vendor.js')) !!}
        {!! script(mix('js/frontend.js')) !!}
        @stack('after-scripts')

        @yield('page-scripts') 

        
        @include('includes.partials.ga')
    </body>
</html>
