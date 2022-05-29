<template>
    <nav class="sidenav">
        <span @click="closeNav()" class="sidenav-close"
            ><font-awesome :icon="['far', 'times-circle']" size="2x"
        /></span>
        <div class="sidenav-nav">
            <div class="sidenav-navigation">
                <a
                    target="_blank"
                    class="sidenav-navigation-item"
                    href="https://computerstorebackend.firebaseapp.com/"
                    >Computer Store</a
                >
                <a
                    target="_blank"
                    class="sidenav-navigation-item"
                    href="https://react-recipe-finder.web.app/"
                    >Recept kereső</a
                >
                <router-link
                    class="sidenav-navigation-item"
                    :to="{ name: 'Welcome' }"
                    >Húsgolyó Étterem</router-link
                >
                <a
                    target="_blank"
                    class="sidenav-navigation-item"
                    href="https://nagytommy76.github.io/Wargaming/"
                    >World of Tanks</a
                >
                <div class="nav-underline"></div>
                <a
                    v-if="mobileView"
                    @click="closeNav()"
                    class="sidenav-navigation-item"
                    href="#aboutMe"
                    >Rólam</a
                >
                <a
                    @click="closeNav()"
                    class="sidenav-navigation-item"
                    href="#projects"
                    >Projectek</a
                >
                <a
                    @click="closeNav()"
                    class="sidenav-navigation-item"
                    href="#schools"
                    >Tanulmányok</a
                >
                <a
                    target="_blank"
                    href="https://drive.google.com/drive/folders/1-kAtpIRgO-xTEtikH-HyR4HCJm_HuhFu?usp=sharing"
                    class="sidenav-navigation-item"
                    >Önéletrajz</a
                >
                <div class="nav-underline"></div>
                <div class="sidenav-contact">
                    <Tooltip :text="'nagytommy76@gmail.com'">
                        <a
                            href="mailto:nagytommy76@gmail.com"
                            class="sidenav-contact-item"
                            ><font-awesome
                                class="svg-icon"
                                :icon="['fas', 'envelope']"
                                size="2x"
                        /></a>
                    </Tooltip>
                    <Tooltip :text="'LinkedIn'">
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/tam%C3%A1s-nagy-27355116b/"
                            class="sidenav-contact-item"
                            ><font-awesome
                                class="svg-icon"
                                :icon="['fab', 'linkedin']"
                                size="2x"
                        /></a>
                    </Tooltip>
                    <Tooltip :text="'GitHub'">
                        <a
                            target="_blank"
                            href="https://github.com/nagytommy76"
                            class="sidenav-contact-item"
                            ><font-awesome
                                class="svg-icon"
                                :icon="['fab', 'github']"
                                size="2x"
                        /></a>
                    </Tooltip>
                    <Tooltip :text="'0630 786 2963'">
                        <span
                            ><a href="tel:06307862963"
                                ><font-awesome
                                    class="svg-icon"
                                    :icon="['fa', 'phone']"
                                    size="2x"/></a
                        ></span>
                    </Tooltip>
                    <h4>
                        <a class="email" href="mailto:nagytommy76@gmail.com"
                            >nagytommy76@gmail.com</a
                        >
                    </h4>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "SideNavbar",
    computed: {
        mobileView() {
            return window.innerWidth <= 600 ? true : false;
        }
    },
    methods: {
        closeNav() {
            this.$emit("close");
        }
    }
};
</script>
<style lang="scss">
@import "../../../../../../sass/inc/portfolio/sidebar.scss";
</style>
