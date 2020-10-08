@extends('layouts.admin')
@section('admin')
<div class="container">
    <x-food-input-form
        :ingredients="$isIngredients"
        :route="$routeStore"
        :cardName="$inputCardName"
        :capacity="$isCapacity"
    />

    <x-food-delete-form
    :route="$routeEdit"
    :method="$editMethod"
    :cardName="$editCardName"
    :allFood="$allFood"
    :btnClass="$btnModifyClass"
    :btnValue="$btnModifyValue"
/>
<x-food-delete-form
    :route="$routeDestroy"
    :method="$deleteMethod"
    :cardName="$deleteCardName"
    :allFood="$allFood"
    :btnClass="$btnDeleteClass"
    :btnValue="$btnDeleteValue"
/>
</div>
@endsection