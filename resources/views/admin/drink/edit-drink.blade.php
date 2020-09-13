@extends('layouts.app')
@section('content')
<div class="container">
    <x-edit-food
    :route="$route"
    :foodName="$foodName"
    :foodId="$foodId" 
    :ingredients="$isIngredients"           
    :capacity="$capacity"
    :prices="$prices"
    :images="$images"
    />
</div>
@endsection