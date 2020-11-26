<template>
    <div class="tooltip">
        <slot name="default"></slot>
        <span class="tooltiptext">{{ text }}</span>
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