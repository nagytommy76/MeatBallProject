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