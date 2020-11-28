<template>
    <nav role="navigation" class="navbar">
        <div class="navbar-brand">
            <router-link :to="{name: 'Welcome'}"><span class="primary-color">Húsgolyó </span>Étterem</router-link>
            <span id="navOpen"><i class="fas fa-bars"></i></span>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a id="foodOrder" class="nav-link dropdown">Étel Rendelés</a>
                <div class="dropdown-menu">
                    <router-link :to="{name: 'Pizza'}" class="dropdown-menu-item">
                        <i class="fas fa-pizza-slice"></i>
                        Pizza
                    </router-link>
                    <router-link :to="{name: 'Soup'}" class="dropdown-menu-item">
                        <i class="fas fa-soap"></i>
                        Levesek
                    </router-link>
                    <router-link :to="{name: 'Dessert'}" class="dropdown-menu-item">
                        <i class="fas fa-birthday-cake"></i>
                        Desszertek
                    </router-link>
                    <router-link :to="{name: 'Drink'}" class="dropdown-menu-item">
                        <i class="fas fa-wine-glass-alt"></i>
                        Italok
                    </router-link>
                    <router-link :to="{name: 'Meal'}" class="dropdown-menu-item">
                        <i class="fas fa-weight"></i>
                        Főételek
                    </router-link>
                    <router-link :to="{name: 'Pasta'}" class="dropdown-menu-item">
                        <i class="fas fa-weight"></i>
                        Tészta Ételek
                    </router-link> 
                </div>
            </li>
            <li v-show="!loggedIn" class="nav-item">
                <router-link class="nav-link" :to="{name: 'Login'}">Belépés</router-link>
            </li>
            <li v-show="!loggedIn" class="nav-item">
                <router-link class="nav-link" :to="{name: 'Register'}">Regisztráció</router-link>
            </li>

            <li v-show="loggedIn" class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" >{{ userName }}<span class="caret"></span>
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-menu-item" id="logOutBtn" href="#">
                        <i class="fas fa-sign-out-alt"></i> 
                        Kilépés
                    </a>
                    <a @click="$parent.showOrdersModal = true" class="dropdown-menu-item">
                        <i class="fas fa-cart-arrow-down"></i>
                    Korábbi rendelések
                    </a>
                    <a @click="$parent.showCartModal = true" class="dropdown-menu-item">
                        <i class="fas fa-shopping-cart"></i> 
                        Kosár
                        <span class="noOfFoodsInCart">{{ totalQty }}</span>
                    </a>
                </div>
            </li>
        </ul>
    </nav>    
</template>
<script>
import { mapGetters } from "vuex";

import navbarHelper from '../../helpers/navbarHelper'

export default {
    computed: {
        ...mapGetters({
            loggedIn: 'getUserLoggedIn',
            userName: 'getUserName',
            totalQty: 'getTotalQty'
        }),
    },
    mounted(){
        navbarHelper.logOutBTN(this.$store)
        navbarHelper.openBtn()
    },
    methods:{
    }
}
</script>