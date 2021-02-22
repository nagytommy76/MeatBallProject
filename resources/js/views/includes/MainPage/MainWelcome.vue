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
        <Certifications />
        <Footer />
    </div>
</template>
<script>
import Sidebar from './includes/main-page/Sidebar'
import AboutMe from './AboutMe'
import Schools from './Schools'
import Certifications from './includes/main-page/Certifications'
import Footer from './includes/main-page/Footer'
export default {
    name: 'MainWelcome',
    components:{
        Sidebar,
        AboutMe,
        Schools,
        Certifications,
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