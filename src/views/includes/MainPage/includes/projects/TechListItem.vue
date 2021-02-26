<template>
     <li>
        <p>{{ title }}</p>
        <Tooltip v-if="isTooltip" :text="tooltipTitle">
            <slot></slot>
        </Tooltip>
    </li>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            required: true,
        },
        isTooltip:{
            type: Boolean,
            required: false,
            default: true
        },
        tooltipTitle:{
            type: String,
            required: false
        }
    },
}
</script>
<style lang="scss" scoped>
// @import '../../../../../../sass/variables.scss';
li{
    padding: .3rem;
    margin: 0 .7rem .7rem 0;
    min-width: 100px;
    text-align: right;
    background-color: $primary;
    border-left: 8px solid #d37f00;
    border-radius:0  15px 15px 0;
    box-shadow: 2px 2px 10px #777;
    p,a{
        margin: .3em;
        font-weight: 600;
    }
    a{
        cursor: pointer;
        color: $dark;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>