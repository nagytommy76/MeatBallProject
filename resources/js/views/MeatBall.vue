<template>
<main>
    <div id="navOpen" @click="setIsNavbarOpen(true)" v-if="showOpenNavbarBtn"><font-awesome :icon="['fas', 'bars']" /></div>
    <transition name="navbar">
        <Navbar v-if="isNavbarOpen" />
    </transition>

    <transition name="slide">
        <div class="fade-in" v-if="showCartModal" @click="showCartModal = false"></div>
        <div class="fade-in" v-if="showOrdersModal" @click="showOrdersModal = false"></div>
    </transition>
    <transition name="modal">
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
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'Meatball',
    components:{
        Footer,
        Navbar,
        MainHeader,
    },
    mounted(){
        this.checkWindowWidth()
    },
    computed: {
        ...mapGetters('Navbar',{
            showOpenNavbarBtn: 'getOpenNavbarBtn',
            isNavbarOpen: 'getIsNavbarOpen',
        }),
    },
    data() {
        return {
            showCartModal: false,
            showOrdersModal: false,
        }
    },
    methods: {
        ...mapMutations('Navbar',['setIsNavbarOpen']),
        ...mapActions('Navbar',['checkWindowWidth']),
    },
}
</script>