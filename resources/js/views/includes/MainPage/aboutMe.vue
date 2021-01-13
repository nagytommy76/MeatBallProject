<template>
    <section id="aboutMe" class="main-content">
        <LeftContent />
        <section class="main-right-content" id="projects">
            <h3 class="sub-title">Projectek</h3>
            <div class="projects">
                <Meatball />
                <Wargaming />
            </div>
        </section>
    </section>
</template>
<script>
import LeftContent from './includes/LeftContent'
import Meatball from './includes/MeatballProject'
import Wargaming from './includes/WgProject'
export default {
    name: 'AboutMe',
    components:{
        LeftContent,
        Meatball,
        Wargaming,
    },
}
</script>