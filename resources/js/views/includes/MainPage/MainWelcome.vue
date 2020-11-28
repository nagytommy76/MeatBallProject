<template>
    <div>
        <!-- Ez lesz a kezdőoldala a portfóliómnak, ide kell egy router view -->
        <AboutMe />
        <Footer />
    </div>
</template>
<script>
import AboutMe from './aboutMe'
import Footer from './Footer'
export default {
    name: 'MainWelcomePage',
    components:{
        AboutMe,
        Footer,
    },
}
</script>