<template>
    <div>
        <div class="sidebar-open" @click="openSidebar()"><font-awesome :icon="['fas', 'bars']" size="2x"/></div>
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