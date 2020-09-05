@extends('layouts.app')
@section('content')
<div class="container">
    <h1 class="text-black text-center p-1">Desszertek bevitele</h1>
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