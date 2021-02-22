<template>
    <section class="certificates">
        <h1>Tanúsítványok</h1>
        <!-- 
            Ide kell a képek kicsinyített verzióit rakni, ammire ha rákattintok megynílik az img slider
            itt létre kell hozni egy openImg slider function-t.
            
         -->
         <!-- PL: -->
         <!-- Kép @click=="nyit slider" -->
         <!-- Kép @click=="nyit slider" -->
         <!-- Kép @click=="nyit slider" -->

        <transition name="slide">
            <div class="fade-in" v-if="showImageSlider" @click="showImageSlider = false"></div>
        </transition>
        <transition name="image">
            <ImageSlider 
                v-if="showImageSlider"
                @close="showImageSlider = false"
                
                :singleImage="true"
            />
        </transition>
    </section>
</template>
<script>
export default {
    data() {
        return {
            showImageSlider: true
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../../../../../sass/variables';
.certificates{
    height: 40vh;
    background-color: #222;
}
</style>