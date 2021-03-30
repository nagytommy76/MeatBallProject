<template>
    <div class="image-slider">
        <span @click="$emit('close')" class="image-close"><font-awesome :icon="['far', 'times-circle']" size="2x"/></span>
        <transition v-if="!singleImage" name="slide-image">
            <div @click="$emit('close')" class="img-container" v-for="nth in [step]" :key="nth">
                <!-- <img :src="`/images${images[nth]}`" >         -->
            <CloudImage :folder="imgFolderName" :image="allImages[nth]"/>
            </div>
        </transition>
        <div @click="$emit('close')" class="img-container" v-if="singleImage">
            <img :src="`/images/${imgFolderName}.jpg`">
        </div>
        <div v-if="!singleImage" class="arrow-right" @click="increase">
            <Tooltip :text="nextPage">
                <font-awesome class="svg-icon" :icon="['fas' ,'arrow-right']" size="3x"/>
            </Tooltip>
        </div>
        <div v-if="!singleImage" class="arrow-left" @click="decrease">
            <Tooltip :text="prevPage">
                <font-awesome class="svg-icon" :icon="['fas', 'arrow-left']" size="3x"/>
            </Tooltip>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imgFolderName: {
            type: String,
            required: false,
        },
        singleImage: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    mounted(){
        switch (this.imgFolderName) {
            case 'wargaming':
                this.getWGImagesFromFolderByName()
                break;
            case 'Meatball':
                this.getMeatBallImagesFromFolderByName()
                break;
            case 'recipe':
                this.getRecipeImagesFromFolderByName()
                break;
            case 'comp-store':
                this.getCompStoreImagesFromFolderByName()
                break;
        }
    },
    data() {
        return {
            step: 0,
            nextPage: 'Következő',
            prevPage: 'Nincs előző kép',
            // images: [],
            allImages: [],
        }
    },
    methods: {
        // A require.context() build-elésnél fut le, így nem lehet template literalt használni mert az futási időben "adódik át"
        // Ezért kell 3 vagy több függvény...
        getWGImagesFromFolderByName(){
            this.fillImages(require.context(`../../../../../img/wargaming`, true, /\.jpg$/))
        },
        getMeatBallImagesFromFolderByName(){
            const allMeatballImages = [
                'meatball-main-page_z2gqjt',
                'pizza_wp57mc',
                'meal_lpqmay',
                'cart_s1dxdy',
                'paypal_ir1kue',
                'input-admin_rcjs2y',
                'modify_f1ybut'
            ]
            this.fillImages(allMeatballImages)
            console.log(this.allImages.length)
            // this.fillImages(require.context(`../../../../../img/meatball`, true, /\.jpg$/))
        },
        getRecipeImagesFromFolderByName(){
            this.fillImages(require.context(`../../../../../img/recipe`, true, /\.jpg$/))
        },
        getCompStoreImagesFromFolderByName(){
            this.fillImages(require.context(`../../../../../img/comp-store`, true, /\.jpg$/))
        },
        fillImages(imagesNameFromFolder){
            imagesNameFromFolder.forEach(imageName => this.allImages.push(imageName))
            // imagesNameFromFolder.keys().forEach(imgName => this.images.push(imgName.substring(1)))
        },
        increase(){
            if(this.allImages[this.step + 1] !== undefined){
                ++this.step
                if (this.allImages[this.step - 1] !== undefined) {
                    this.prevPage = 'Előző'
                }
            }
            if(this.allImages[this.step + 1] === undefined){
                this.nextPage = 'Nincs több kép'
            }
        },
        decrease(){
            if (this.allImages[this.step - 1] !== undefined) {
                --this.step
                if (this.allImages[this.step + 1] !== undefined) {
                    this.nextPage = 'Következő'
                }
            }
            if(this.allImages[this.step - 1] === undefined){
                this.prevPage = 'Nincs előző kép'
            }
        },
    },
}
</script>
<style lang="scss">
@import '../../../../../sass/inc/portfolio/image_slider.scss';
</style>