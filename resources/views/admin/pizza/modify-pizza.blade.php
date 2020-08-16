@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="text-center text-black p-3"> A(z) {{ $data['pizzaName'] }} módosítása</h1>
    <section class="card-content ">       
        <div class="card p-2 text-white">
            <form enctype="multipart/form-data" method="POST" action="{{ route('admin.modifyPizza',$data['pizzaId']) }}">
            @csrf
            @method('PATCH')
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
                            <label>
                                <input type="checkbox" name="ingredType[]" value="{{$item->id}}" 
                                @if (in_array($item->id, $data['pizzaIngreds']))
                                            checked
                                @endif
                                >
                                {{$item->ingredient}}</label>
                        </div>
                        @endforeach
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary text-white" value="Módosítás">
                    </div>
                </div>
            </form>
        </div>
    </section>
</div>
@endsection