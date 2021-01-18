<template>
    <div class="image-slider">
        <span @click="$emit('close')" class="image-close"><i class="far fa-times-circle fa-2x"></i></span>
        <transition name="slide-image">
            <div class="img-container" v-for="nth in [step]" :key="nth">
                <img :src="`/images${images[nth]}`" >        
            </div>
        </transition>
        <div class="arrow-right" @click="increase">
            <Tooltip :text="nextPage">
                <i class="fas fa-arrow-right fa-3x"></i>
            </Tooltip>
        </div>

        <div class="arrow-left" @click="decrease">
            <Tooltip :text="prevPage">
                <i class="fas fa-arrow-left fa-3x"></i>
            </Tooltip>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imgFolderName: String,
    },
    mounted(){
        switch (this.imgFolderName) {
            case 'wargaming':
                this.getWGImagesFromFolderByName()
                break;
            case 'meatball':
                this.getMeatBallImagesFromFolderByName()
                break;
        }
    },
    data() {
        return {
            step: 0,
            nextPage: 'Következő',
            prevPage: 'Nincs előző kép',
            images: [],
        }
    },
    methods: {
        // A require.context() build-elésnél fut le, így nem lehet template literalt használni mert az futási időben "adódik át"
        getWGImagesFromFolderByName(){
            this.fillImages(require.context(`../../../../../img/wargaming`, true, /\.jpg$/))
        },
        getMeatBallImagesFromFolderByName(){
            this.fillImages(require.context(`../../../../../img/meatball`, true, /\.jpg$/))
        },
        fillImages(imagesNameFromFolder){
            imagesNameFromFolder.keys().forEach(imgName => this.images.push(imgName.substring(1)))
        },
        increase(){
            if(this.images[this.step + 1] !== undefined){
                ++this.step
                if (this.images[this.step - 1] !== undefined) {
                    this.prevPage = 'Előző'
                }
            }
            if(this.images[this.step + 1] === undefined){
                this.nextPage = 'Nincs több kép'
            }
        },
        decrease(){
            if (this.images[this.step - 1] !== undefined) {
                --this.step
                if (this.images[this.step + 1] !== undefined) {
                    this.nextPage = 'Következő'
                }
            }
            if(this.images[this.step - 1] === undefined){
                this.prevPage = 'Nincs előző kép'
            }
        },
    },
}
</script>