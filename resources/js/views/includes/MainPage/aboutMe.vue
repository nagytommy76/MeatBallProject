<template>
    <section id="aboutMe" class="main-content">
        <LeftContent />
        <section class="main-right-content" id="projects">
            <h3 class="sub-title">Projectek</h3>
            <div class="projects">
                <ComputerStore @show-image="openImageSlider" />
                <ReactRecipe @show-image="openImageSlider" />
                <Meatball @show-image="openImageSlider" />
                <Wargaming @show-image="openImageSlider" />
            </div>
        </section>
        <transition name="slide">
            <div
                class="fade-in"
                v-if="showImageSlider"
                @click="showImageSlider = false"
            ></div>
        </transition>
        <transition name="image">
            <ImageSlider
                v-if="showImageSlider"
                @close="showImageSlider = false"
                :imgFolderName="imgFolderName"
            />
        </transition>
    </section>
</template>
<script>
import LeftContent from "./includes/LeftContent";
import Meatball from "./includes/projects/MeatballProject";
import ReactRecipe from "./includes/projects/ReactRecipe";
import Wargaming from "./includes/projects/WgProject";
import ComputerStore from "./includes/projects/ComputerStore";

export default {
    name: "AboutMe",
    components: {
        LeftContent,
        Meatball,
        Wargaming,
        ReactRecipe,
        ComputerStore
    },
    data() {
        return {
            showImageSlider: false,
            imgFolderName: ""
        };
    },
    methods: {
        openImageSlider(imageFolderName) {
            this.showImageSlider = true;
            this.imgFolderName = imageFolderName;
        }
    }
};
</script>
<style lang="scss">
@import "../../../../sass/inc/portfolio/right-content";
</style>
