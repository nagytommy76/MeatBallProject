<template>
    <div v-bind:class="`alert alert-${className}`">
        <p>{{ Msg }}</p>
    </div>
</template>
<script>
export default {
    name: 'Alert',
    props:{
        className: String,
        Msg: String,
    },
}
</script>