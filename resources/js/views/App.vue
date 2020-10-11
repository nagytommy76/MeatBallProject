<template>
    <main id="app">
        <Navbar />
        <router-view></router-view>
        <Footer />
    </main>
</template>
<script>
import Footer from '../views/includes/Footer'
import Navbar from '../views/includes/Navbar'
import Welcome from '../views/includes/Welcome'

import { mapState, mapActions } from "vuex";

export default {
    name: 'App',
    components:{
        Footer,
        Navbar,
        Welcome,
    },
    methods: {
    },
}
</script>