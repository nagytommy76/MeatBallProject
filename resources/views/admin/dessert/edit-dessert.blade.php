@extends('layouts.admin')
@section('admin')
<div class="container">
    <x-edit-food
    :route="$route"
    :foodName="$foodName"
    :foodId="$foodId"            
    :ingredients="$ingredients"
    :capacity="$isCapacity"
    :prices="$prices"
    :images="$images"
    />
</div>
@endsection
