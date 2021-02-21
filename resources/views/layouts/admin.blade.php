<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('images/supermarket.png') }}" type="image/x-icon">
    <title>{{ config('app.name', 'Húsgolyó') }}</title>

    <!-- Scripts -->
    <noscript><strong>Please enable JavaScript!</strong></noscript>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body id="admin">
    <main id="admin">
        @include('inc.admin-navbar')
        @yield('admin')
    </main>

    {{-- <script src="{{ asset('js/app.js') }}" defer></script> --}}
    <script defer src="https://kit.fontawesome.com/75af6afcaa.js" crossorigin="anonymous"></script>
</body>