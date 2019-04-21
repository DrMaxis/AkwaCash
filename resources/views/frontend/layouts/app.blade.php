<!DOCTYPE html>
@langrtl
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
    <html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl
@include('frontend.includes.head')
    <body class="fixed-header  sidebar-left-close">
            @include('frontend.includes.preloader')
        <div class="wrapper">
           
            @include('frontend.includes.header')
            @include('frontend.includes.leftsidebar')
            @include('includes.partials.messages')
        

                @yield('content')


            </div><!-- main wrapper -->
      
            @include('frontend.includes.footer')
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
