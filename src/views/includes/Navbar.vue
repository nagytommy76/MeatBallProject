<template>
    <nav role="navigation" class="navbar" @mouseleave="hideProfileDropdown(); hideFoodDropdown()">
        <span v-if="mobileSize" @click="closeNav()" class="sidenav-close"><font-awesome :icon="['far', 'times-circle']" size="2x"/></span>
        <div class="navbar-brand">
            <router-link :to="{name: 'Welcome'}"><span class="primary-color">Húsgolyó </span>Étterem</router-link>
        </div>
        <ul class="navbar-nav">
            <li class="nav-item">
                <LinkItem 
                    @click="closeNav()"
                    :menuName="'Portfólióm'"
                    :className="'nav-link'"
                    :routeName="'MainWelcome'"
                ></LinkItem>
            </li>
            <DesktopNav
                :closeNav="closeNav"
                :event="mobileSize"
                :showDrop="showFoodDrop"
                @hide-dropdown="hideFoodDropdown"
                @open-drop="openFoodDrop"
                @toggle-drop="toggleFoodDrop"
            />
            <li v-show="!loggedIn" class="nav-item">
                <LinkItem 
                    @click="closeNav()"
                    :menuName="'Belépés'"
                    :className="'nav-link'"
                    :routeName="'Login'"
                ></LinkItem>
            </li>
            <li v-show="!loggedIn" class="nav-item">
                <LinkItem 
                    @click="closeNav()"
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
                    <div class="dropdown-menu" v-if="showProfileDrop">
                        <a @click.prevent="logOut()" class="dropdown-menu-item" id="logOutBtn" href="#">
                            <i class="fas fa-sign-out-alt"></i> 
                            Kilépés
                        </a>
                        <a @click="openOrdersModal" class="dropdown-menu-item">
                            <i class="fas fa-cart-arrow-down"></i>
                        Korábbi rendelések
                        </a>
                        <a @click="openCartModal" class="dropdown-menu-item">
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import axios from 'axios'
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
            showFoodDrop: false,
        }
    },
    methods: {
        openModal(){
            console.log('tesfsdfsdfd')
            console.log(this.$parent.showCartModal)
            this.$parent.showCartModal = true
        },
        ...mapActions({
            revokeUserName: 'revokeUserName',
            setCartDefault: 'setCartDefault',
            setToDefaultUserInfo: 'setToDefaultUserInfo',
        }),
        ...mapMutations([
            'setUserLoggedIn',
            'openCartModal',
            'openOrdersModal'
        ]),
        closeNav(){
            if (this.mobileSize) {
                this.$emit('close')
            }
        },
        async logOut(){
            await axios.post('logout').then(() =>{
                this.revokeUserName()
                this.setUserLoggedIn(false)
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
            if (!this.showProfileDrop) {
                this.showProfileDrop = true                
            }
        },

        hideFoodDropdown(){
            this.showFoodDrop = false
        },
        toggleFoodDrop(){
            this.showFoodDrop = !this.showFoodDrop
        },
        openFoodDrop(){
            if (!this.showFoodDrop) {
                this.showFoodDrop = true                
            }
        },
    },
}
</script>