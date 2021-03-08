<template>
    <nav role="navigation" class="navbar" @mouseleave="hideProfileDropdown(); hideFoodDropdown()">
        <span v-if="showOpenNavbarBtn" @click="closeNav()" class="sidenav-close"><font-awesome :icon="['far', 'times-circle']" size="2x"/></span>
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
            <DesktopNav/>
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
                <a v-on="showOpenNavbarBtn ? {click: toggleProfileDrop} : {mouseenter: openProfileDrop}"
                id="navbarDropdown" class="nav-link dropdown-toggle" >{{ userName }}<span class="caret"></span>
                </a>
                <transition name="dropdownNav">
                    <div class="dropdown-menu" v-if="showProfileDrop">
                        <a @click.prevent="logOut()" class="dropdown-menu-item" id="logOutBtn" href="#">
                            <font-awesome class="svg-icon" :icon="['fas', 'sign-out-alt']" size="2x"/> 
                            Kilépés
                        </a>
                        <a @click="$parent.showOrdersModal = true" class="dropdown-menu-item">
                            <font-awesome class="svg-icon" :icon="['fas', 'cart-arrow-down']" size="2x"/> 
                        Korábbi rendelések
                        </a>
                        <a @click="$parent.showCartModal = true" class="dropdown-menu-item"> 
                            <font-awesome class="svg-icon" :icon="['fas', 'shopping-cart']" size="2x"/>
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import DesktopNav from './NavbarIncludes/DesktopNav'
import LinkItem from './NavbarIncludes/LinkItem'
export default {
    components:{
        DesktopNav,
        LinkItem,
    },
    computed: {
        ...mapGetters({
            totalQty: 'getTotalQty',
        }),
        ...mapGetters('loginUser', {
            loggedIn: 'getUserLoggedIn',
            userName: 'getUserName',
        }),
        ...mapGetters('Navbar',{
            showOpenNavbarBtn: 'getOpenNavbarBtn',
        }),
        ...mapGetters('navbarDropdown', {
            showProfileDrop: 'getProfileDropdown',
        }),
    },
    methods: {
        ...mapActions({
            setCartDefault: 'setCartDefault',
            setToDefaultUserInfo: 'setToDefaultUserInfo',
        }),
        ...mapMutations('loginUser', [
            'setUserLoggedIn',
            'setUserName'
        ]),
        ...mapMutations('Navbar',[
            'setIsNavbarOpen'
        ]),
        ...mapMutations('navbarDropdown', [
            'hideProfileDropdown',
            'toggleProfileDrop',
            'openProfileDrop',
            'hideFoodDropdown'
        ]),
        closeNav(){
            if (window.innerWidth <= 700) {
                this.setIsNavbarOpen(false)                
            }
        },
        async logOut(){
            await axios.post('logout').then(logout =>{
                if (logout.data.success) {
                    this.setUserName('')
                    this.setUserLoggedIn(false)
                    this.setCartDefault()
                    this.setToDefaultUserInfo()
                    localStorage.removeItem('accessToken')
                }
            })
        },
    },
}
</script>
<style lang="scss">
    @import '../../../sass/inc/modal';
</style>