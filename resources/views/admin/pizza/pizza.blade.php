@extends('layouts.admin')

@section('admin')
        <div class="container">
            {{-- <div class="card-container"> --}}
                <section class="card-content card-content-admin text-white">
                    <div class="card">
                        <form enctype="multipart/form-data" method="POST" action="{{ route('admin.foodInput') }}">
                            @csrf
                        <div class="card-header">
                            <h1 class="">Ételek bevitele</h1>                            
                        </div>
                        <div class="card-body">
                            {{-- Pizza name, Feltét --}}
                            <div class="form-group row">
                                <div class="col">

                                    <label for="name">Pizza megnevezése</label>
                                    <input class="@error('name') is-invalid @enderror form-control " type="text" name="name" id="name">
                                    @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror                
                                   
                                {{-- <div>{{ var_dump($errors) }}</div> --}}

                                </div>
                                <div class="col">
                                    <label for="price">Ár:</label>
                                    <input class="form-control" type="number" name="price" id="price">  
                                    @error('price')
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
                                <label for="image">Kép Feltöltése</label>
                                <input class="form-control" type="file" name="image">
                                @error('image')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            {{-- Kép --}}                           
                        </div>
                        @if ($errors->has('inputSuccess') || $errors->has('inputFail'))
                            @if ($errors->first('inputSuccess'))
                                <div class="alert alert-success">
                                    {{$errors->first('inputSuccess')}}
                                </div>
                            @else
                                <div class="alert alert-danger">
                                    {{$errors->first('inputFail')}}
                                </div>
                            @endif                                                
                        @endif
                        <div class="card-footer">
                                <input class="btn btn-confirm" type="submit" value="Bevitel">
                        </div>
                        </form>
                    </div>
                    {{-- INGREDIENTS --}}
                    <div class="card m-2">
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
                        @if ($errors->has('ingredInputSuccess') || $errors->has('ingredInputFail'))
                            @if ($errors->first('ingredInputSuccess'))
                                <div class="alert alert-success">
                                    {{$errors->first('ingredInputSuccess')}}
                                </div>
                            @else
                                <div class="alert alert-danger">
                                    {{$errors->first('ingredInputFail')}}
                                </div>
                            @endif                                                
                        @endif
                        <div class="card-footer">
                                <input type="submit" class="btn btn-confirm" value="Feltét Bevitel">
                        </div>
                        </form>

                        <form action="{{ route('admin.deleteIngred') }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <div class="card-header">
                                <h3>Feltét törlése</h3>
                            </div>
                            <div class="card-body">                            
                                <div class="form-group">
                                    <label for="ingred">Feltét törlése</label>
                                    <select class="form-control" name="ingred" id="ingred">
                                        @foreach ($ingredients as $ingred)
                                            <option value="{{$ingred->id}}">
                                                {{$ingred->ingredient}} ({{optional($ingred->ingredPrices)->price}}) Ft
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                                @if ($errors->has('deleteIngredSuccess') || $errors->has('deleteIngredFail'))
                                    @if ($errors->first('deleteIngredSuccess'))
                                        <div class="alert alert-success">
                                            {{$errors->first('deleteIngredSuccess')}}
                                        </div>
                                    @else
                                        <div class="alert alert-danger">
                                            {{$errors->first('deleteIngredFail')}}
                                        </div>
                                    @endif                                                
                                @endif
                                <div class="card-footer">
                                        <input type="submit" class="btn btn-delete text-white" value="Feltét Törlése">
                                </div>                            
                            </div>
                        </form>
                    </div>
                        
                    {{-- DELETE PIZZA --}}
                    <div class="card m-2">
                        <div class="card-header">
                            <h3>Pizzák törlése/módosítása</h3>
                        </div>
                        <form method="POST" action="{{route('admin.deletePizza')}}">
                        @csrf
                        @method('DELETE')
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="foodId"><p>Válassz egy törlendő pizzát</p></label>
                                    <select name="foodId" id="foodId" class="form-control">
                                        @foreach ($allPizza as $pizza)
                                            <option value="{{$pizza->id}}">{{$pizza->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer">
                                    <input type="submit" class="btn btn-delete text-white" value="Pizza Törlése">
                                @if ($errors->has('deleteSuccess') || $errors->has('deleteFail'))
                                    @if ($errors->first('deleteSuccess'))
                                        <div class="alert alert-success">
                                            {{$errors->first('deleteSuccess')}}
                                        </div>
                                    @else
                                        <div class="alert alert-danger">
                                            {{$errors->first('deleteFail')}}
                                        </div>
                                    @endif                                                
                                @endif
                            </div>
                        </form>
                        <form method="POST" action="{{route('admin.showModifyPizza')}}">
                            @csrf
                            @method('PATCH')
                            {{-- MODIFY --}}
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="pizzaModify"><p>Válassz egy módosítani kívánt pizzát</p></label>
                                    <select name="pizzaModify" id="pizzaModify" class="form-control">
                                        @foreach ($allPizza as $pizza)
                                            <option value="{{$pizza->id}}">{{$pizza->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer">
                                    <input type="submit" class="btn btn-primary" value="Pizza Módosítása">
                                @if ($errors->has('modifySuccess') || $errors->has('modifyFail'))
                                    @if ($errors->first('modifySuccess'))
                                        <div class="alert alert-success">
                                            {{$errors->first('modifySuccess')}}
                                        </div>
                                    @else
                                        <div class="alert alert-danger">
                                            {{$errors->first('modifyFail')}}
                                        </div>
                                    @endif                                                
                                @endif
                            </div>
                        </form>
                    </div>
                </section>
            {{-- </div> --}}
        </div>
    {{-- </div> --}}
@endsection