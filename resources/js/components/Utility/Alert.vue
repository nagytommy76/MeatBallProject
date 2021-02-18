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
<style lang="scss" scoped>
.alert{
    width: 85%;
    margin: .3rem auto .3rem auto;
    text-align: center;
    padding: .75rem;
    border-radius: 10px;
    color: black;

    &-success{
        background: #76C341;
    }

    &-danger{
        color: white;
        background: #B90000;
    }
}
</style>