<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', app_name())</title>
    <meta name="description" content="@yield('meta_description', 'AkwaCash')">
    <meta name="author" content="@yield('meta_author', 'Nathan Antwi')">
    @yield('meta')

    {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
    @stack('before-styles')

    <!-- Check if the language is set to RTL, so apply the RTL layouts -->
    <!-- Otherwise apply the normal LTR layouts -->
    {{ style(mix('css/frontend.css')) }}

    @stack('after-styles')

    {{-- Material Icons --}}
<link rel='stylesheet' href='http://fonts.googleapis.com/icon?family=Material+Icons'>
    {{-- Vue Material StyleSheet --}}
<link rel='stylesheet' href='https://unpkg.com/vue-material@0.7.4/dist/vue-material.css'>

</head>