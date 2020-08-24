@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card-container">
    <section class="card-content">
    <div class="card p-2">
        <form action="{{ url('userinfo') }}" method="POST">
        <div class="card-header">
            <h1>Személyes adatok kitöltése</h1>
        </div>
        <div class="card-body">
                
                @csrf
            <div class="form-group row">
                <div class="col">
                    <label for="username">Felhasználónév: </label>
                    <input class="form-control" type="text" name="username" id=""
                    value="{{$username}}" {{$modify}}>
                </div>
                 <div class="col">
                    <label for="email">Email: </label>
                    <input class="form-control" type="email" name="email" id=""
                    value="{{$email}}">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>{{-- COL END --}}

            </div> {{-- 1st ROW END --}}
            <div class="form-group row">
                <div class="col">
                    <label for="firstname">Vezetéknév: </label>
                    <input class="form-control @error('firstname') is-invalid @enderror" type="text" name="firstname" id=""
                    value="{{$firstname}}">
                    @error('firstname')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div> {{--  COL END --}}

                <div class="col">
                    <label for="lastname">Keresztnév: </label>
                    <input class="form-control @error('firstname') is-invalid @enderror" type="text" name="lastname" id=""
                    value="{{$lastname}}">
                    @error('lastname')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div> {{-- COL END --}}
            </div> {{-- 2ND ROW END --}}
            <div class="form-group row">
                <div class="col">
                    <label for="city">Város: </label>
                    <input class="form-control @error('city') is-invalid @enderror" type="text" name="city" id=""
                    value="{{$city}}">
                    @error('city')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div> {{-- COL END --}}
                <div class="col">
                    <label for="zipCode">Ir. Szám: </label>
                    <input class="form-control @error('zipCode') is-invalid @enderror" type="number" min="0" max="9999" name="zipCode" id=""
                    value="{{$zipCode}}">
                    @error('zipCode')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div> {{-- COL END --}}
            </div>
            <div class="form-group row">
                <div class="col">
                    <label for="street">Utca: </label>
                    <input class="form-control @error('street') is-invalid @enderror" type="text" name="street" id=""
                    value="{{$street}}">
                    @error('street')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div> {{-- COL END --}}

                <div class="col">
                    <label for="houseNumber @error('houseNumber') is-invalid @enderror">Házszám: </label>
                    <input class="form-control" type="number" name="houseNumber" id=""
                    value="{{$houseNumber}}">
                    @error('houseNumber')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div> {{-- COL END --}}

            </div>{{-- 3RD ROW END --}}
            <div class="form-group row">
                <div class="col">
                    <label for="floorDoor">Emelet/Ajtó: </label>
                    <input class="form-control" type="text" name="floorDoor" id=""
                    value="{{$floorDoor}}">
                </div>{{-- COL END --}}
                <div class="col">
                    <label for="phone">Telefon: </label>
                    <input class="form-control @error('phone') is-invalid @enderror" type="text" name="phone" id=""
                    value="{{$phone}}">
                    @error('phone')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>{{-- COL END --}}
            </div>{{-- 4TH ROW END --}}
        </div>
        <div class="card-footer">
            <div class="form-group">
                <input class="btn btn-confirm" value="Mentés" type="submit" name="action" id="" {{ $input }}>
                <input type="submit" name="action" value="Módosítás" class="btn btn-primary" {{ $modify }}>
            </div>
        </div>
    
    </div>
</form>
    </section>
</div>
</div>
@endsection
