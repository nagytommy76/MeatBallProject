<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Nagy Tamás portfólió oldala">
    <meta keywords="Nagy Tamás, SASS, Vue, Laravel">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('images/supermarket.png') }}" type="image/x-icon">
    <title>{{ config('app.name', 'Húsgolyó') }}</title>

    <!-- Scripts -->
    <script defer src="{{ asset('js/app.js') }}"></script>
    <noscript><strong>Please enable JavaScript!</strong></noscript>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<!-- <h1>HALLLLÓÓÓ</h1> -->
    <!-- <main id="app"></main> -->
</body>
</html>
