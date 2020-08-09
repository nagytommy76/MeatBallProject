@extends('layouts.app')

@section('content')
<!--<div class="container">
    <div class="card-container">
        {{-- <div class="col-md-8"> --}}
        <section class="card-content">
            <div class="card">
                <div class="card-header">{{ __('Belépés') }}</div>
                <div class="card-body">
                    {{-- <form method="POST" action="{{ route('login.submit') }}"> --}}
                        @csrf
                        <div class="form-group">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Cím') }}</label>

                            {{-- <div class="col-md-6"> --}}
                                <input id="email" type="email" class="@error('email') is-invalid @enderror form-control" name="email" value="{{ old('email') }}" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            {{-- </div> --}}
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Jelszó') }}</label>

                            {{-- <div class="col-md-6"> --}}
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required>
                                
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            {{-- </div> --}}
                        </div>

                        <div class="form-group">
                            {{-- <div class="col-md-6 offset-md-4"> --}}
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Emlékezz Rám!') }}
                                    </label>
                                </div>
                            {{-- </div> --}}
                        </div>
                
                <div class="card-footer">
                    <div class="form-group">
                        <div class="col-md-8 offset-md-4">
                            <input id="fetchUserToken" type="submit" value="Belépés" class="btn btn-primary" />
                            @if (Route::has('password.request'))
                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Elfelejtett Jelszó?') }}
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div> {{-- CARD BODY END --}}
            </form>
            </div>
        
        </section>
        {{-- </div> --}}
    </div>
</div> -->
<login/>
@endsection
