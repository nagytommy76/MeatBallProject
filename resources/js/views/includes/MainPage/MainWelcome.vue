<template>
    <div>
        <div class="sidebar-open" @click="openSidebar()"><i class="fas fa-bars fa-2x"></i></div>
        <transition name="background">
            <div class="fade-in" v-if="showSidebar" @click="showSidebar = false"></div>
        </transition>
        <transition name="sidebar">
            <Sidebar v-if="showSidebar" @close="showSidebar = false" />
        </transition>
        <AboutMe />
        <Schools />
        <Footer />
    </div>
</template>
<script>
import Sidebar from './Sidebar'
import AboutMe from './AboutMe'
import Schools from './Schools'
import Footer from './Footer'
export default {
    name: 'MainWelcome',
    components:{
        Sidebar,
        AboutMe,
        Schools,
        Footer,
    },
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {
        openSidebar(){
            this.showSidebar = true
        },
    },
}
</script>