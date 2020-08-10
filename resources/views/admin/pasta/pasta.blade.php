@extends('layouts.app')

@section('content')
    <div class="container">
        <h1 class="text-black p-2 text-center">Tészták és Rizottók bevitele</h1>
        <section class="card-content card-content-admin text-white">
            <div class="card p-2">
                <form enctype="multipart/form-data" method="POST" action="{{ route('pasta.store') }}">
                @csrf
                <div class="card-header">
                    <h2>Tészta/Rizottó bevitele</h2>                            
                </div>
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col">
                            <label for="name">Tészta/Rizottó neve:</label>
                            <input type="text" name="name" id="name" class="form-control">
                            @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                            @enderror 
                        </div>
                        <div class="col">
                            <label for="price">Ár:</label>
                            <input type="number" name="price" id="price" class="form-control">
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
                            <textarea class="form-control" name="ingredient" id="ingredient" cols="10" rows="10"></textarea>
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
                            <div class="col">
                                <label for="type">Étel típus:</label>
                                <select class="form-control" name="type" id="type">
                                    <option value="0">Rizottó</option>
                                    <option value="1" selected>Tészta</option>
                                </select>
                            </div>                            
                        </div>
                    </div>
                    @if ($success)
                    <div class="alert alert-success">
                        {{$success}}
                    </div>
                    @endif
                   
                </div>
                <div class="card-footer">
                    <div class="form-group">
                        <input type="submit" class="btn btn-confirm" value="Bevitel">
                    </div>
                </div>
                </form>
            </div>
        </section>
    </div>
@endsection