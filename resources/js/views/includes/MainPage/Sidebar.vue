<template>
    <nav class="sidenav">
        <span @click="closeNav()" class="sidenav-close"><i class="far fa-times-circle fa-2x"></i></span>
        <div class="sidenav-nav">
            <div class="sidenav-navigation">
                <router-link class="sidenav-navigation-item" :to="{name: 'Welcome'}">Húsgolyó Étterem</router-link>
                <a class="sidenav-navigation-item" href="#">Computer Store</a>
                <div class="nav-underline"></div>
                <a v-if="mobileView" @click="closeNav()" class="sidenav-navigation-item" href="#aboutMe">Rólam</a>
                <a @click="closeNav()" class="sidenav-navigation-item" href="#projects">Projectek</a>
                <a @click="closeNav()" class="sidenav-navigation-item" href="#schools">Tanulmányok</a>
                <a class="sidenav-navigation-item" href="#">Önéletrajzom</a>
                <div class="nav-underline"></div>
                <div class="sidenav-contact">
                    <Tooltip :text="'nagytommy76@gmail.com'">
                        <a href="mailto:nagytommy76@gmail.com" class="sidenav-contact-item"><i class="fas fa-envelope fa-2x"></i></a>
                    </Tooltip>
                    <Tooltip :text="'06307862963'">
                        <a href="tel:06307862963" class="sidenav-contact-item"><i class="fas fa-phone fa-2x"></i></a>
                    </Tooltip>
                    <Tooltip :text="'LinkedIn'">
                        <a target="_blank" href="https://www.linkedin.com/in/nagy-tam%C3%A1s-27355116b/" class="sidenav-contact-item"><i class="fab fa-linkedin fa-2x"></i></a>
                    </Tooltip>
                    <Tooltip :text="'GitHub'">
                        <a target="_blank" href="https://github.com/nagytommy76" class="sidenav-contact-item"><i class="fab fa-github fa-2x"></i></a>
                    </Tooltip>
                    <Tooltip :text="'Facebook'">
                        <a target="_blank" href="https://www.facebook.com/tamas.nagy.1029" class="sidenav-contact-item"><i class="fab fa-facebook-square fa-2x"></i></a>
                    </Tooltip>
                    <h4><a class="email" href="mailto:nagytommy76@gmail.com">nagytommy76@gmail.com</a></h4> 
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'SideNavbar',
    computed:{
        mobileView(){
            return window.innerWidth <= 600 ? true : false
        }
    },
    methods: {
        closeNav(){
            this.$emit('close')
        }
    },
}
</script>