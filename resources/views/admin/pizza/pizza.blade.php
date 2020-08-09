@extends('layouts.app')

@section('content')
    {{-- <div class="container"> --}}
        {{-- <h1>Admin kezelő felület</h1>
        <p>Ide (CARD-ba) majd jön egy JavaScript-es cucc, hogy melyik étel. Pizza Tészták stb</p> --}}
        <div class="container">
            {{-- <div class="card-container"> --}}
                <section class="card-content card-content-admin text-white">
                    <div class="card p-2">
                        <form enctype="multipart/form-data" method="POST" action="{{ route('admin.foodInput') }}">
                            @csrf
                        <div class="card-header">
                            <h1 class="">Ételek bevitele</h1>                            
                        </div>
                        <div class="card-body">
                            {{-- Pizza name, Feltét --}}
                            <div class="form-group row">
                                <div class="col">

                                    <label for="Pname">Pizza megnevezése</label>
                                    <input class="@error('Pname') is-invalid @enderror form-control " type="text" name="Pname" id="Pname">
                                    @error('Pname')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror                
                                   
                                {{-- <div>{{ var_dump($errors) }}</div> --}}

                                </div>
                                <div class="col">
                                    <label for="Pprice">Ár:</label>
                                    <input class="form-control" type="number" name="Pprice" id="Pprice">  
                                    @error('Pprice')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror                                
                                </div>
                            </div>
                                <div class="form-group">
                                    <label for="ingred">Feltétek:</label>

                                    <div class="checkbox">
                                    @foreach ($ingredients as $item)
                                    <div>
                                        <label>
                                        <input type="checkbox" name="ingredType[]" value="{{$item->id}}">
                                        {{$item->ingredient}}</label>
                                    </div>
                                    @endforeach
                                    @error('ingredType')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    </div>
                                </div>
                            
                            <div class="form-group">
                                <label for="Pimage">Kép Feltöltése</label>
                                <input class="form-control" type="file" name="Pimage">
                                @error('Pimage')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            {{-- Kép --}}
                            
                        </div>
                        <div class="card-footer">
                            <div class="form-group">
                                <input class="btn btn-confirm" type="submit" value="Bevitel">
                            </div>
                        </div>
                        </form>
                    </div>
                    {{-- INGREDIENTS --}}
                    <div class="card m-2 p-2">
                        <div class="card-header">
                            <h3>Pizza Feltétek bevitele</h3>
                        </div>
                        <form action="{{ route('admin.storePizzaIngredients') }}" method="POST">
                            @csrf
                        <div class="card-body">
                            <div class="form-group">
                                <label for="ingredient">Pizza felétét</label>
                                <input class="form-control" type="text" name="ingredient" id="">
                                @error('ingredient')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror

                                <label for="ingred_price">Feltét Ára:</label>
                                <input class="form-control" type="number" name="ingred_price" placeholder="Feltét ára Ft-ban..." min="0" max="2000">
                                @error('ingred_price')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="form-group">
                                <input type="submit" class="btn btn-confirm" value="Feltét Bevitel">
                            </div>
                        </div>
                        </form>
                    </div>
                    {{-- DELETE PIZZA --}}
                    <div class="card m-2 p-2">
                        <div class="card-header">
                            <h3>Pizzák törlése/módosítása</h3>
                        </div>
                        <form method="POST" action="{{route('admin.deletePizza')}}">
                        @csrf
                        @method('DELETE')
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="pizzaDelete"><p>Válassz egy törlendő pizzát</p></label>
                                    <select name="pizzaDelete" class="form-control">
                                        @foreach ($allPizza as $pizza)
                                            <option value="{{$pizza->id}}">{{$pizza->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group">
                                    <input type="submit" class="btn btn-delete text-white" value="Pizza Törlése">
                                </div>
                                @if (isset($success))
                                   <h3>{{$success}}</h3> 
                                @endif
                            </div>
                        </form>
                        <form method="POST" action="{{route('admin.showModifyPizza')}}">
                            @csrf
                            @method('PATCH')
                            {{-- MODIFY --}}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="pizzaDelete"><p>Válassz egy módosítani kívánt pizzát</p></label>
                                    <select name="pizzaModify" class="form-control">
                                        @foreach ($allPizza as $pizza)
                                            <option value="{{$pizza->id}}">{{$pizza->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group">
                                    <input type="submit" class="btn btn-modify text-white" value="Pizza Módosítása">
                                </div>
                                @if (isset($success))
                                   <h3>{{$success}}</h3> 
                                @endif
                            </div>
                        </form>
                    </div>
                </section>
            {{-- </div> --}}
        </div>
    {{-- </div> --}}
@endsection