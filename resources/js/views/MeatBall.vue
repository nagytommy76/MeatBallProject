<template>
<main>
    <!-- <div class="sidebar-open" @click="openNavbar()"><i class="fas fa-bars fa-2x"></i></div> -->
        <!-- <transition name="slide" appear> -->
            <!-- <div class="" v-if="showNavbar" @click="showNavbar = false"></div> -->
        <!-- </transition> -->
        <!-- <transition name="navbar" appear > -->
            <Navbar />
        <!-- </transition> -->

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

import Modal from '../components/cart/modal'
import OrdersModal from '../components/Auth/orderModal'
export default {
    name: 'Meatball',
    components:{
        Footer,
        Navbar,
        MainHeader,
        Modal,
        OrdersModal,
    },
    data() {
        return {
            showCartModal: false,
            showOrdersModal: false,
            // showNavbar: true,
        }
    },
    methods: {
        // openNavbar(){
        //     this.showNavbar = true
        // }
    },
}
</script>