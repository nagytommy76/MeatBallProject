<template>
    <nav class="sidenav">
        <span @click="$emit('close')" class="sidenav-close"><i class="far fa-times-circle fa-2x"></i></span>
        <div class="sidenav-nav">
            <div class="sidenav-navigation">
                <!-- <a class="sidenav-navigation-item" href="#">Húsgolyó Étterem</a> -->
                <router-link class="sidenav-navigation-item" :to="{name: 'Welcome'}">Húsgolyó Étterem</router-link>
                <a class="sidenav-navigation-item" href="#">Computer Store</a>
                <div class="nav-underline"></div>
                <a class="sidenav-navigation-item" href="#">Projectek</a>
                <a class="sidenav-navigation-item" href="#schools">Tanulmányok</a>
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
                    </div>
            </div>
        </div>
    </nav>
</template>
<script>
import Tooltip from '../../../components/Utility/Tooltip'
export default {
    name: 'SideNavbar',
    components:{
        Tooltip
    }
}
</script>