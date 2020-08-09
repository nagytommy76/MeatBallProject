@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card-container">
        <section class="card-content">
            <div class="card">
                <div class="card-header">Jelszó Visszaállítás</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('password.email') }}">
                        @csrf

                        <div class="form-group row">
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

                        <div class="card-footer">
                            <div class="form-group">
                                <div>
                                    <button type="submit" class="btn btn-primary">
                                        Jelszó Visszaállító E-mail küldése
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</div>
@endsection
