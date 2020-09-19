<nav role="navigation" class="navbar">
            <div class="navbar-brand">
                <a href="{{ url('/') }}"><span class="primary-color">Húsgolyó</span> Étterem</a>
                <span id="navOpen"><i class="fas fa-bars"></i></span>
            </div>
            {{-- <div id="navOpen"><i class="fas fa-bars"></i></div>        --}}
            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="{{ route('foods') }}" class="nav-link">Étel Rendelés</a>
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
                                    Pizzák
                                </a>                               
                                <a class="dropdown-item" href="{{route('pasta.index')}}">
                                    <i class="fas fa-cloud-meatball"></i>
                                    Tészta
                                </a>                               
                                <a class="dropdown-item" href="{{route('soup.index')}}">
                                    <i class="fas fa-soap"></i>
                                    Levesek
                                </a>                               
                                <a class="dropdown-item" href="{{route('dessert.index')}}">
                                    <i class="fas fa-birthday-cake"></i>
                                    Desszertek
                                </a>                               
                                <a class="dropdown-item" href="{{route('meal.index')}}">
                                    <i class="fas fa-weight"></i>
                                    Főételek
                                </a>                               
                                <a class="dropdown-item" href="{{route('drink.index')}}">
                                    <i class="fas fa-wine-glass-alt"></i>
                                    Italok
                                </a>                               
                            @endauth
                            {{-- ONLY USERS SEEs IT --}}
                            @auth('web')
                                <a class="dropdown-item" href="{{ route('userinfo.index') }}">
                                    <i class="fas fa-address-card"></i>
                                    Személyes adatok
                                </a>
                                <cart-items></cart-items>
                                <my-orders></my-orders>
                            @endauth
                        </div>
                    </li>
                @endguest
            </ul>
</nav>
<cart-modal></cart-modal>
<order-modal></order-modal>