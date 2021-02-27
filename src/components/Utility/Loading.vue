<template>
    <Loading
        :active="isLoading"
        :color="'#ffae00'"
        :height="110"
        :width="110"
    ></Loading>
</template>
<script>
import Loading from 'vue3-loading-overlay';
export default {
    components:{
        Loading,
    },
    props: {
        isLoading: Boolean
    }
}
</script>
<style lang="scss" scoped>
.vld-shown {
    overflow: hidden;
}

.vld-overlay {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    align-items: center;
    display: none;
    justify-content: center;
    overflow: hidden;
    z-index: 9999;
}

.vld-overlay.is-active {
    display: flex;
}

.vld-overlay.is-full-page {
    z-index: 9999;
    position: fixed;
}

.vld-overlay .vld-background {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background: #222;
    opacity: 0.1;
}

.vld-overlay .vld-icon, .vld-parent {
    position: relative;
}
</style>