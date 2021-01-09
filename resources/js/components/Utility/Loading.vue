<template>
    <Loading
        :active="isLoading"
        :color="'#ffae00'"
        :height="110"
        :width="110"
    ></Loading>
</template>
<script>
import Loading from 'vue-loading-overlay';
export default {
    components:{
        Loading,
    },
    props: {
        isLoading: Boolean
    }
}
</script>