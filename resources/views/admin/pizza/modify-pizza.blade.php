@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="text-center text-black p-3"> A(z) {{ $pizzaName }} módosítása</h1>
    <section class="card-content ">       
        <div class="card p-2 text-white">
            <form enctype="multipart/form-data" method="POST" action="{{ route('admin.modifyPizza',$pizzaId) }}">
            @csrf
            @method('PATCH')
                <h2>{{$pizzaName}} Módosítása</h2>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col">
                            <label for="name">Pizza Neve:</label>
                            <input class="form-control" type="text" name="name" id="name" value="{{$pizzaName}}">
                        </div>
                        <div class="col">
                            <label for="price">Ár: (Ft)</label>
                            <input type="number" min="0" name="price" id="price" class="form-control" value="{{$pizzaPrice->price}}">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="ingred">Feltétek:</label>
                        <div class="checkbox">
                        @foreach ($allIngred as $item)
                        <div>
                            <label>
                                <input type="checkbox" name="ingredType[]" value="{{$item->id}}" 
                                @if (in_array($item->id, $pizzaIngreds))
                                            checked
                                @endif
                                >
                                {{$item->ingredient}}</label>
                        </div>
                        @endforeach
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="image">Új kép feltöltése: <input class="form-control" type="file" name="image" id="image">
                        </label>
                        
                        <h3 class="py-2">Jelenlegi kép</h3>
                        <div class="admin-image">
                            <img src="{{asset("storage/$pizzaImage->image_path")}}" alt="Kép">
                        </div>                            
                    </div>
                </div>
                <div class="card-footer">
                    <div class="form-group">
                        <input type="hidden" name="foodType" value="pizza">
                        <input type="submit" class="btn btn-primary text-white" value="Módosítás">
                    </div>
                </div>
            </form>
        </div>
    </section>
</div>
@endsection