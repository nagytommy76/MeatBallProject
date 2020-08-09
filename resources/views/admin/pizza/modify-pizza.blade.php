@extends('layouts.app')

@section('content')
<div class="container">
    <section class="card-content ">
        <div class="card p-2 text-white">
            <form enctype="multipart/form-data" method="POST" action="{{ route('admin.modifyPizza') }}">
            @csrf
                <h2>{{$data['pizzaName']}} Módosítása</h2>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col">
                            <label for="Pname">Pizza Neve:</label>
                            <input class="form-control" type="text" name="Pname" id="Pname" value="{{$data['pizzaName']}}">
                        </div>
                        <div class="col">
                            <label for="Pprice">Ár: (Ft)</label>
                            <input type="number" min="0" name="Pprice" id="Pprice" class="form-control" value="{{$data['pizzaPrice']->price}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="ingred">Feltétek:</label>

                        <div class="checkbox">
                        @foreach ($data['allIngred'] as $item)
                        <div>
                            {{-- @foreach ($data['pizzaIngreds'] as $ingred) --}}
                                {{-- @if ($item->id == $ingred->id) --}}
                                <label>
                                    <input type="checkbox" name="ingredType[]" value="{{$item->id}}" >
                                    {{$item->ingredient}}</label>
                                {{-- @endif --}}
                            {{-- @endforeach --}}
                            {{-- @if ($item->id == ) --}}
                            {{-- <label>
                                <input type="checkbox" name="ingredType[]" value="{{$item->id}}">
                                {{$item->ingredient}}</label> --}}
                            {{-- @endif  --}}
                        </div>
                        @endforeach
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</div>
{{-- {{var_dump(in_array(1,$data['pizzaIngreds']))}} --}}
{{-- @foreach ($data['pizzaIngreds'] as $item) --}}
    {{var_dump($data['pizzaIngreds'])}}
{{-- @endforeach --}}
@endsection