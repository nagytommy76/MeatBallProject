<nav role="navigation" class="navbar">
    <div class="navbar-brand">
        <a href="{{ url('meatball') }}"><span class="primary-color">Húsgolyó</span> Étterem</a>
        <!-- <span id="navOpen"><i class="fas fa-bars"></i></span> -->
    </div>
    <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                    Admin Funkciók <span class="caret"></span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">                
                    {{-- ONLY ADMIN --}}
                    @auth('admin')
                        <a class="dropdown-menu-item" href="{{ route('admin.logout') }}">
                            <i class="fas fa-sign-out-alt"></i> 
                            Kilépés
                        </a>
                        <a class="dropdown-menu-item" href="{{route('admin.pizza')}}">
                            <i class="fas fa-pizza-slice"></i>
                            Pizzák
                        </a>                               
                        <a class="dropdown-menu-item" href="{{route('pasta.index')}}">
                            <i class="fas fa-cloud-meatball"></i>
                            Tészta
                        </a>                               
                        <a class="dropdown-menu-item" href="{{route('soup.index')}}">
                            <i class="fas fa-soap"></i>
                            Levesek
                        </a>                               
                        <a class="dropdown-menu-item" href="{{route('dessert.index')}}">
                            <i class="fas fa-birthday-cake"></i>
                            Desszertek
                        </a>                               
                        <a class="dropdown-menu-item" href="{{route('meal.index')}}">
                            <i class="fas fa-weight"></i>
                            Főételek
                        </a>                               
                        <a class="dropdown-menu-item" href="{{route('drink.index')}}">
                            <i class="fas fa-wine-glass-alt"></i>
                            Italok
                        </a>                               
                    @endauth
                </div>
            </li>
    </ul>
</nav>