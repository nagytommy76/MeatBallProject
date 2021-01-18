<template>
    <nav role="navigation" class="navbar">
        <span v-if="mobileSize" @click="$emit('close')" class="sidenav-close"><i class="far fa-times-circle fa-2x"></i></span>
        <div class="navbar-brand">
            <router-link :to="{name: 'Welcome'}"><span class="primary-color">Húsgolyó </span>Étterem</router-link>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'MainWelcome'}">Portfólióm</router-link>
            </li>
            <li class="nav-item dropdown">
                <a @mouseenter="showDropdown" id="foodOrder" class="nav-link dropdown">Étel Rendelés</a>
                <transition name="dropdownNav">
                <div class="dropdown-menu" v-if="showDrop" @mouseleave="hideDropdown">
                    <router-link @click.native="closeNav()" :to="{name: 'Pizza'}" class="dropdown-menu-item">
                        <i class="fas fa-pizza-slice"></i>
                        Pizza
                    </router-link>
                    <router-link @click.native="closeNav()" :to="{name: 'Soup'}" class="dropdown-menu-item">
                        <i class="fas fa-soap"></i>
                        Levesek
                    </router-link>
                    <router-link @click.native="closeNav()" :to="{name: 'Dessert'}" class="dropdown-menu-item">
                        <i class="fas fa-birthday-cake"></i>
                        Desszertek
                    </router-link>
                    <router-link @click.native="closeNav()" :to="{name: 'Drink'}" class="dropdown-menu-item">
                        <i class="fas fa-wine-glass-alt"></i>
                        Italok
                    </router-link>
                    <router-link @click.native="closeNav()" :to="{name: 'Meal'}" class="dropdown-menu-item">
                        <i class="fas fa-weight"></i>
                        Főételek
                    </router-link>
                    <router-link @click.native="closeNav()" :to="{name: 'Pasta'}" class="dropdown-menu-item">
                        <i class="fas fa-weight"></i>
                        Tészta Ételek
                    </router-link> 
                </div>
                </transition>
            </li>
            <li v-show="!loggedIn" class="nav-item">
                <router-link @click.native="closeNav()" class="nav-link" :to="{name: 'Login'}">Belépés</router-link>
            </li>
            <li v-show="!loggedIn" class="nav-item">
                <router-link @click.native="closeNav()" class="nav-link" :to="{name: 'Register'}">Regisztráció</router-link>
            </li>
            <li v-show="loggedIn" class="nav-item dropdown">
                <a id="navbarDropdown" class="nav-link dropdown-toggle" >{{ userName }}<span class="caret"></span>
                </a>
                <div class="dropdown-menu">
                    <a @click.prevent="logOut()" class="dropdown-menu-item" id="logOutBtn" href="#">
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
import { mapActions, mapGetters } from "vuex";
export default {
    props:{
        mobileSize: Boolean,
    },
    data() {
        return {
            showDrop: false
        }
    },
    computed: {
        ...mapGetters({
            loggedIn: 'getUserLoggedIn',
            userName: 'getUserName',
            totalQty: 'getTotalQty'
        }),
    },
    methods: {
        ...mapActions({
            revokeUserName: 'revokeUserName',
            setLoggedIn: 'setLoggedIn',
            setCartDefault: 'setCartDefault',
            setToDefaultUserInfo: 'setToDefaultUserInfo',
        }),
        closeNav(){
            if (this.mobileSize) {
                this.$emit('close')
            }
        },
        async logOut(){
            await axios.post('logout').then(logout =>{
                this.revokeUserName()
                this.setLoggedIn(false)
                this.setCartDefault()
                this.setToDefaultUserInfo()
                localStorage.removeItem('accessToken')
            })
        },
        showDropdown(){
            this.showDrop = true
        },
        hideDropdown(){
            this.showDrop = false
        }
    },
}
</script>