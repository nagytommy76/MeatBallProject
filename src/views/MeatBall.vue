<template>
<main>
    <div id="navOpen" @click="openNavbar()" v-if="showNavOpen"><i class="fas fa-bars"></i></div>
    <transition name="navbar" >
        <Navbar :mobileSize="showNavOpen" v-if="showNavbar" @close="showNavbar = false" />
    </transition>

    <transition-group name="slide">
        <div class="fade-in" v-if="showCartModal" @click="hideCartModal"></div>
        <div class="fade-in" v-if="showOrdersModal" @click="showOrdersModal = false"></div>
    </transition-group>
    <transition-group name="modal" >
        <Modal v-if="showCartModal" @close="hideCartModal" v-model="showCartModal"/>
        <OrdersModal v-if="showOrdersModal" @close="showOrdersModal = false" />
    </transition-group>
    <router-view></router-view>
    <Footer />
</main>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Footer from './includes/Footer'
import Navbar from './includes/Navbar'

export default {
    name: 'Meatball',
    components:{
        Footer,
        Navbar,
    },
    mounted(){
        window.addEventListener('resize', this.checkWindowWidth())
        this.checkWindowWidth()
    },
    computed:{
        ...mapGetters({
            showCartModal: 'getShowCartModal'
        }),
    },
    data() {
        return {
            // showCartModal: false,
            showOrdersModal: false,

            showNavOpen: false,
            showNavbar: true,
        }
    },
    methods: {
        ...mapMutations({
            hideCartModal: 'hideCartModal'
        }),
        openNavbar(){
            this.showNavbar = true
        },
        checkWindowWidth(){
            if (window.innerWidth <= 700) {
                this.showNavbar = false
                this.showNavOpen = true
            }
        }
    },
}
</script>