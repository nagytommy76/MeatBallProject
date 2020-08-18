@extends('layouts.app')

@section('content')
<div class="container">
    <h1 class="text-black p-2 text-center">A(z) {{$pastaName}} étel módosítása</h1>
    <section class="card-content card-content-admin">
        <div class="card p-2">
            <form enctype="multipart/form-data" method="POST" action="{{ route('pasta.update', $pastaId) }}">
            @csrf
            @method('PATCH')
            <div class="card-header">
                <h2>{{ $pastaName }} módosítása</h2>                            
            </div>
            <div class="card-body">
                <div class="form-group">
                    <div class="col">
                        <label for="name">Étel neve:</label>
                        <input class="form-control" type="text" name="name" id="name" value="{{$pastaName}}">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror 
                    </div>
                    <div class="col">
                        <label for="price">Ár (Ft):</label>
                        <input type="number" name="price" id="price" class="form-control" value="{{$prices->price}}">
                        @error('price')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror 
                    </div>
                </div>
                <div class="form-group">
                    <div class="col">
                        <label for="ingredient">Összetevők (, elválasztva!)</label>
                        <textarea class="form-control" name="ingredient" id="ingredient" cols="10" rows="10">{{$ingredients}}</textarea>
                        @error('ingredient')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col">
                        <label for="image">Kép feltöltése</label>
                        <input type="file" name="image" id="image">
                        @error('image')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                        <div class="col">
                            <label for="type">Étel típus:</label>
                            <select class="form-control" name="type" id="type">
                                <option value="0" @if ($pastaType == 'risotto')
                                    selected
                                @endif>Rizottó</option>
                                <option value="1" @if ($pastaType == 'pasta')
                                    selected
                                @endif>Tészta</option>
                            </select>
                        </div>                            
                    </div>
                    <div class="form-group">
                        <h3 class="py-2">Jelenlegi kép</h3>
                        <div class="admin-image">
                            <img src="{{asset("storage/$images->image_path")}}" alt="Kép">
                        </div>                            
                    </div>
                </div>
                <div class="card-footer">
                    <div class="form-group">
                        <input type="submit" class="btn btn-modify" value="Módosítás">
                    </div>
                </div>
            </div>
            </form>
        </div>
    </section>
</div>
@endsection