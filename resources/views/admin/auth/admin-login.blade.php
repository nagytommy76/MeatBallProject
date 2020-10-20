@extends('layouts.admin')

@section('admin')
<div class="container">
    <div class="card-container">
        <section class="card-content">
            <div class="card">
                <div class="card-header">ADMIN Belépés</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('admin.login.submit') }}">
                        @csrf
                        <div class="form-group">
                            <label for="email">E-Mail Cím</label>
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>

                        <div class="form-group">
                            <label for="password">Jelszó</label>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>                   
                <div class="card-footer">
                    <div class="form-group">
                        <div>
                            <input type="submit" class="btn btn-primary" value="ADMIN Belépés">
                        </div>
                    </div>
                </div>
            </form>
        </div> {{-- CARD BODY END --}}
            </div>
        </section>
    </div>
</div>
@endsection
