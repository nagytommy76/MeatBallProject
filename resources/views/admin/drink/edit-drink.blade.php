@extends('layouts.admin')
@section('admin')
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