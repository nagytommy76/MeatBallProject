@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card-container">
        <section class="card-content">
            <div class="card">
                <div class="card-header">ADMIN Belépés</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('admin.login.submit') }}">
                        @csrf
                        <div class="form-group">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Cím') }}</label>

                            {{-- <div class="col-md-6"> --}}
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            {{-- </div> --}}
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Jelszó') }}</label>
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
                            <button type="submit" class="btn btn-primary">
                                {{ __('ADMIN Belépés') }}
                            </button>
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
