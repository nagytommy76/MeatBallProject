@extends('layouts.app')
@section('content')
<div class="container">
    <x-food-input-form
        :route="$routeStore"
        :cardName="$inputCardName"
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