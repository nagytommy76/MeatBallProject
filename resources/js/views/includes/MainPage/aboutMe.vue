<template>
    <section id="aboutMe" class="main-content">
        <LeftContent />
        <section class="main-right-content" id="projects">
            <h3 class="sub-title">Projectek</h3>
            <div class="projects">
                <Meatball />
                <Wargaming 
                    @show-image="openImageSlider"
                />
            </div>
        </section>
        <transition name="slide">
            <div class="fade-in" v-if="showImageSlider"></div>
        </transition>
        <transition name="image">
            <ImageSlider 
                v-if="showImageSlider"
            />
        </transition>
    </section>
</template>
<script>
import LeftContent from './includes/LeftContent'
import Meatball from './includes/MeatballProject'
import Wargaming from './includes/WgProject'
import ImageSlider from './includes/ImageSlider'
export default {
    name: 'AboutMe',
    components:{
        LeftContent,
        Meatball,
        Wargaming,
        ImageSlider,
    },
    data() {
        return {
            showImageSlider: false,
        }
    },
    methods: {
        openImageSlider(imageFolderName){
            console.log('csöcsi')
            console.log(imageFolderName)
            this.showImageSlider = true
        }
    },
}
</script>