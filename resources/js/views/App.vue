<template>
    <main id="top">
        <Navbar />
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
import Footer from '../views/includes/Footer'
import Navbar from '../views/includes/Navbar'
import Welcome from '../views/includes/Welcome'

import Modal from '../components/cart/modal'
import OrdersModal from '../components/Auth/orderModal'


export default {
    name: 'App',
    components:{
        Footer,
        Navbar,
        Welcome,
        Modal,
        OrdersModal,
    },
    data() {
        return {
            showCartModal: false,
            showOrdersModal: false,
        }
    },
    created(){
    },
    methods: {
    },
}
</script>