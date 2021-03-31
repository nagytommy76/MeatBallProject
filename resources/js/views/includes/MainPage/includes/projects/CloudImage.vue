<template>
    <CldImage 
        :publicId="`nagytamas93/${folder}/${image}`"
        :class="className"
        lazy
    >
        <CldTransformation v-if="resize" :width="width" crop="scale" />
    </CldImage>
</template>
<script>
export default {
    props: {
        folder: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        resize:{
            type: Boolean,
            required: false,
            default: false
        },
        width:{
            type: Number,
            required: false,
            default: 200
        },
        className: {
            type: String,
            required: false,
            default: 'thumbnail-image'
        }
    }
}
</script>
<style lang="scss">
.thumbnail-image{
width: 100%;
height: 100%;
    img{
        height: 100%;
        width: 100%;
        box-shadow: 2px 1px 10px #222; 
        object-fit: cover;
        border-radius: 5px;
        cursor: pointer;
    } 
}
</style>