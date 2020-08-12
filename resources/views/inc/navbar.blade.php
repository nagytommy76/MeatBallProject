<nav role="navigation" class="navbar">
    {{-- <div class="navbar-container"> --}}
        <a class="navbar-brand" href="{{ url('/') }}">
            <span class="primary-color">Húsgolyó</span> Étterem
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav">
                {{-- FOODS --}}
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle"
                    role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Étel Rendelés</a>
                    
                    <div class="dropdown-menu">
                        <a href="{{ route('pizza.index') }}" class="dropdown-item">
                            <i class="fas fa-pizza-slice"></i>
                            Pizzák
                        </a>
                        <a href="{{ route('pasta.index') }}" class="dropdown-item">
                            <i class="fas fa-cloud-meatball"></i>
                            Tészta Ételek
                        </a>
                    </div>
                </li>{{-- Nav Item End FOODS END --}}
                <li class="nav-item">
                    <a href="{{ route('pizza.index') }}" class="nav-link">Étel Rendelés 2.0</a>
                </li>
                <!-- Authentication Links -->
                @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Belépés') }}</a>
                    </li>
                    @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Regisztráció') }}</a>
                        </li>
                    @endif
                @else
                    

                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->username }} <span class="caret"></span>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('user.logout') }}"
                               onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                <i class="fas fa-sign-out-alt"></i> 
                                Kilépés
                            </a>
                            <form id="logout-form" action="{{ route('user.logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                            
                            {{-- ONLY ADMIN --}}
                            @auth('admin')
                                <a class="dropdown-item" href="{{route('admin.pizza')}}">
                                    <i class="fas fa-pizza-slice"></i>
                                    Pizzák Kezelése
                                </a>                               
                                <a class="dropdown-item" href="{{route('pasta.index')}}">
                                    <i class="fas fa-pizza-slice"></i>
                                    Tészta ételek kezelése
                                </a>                               
                            @endauth
                            {{-- ONLY USERS SEEs IT --}}
                            @auth('web')
                                <a class="dropdown-item" href="{{ route('userinfo.index') }}">
                                    <i class="fas fa-address-card"></i>
                                    Személyes adatok
                                </a>
                                <cart-items></cart-items>
                            @endauth
                        </div>
                    </li>
                @endguest
            </ul>
</nav>
<cart-modal></cart-modal>