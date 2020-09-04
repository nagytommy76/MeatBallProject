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
                        </div>
                            <div class="col">
                                <label for="type">Étel típus:</label>
                                <select class="form-control" name="type" id="type">
                                    <option value="0">Rizottó</option>
                                    <option value="1" selected>Tészta</option>
                                </select>
                            </div>                            
                        </div>
                    </div>
                    @if ($errors->has('success') || $errors->has('inputFail'))
                        @if ($errors->first('success'))
                            <div class="alert alert-success">
                                {{$errors->first('success')}}
                            </div>
                        @else
                            <div class="alert alert-danger">
                                {{$errors->first('inputFail')}}
                            </div>
                        @endif                                                
                    @endif
                                  
                <div class="card-footer">
                    <div class="form-group">
                        <input type="submit" class="btn btn-confirm" value="Bevitel">
                    </div>
                </div>
                </form>
            </div> <!-- Input Pasta CARD END -->

            <h1 class="text-black p-2 text-center">Tészták és Rizottók törlése</h1>
            <div class="card p-2">
                <div class="card-header">
                    <h2>Tészta/Rizottó törlése</h2>                            
                </div>
                <form action="{{ route('pasta.destroy') }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <div class="card-body">
                        <div class="form-group">
                            <label for="foodId">Törlendő étel:</label>
                            <select class="form-control" name="foodId" id="foodId">
                                @foreach ($allPasta as $pasta)
                                    <option value="{{$pasta->id}}">{{$pasta->name}} ({{$pasta->prices->price}} Ft)</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="form-group">
                            <input type="submit" class="btn btn-delete text-white" value="Törlés">
                        </div>
                    </div>
                    @if ($errors->has('fail') || $errors->has('deleteSuccess'))
                        @if ($errors->first('fail'))
                            <div class="alert alert-danger">
                                <p>Sajnos hiba történt: </p>
                                <p>{{$errors->first('fail')}}</p>
                            </div>
                        @else
                            <div class="alert alert-success">
                                <p>{{$errors->first('deleteSuccess')}}</p>
                            </div>
                        @endif
                        
                    @endif
                </form>
            </div>

            <h1 class="text-black p-2 text-center">Tészták és Rizottók módosítása</h1>
            <div class="card p-2">
                <div class="card-header">
                    <h2>Tészta/Rizottó módosítása</h2>                            
                </div>
                <form action="{{ route('pasta.edit') }}" method="POST">
                    @csrf
                    @method('PATCH')
                    <div class="card-body">
                        <div class="form-group">
                            <label for="foodId">Módosítandó étel:</label>
                            <select class="form-control" name="foodId" id="foodId">
                                @foreach ($allPasta as $pasta)
                                    <option value="{{$pasta->id}}">{{$pasta->name}} ({{$pasta->prices->price}} Ft)</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="form-group">
                            <input type="submit" class="btn btn-primary text-white" value="Módosítás">
                        </div>
                    </div>
                    @if ($errors->has('fail') || $errors->has('success'))
                        @if ($errors->first('fail'))
                            <div class="alert alert-danger">
                                <p>Sajnos hiba történt: </p>
                                <p>{{$errors->first('fail')}}</p>
                            </div>
                        @else
                            <div class="alert alert-success">
                                <p>{{$errors->first('success')}}</p>
                            </div>
                        @endif
                    @endif
                </form>
            </div>
        </section>
    </div>
@endsection