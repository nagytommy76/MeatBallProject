<template>
    <section class="certificates">
        <h1 class="sub-title">Tanúsítványok</h1>
        <section class="image-grid">
            <img class="image" src="/images/php-mvc.jpg" @click="openImage('php-mvc')">
            <img class="image" src="/images/sass-css.jpg" @click="openImage('sass-css')">
            <img class="image" src="/images/complete-web.jpg" @click="openImage('complete-web')">
        </section>
        <transition name="slide">
            <div class="fade-in" v-if="showImageSlider" @click="showImageSlider = false"></div>
        </transition>
        <transition name="image">
            <ImageSlider 
                v-if="showImageSlider"
                @close="showImageSlider = false"
                :imgFolderName="selectedImageName"
                :singleImage="true"
            />
        </transition>
    </section>
</template>
<script>
export default {
    data() {
        return {
            showImageSlider: false,
            selectedImageName: '',
        }
    },
    methods:{
        openImage(selectedImg){
            this.selectedImageName = selectedImg
            this.showImageSlider = true
        },
    },
}
</script>
<style lang="scss" scoped>
@import '../../../../../../sass/variables';
.certificates{
    min-height: 40vh;
    background-color: #222;
    .image-grid{
        display: grid;
        gap: 3rem;
        margin-top: 2rem;
        justify-content: center;
        grid-template-columns: repeat(3, 390px);
        .image{
            width: 100%;
            cursor: pointer;
            transition: transform .4s ease;
            &:hover{
                transform: scale(1.05);
            }
        }
    }
}
@media(max-width: $mobile-width)  {
    .certificates{
        min-height: 90vh;
        .image-grid{
            margin-top: 0;
            grid-template-columns: repeat(1, 300px);
        }
    }
}

@media(max-width: $tablet-width) {
    .certificates{
        .image-grid{
            grid-template-columns: repeat(1, 350px);
        }
    }
}
</style>