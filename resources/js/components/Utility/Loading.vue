<template>
    <Loading
        :active="isLoading"
    ></Loading>
</template>
<script>
import 'vue-loading-overlay/dist/vue-loading.css';
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