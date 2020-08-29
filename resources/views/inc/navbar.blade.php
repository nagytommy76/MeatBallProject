<nav role="navigation" class="navbar">
        <a class="navbar-brand" href="{{ url('/') }}">
            <span class="primary-color">Húsgolyó</span> Étterem
        </a>
            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="{{ route('pizza') }}" class="nav-link">Étel Rendelés</a>
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
                            <a class="dropdown-item" id="logOutBtn" href="{{ route('user.logout') }}">
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