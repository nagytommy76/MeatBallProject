<template>
    <nav role="navigation" class="navbar">
        <div class="navbar-brand">
            <router-link to="/"><span class="primary-color">Húsgolyó</span>Étterem
            <span id="navOpen"><i class="fas fa-bars"></i></span></router-link>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle">Étel Rendelés</a>
                <div class="dropdown-menu">
                    <router-link to="/pizza" class="dropdown-item">
                        <i class="fas fa-pizza-slice"></i>
                        Pizza
                    </router-link>
                    <router-link to="/soup" class="dropdown-item">
                        <i class="fas fa-soap"></i>
                        Levesek
                    </router-link>
                    <router-link to="/dessert" class="dropdown-item">
                        <i class="fas fa-birthday-cake"></i>
                        Desszertek
                    </router-link>
                    <router-link to="/drink" class="dropdown-item">
                        <i class="fas fa-wine-glass-alt"></i>
                        Italok
                    </router-link>
                    <router-link to="/meal" class="dropdown-item">
                        <i class="fas fa-weight"></i>
                        Főételek
                    </router-link>
                    <router-link to="/pasta" class="dropdown-item">
                        <i class="fas fa-weight"></i>
                        Tészta Ételek
                    </router-link>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Belépés</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Regisztráció</a>
            </li>

            <li v-show="show" class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                    Teszt Júzer<span class="caret"></span>
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" id="logOutBtn" href="#">
                        <i class="fas fa-sign-out-alt"></i> 
                        Kilépés
                    </a>
                </div>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            show: false,
        }
    },
}
</script>