<template>
    <div>
        <div class="sidebar-open" @click="openSidebar()"><i class="fas fa-bars fa-2x"></i></div>
        <transition name="slide" appear>
            <div class="fade-in" v-if="showSidebar" @click="showSidebar = false"></div>
        </transition>
        <transition name="sidebar" appear >
            <Navbar v-if="showSidebar" @close="showSidebar = false" />
        </transition>
        <AboutMe />
        <Footer />
    </div>
</template>
<script>
import Navbar from './Navbar'
import AboutMe from './aboutMe'
import Footer from './Footer'
export default {
    name: 'MainWelcomePage',
    components:{
        Navbar,
        AboutMe,
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