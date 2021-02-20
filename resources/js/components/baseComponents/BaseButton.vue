<template>
    <button class="btn" :class="`btn-${buttonClass}`">{{ buttonText }}</button>
</template>
<script>
export default {
    props:{
        buttonClass: {
            type: String,
            required: false,
            default: 'primary'
        },
        buttonText:{
            type: String,
            required: true,
        }
    }
}
</script>