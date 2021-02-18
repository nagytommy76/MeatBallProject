<template>
    <div class="tooltip">
        <slot name="default"></slot>
        <div class="tooltiptext">
            <span>{{ text }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Tooltip',
    props:{
        text:{
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.tooltip{
    position: relative;
    display: inline-block;
    cursor: default;
    .tooltiptext{
        visibility: hidden;
        min-width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -60px;

        opacity: 0;
        transition: opacity .5s;
        &::after{
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: black transparent transparent transparent;
        }
    }
    &:hover .tooltiptext{
        visibility: visible;
        opacity: 1;
    }
}
</style>