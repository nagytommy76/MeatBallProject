<template>
<main>
    <div id="navOpen" @click="openNavbar()" v-if="showNavOpen"><font-awesome :icon="['fas', 'bars']" /></div>
    <transition name="navbar" appear >
        <Navbar :mobileSize="showNavOpen" v-if="showNavbar" @close="showNavbar = false" />
    </transition>

    <transition name="slide" appear>
        <div class="fade-in" v-if="showCartModal" @click="showCartModal = false"></div>
        <div class="fade-in" v-if="showOrdersModal" @click="showOrdersModal = false"></div>
    </transition>
    <transition name="modal" appear >
        <Modal v-if="showCartModal" @close="showCartModal = false"/>
        <OrdersModal v-if="showOrdersModal" @close="showOrdersModal = false" />
    </transition>
    <router-view></router-view>
    <Footer />
</main>
</template>
<script>
import MainHeader from '../views/includes/WelcomeIncludes/MainHeader'
import Footer from '../views/includes/Footer'
import Navbar from '../views/includes/Navbar'

export default {
    name: 'Meatball',
    components:{
        Footer,
        Navbar,
        MainHeader,
    },
    mounted(){
        window.addEventListener('resize', this.checkWindowWidth())
        this.checkWindowWidth()
    },
    data() {
        return {
            showCartModal: false,
            showOrdersModal: false,

            showNavOpen: false,
            showNavbar: true,
        }
    },
    methods: {
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