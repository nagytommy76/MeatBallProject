<template>
    <router-link :to="{name: routeName}" :class="className">
        <slot name="default"></slot>
       {{ menuName }}
    </router-link>
</template>
<script>
export default {
    props:{
        menuName: String,
        className: {
            type: String,
            required: false,
            default: "dropdown-menu-item"
        },
        routeName: String,
    },
}
</script>