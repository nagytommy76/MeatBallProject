<template>
    <nav role="navigation" class="navbar">
        <span v-if="mobileSize" @click="closeNav()" class="sidenav-close"><i class="far fa-times-circle fa-2x"></i></span>
        <div class="navbar-brand">
            <router-link :to="{name: 'Welcome'}"><span class="primary-color">Húsgolyó </span>Étterem</router-link>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item">
                <LinkItem 
                    @click.native="closeNav()"
                    :menuName="'Portfólióm'"
                    :className="'nav-link'"
                    :routeName="'MainWelcome'"
                ></LinkItem>
            </li>
            <DesktopNav
                :closeNav="closeNav"
                :event="mobileSize"
            />
            <li v-show="!loggedIn" class="nav-item">
                <LinkItem 
                    @click.native="closeNav()"
                    :menuName="'Belépés'"
                    :className="'nav-link'"
                    :routeName="'Login'"
                ></LinkItem>
            </li>
            <li v-show="!loggedIn" class="nav-item">
                <LinkItem 
                    @click.native="closeNav()"
                    :menuName="'Regisztráció'"
                    :className="'nav-link'"
                    :routeName="'Register'"
                ></LinkItem>
            </li>
            <li v-show="loggedIn" class="nav-item dropdown">
                <a v-on="mobileSize ? {click: toggleProfileDrop} : {mouseenter: openProfileDrop}"
                id="navbarDropdown" class="nav-link dropdown-toggle" >{{ userName }}<span class="caret"></span>
                </a>
                <transition name="dropdownNav">
                    <div class="dropdown-menu" v-if="showProfileDrop" v-on="mobileSize ? {click: toggleProfileDrop} : {mouseleave: hideProfileDropdown}">
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
                </transition>
            </li>
        </ul>
    </nav>    
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import DesktopNav from './NavbarIncludes/DesktopNav'
import LinkItem from './NavbarIncludes/LinkItem'
export default {
    components:{
        DesktopNav,
        LinkItem,
    },
    props:{
        mobileSize: Boolean,
    },
    computed: {
        ...mapGetters({
            loggedIn: 'getUserLoggedIn',
            userName: 'getUserName',
            totalQty: 'getTotalQty'
        }),
    },
    data() {
        return {
            showProfileDrop: false,
        }
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
        hideProfileDropdown(){
            this.showProfileDrop = false
        },
        toggleProfileDrop(){
             this.showProfileDrop = !this.showProfileDrop
        },
        openProfileDrop(){
            this.showProfileDrop = true
        },
    },
}
</script>