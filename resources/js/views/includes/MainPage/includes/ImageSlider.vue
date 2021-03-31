<template>
    <div class="image-slider">
        <span @click="$emit('close')" class="image-close"><font-awesome :icon="['far', 'times-circle']" size="2x"/></span>
        <transition v-if="!singleImage" name="slide-image">
            <CloudImage 
                v-for="nth in [step]" :key="nth"
                @click.native="$emit('close')"
                :folder="imgFolderName"
                :image="allImages[nth]"
                :className="'img-container'"
            />
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
            case 'Wargaming':
                this.getWGImagesFromFolderByName()
                break;
            case 'Meatball':
                this.getMeatBallImagesFromFolderByName()
                break;
            case 'Recipe finder':
                this.getRecipeImagesFromFolderByName()
                break;
            case 'PCBoltMVC':
                this.getCompStoreImagesFromFolderByName()
                break;
        }
    },
    data() {
        return {
            step: 0,
            nextPage: 'Következő',
            prevPage: 'Nincs előző kép',
            allImages: [],
        }
    },
    methods: {
        // A require.context() build-elésnél fut le, így nem lehet template literalt használni mert az futási időben "adódik át"
        // Ezért kell 3 vagy több függvény...
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
        },
        getWGImagesFromFolderByName(){
            const allWGImages = ['search_evfww8','modal_moxvgh']
            this.fillImages(allWGImages)
        },
        getRecipeImagesFromFolderByName(){
            const allRecipeImages = [
                'Main-page_a9xjav',
                'details_id7qdm',
                'details-nutrients_dksgcr',
                'ingredient-nutrients_ywfi0v',
                '404_oe27fc'
            ]
            this.fillImages(allRecipeImages)
        },
        getCompStoreImagesFromFolderByName(){
            const allCompStoreImages = [
                'intro_ccseyv',
                'products_ni1ady',
                'search_ejkhj0',
                'order_bljr98',
                'last-orders_pis2fs',
                'szamla_gekaid'
            ]
            this.fillImages(allCompStoreImages)
        },
        fillImages(imagesNameFromFolder){
            imagesNameFromFolder.forEach(imageName => this.allImages.push(imageName))
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