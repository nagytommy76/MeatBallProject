<template>
    <section class="certificates">
        <h1 class="sub-title">Tanúsítványok</h1>
        <!-- 
            Ide kell a képek kicsinyített verzióit rakni, ammire ha rákattintok megynílik az img slider
            itt létre kell hozni egy openImg slider function-t.
            
         -->
        <!-- <img src="/images/php-mvc.jpg" @click="openImage" alt=""> -->
        <section class="image-grid">
            <img class="image" src="../../../../../../img/certificates/php-mvc.jpg" @click="openImage('php-mvc')">
            <img class="image" src="../../../../../../img/certificates/sass-css.jpg" @click="openImage('sass-css')">
            <img class="image" src="../../../../../../img/certificates/complete-web.jpg" @click="openImage('complete-web')">
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
    height: 40vh;
    background-color: #222;
    .image-grid{
        display: grid;
        gap: 3rem;
        justify-content: center;
        grid-template-columns: repeat(3, 400px);
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
</style>