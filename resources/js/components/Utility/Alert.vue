<template>
    <div v-bind:class="`alert alert-${className}`">
        <p>{{ Msg }}</p>
    </div>
</template>
<script>
export default {
    name: 'Alert',
    props:{
        className:{
            type: String,
            default: 'danger',
            required: false,
        },
        Msg: String,
    },
}
</script>