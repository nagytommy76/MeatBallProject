<template>
    <div>
        <Loading
            :active="isLoading"
            :opacity=0
            color="#00DC00"
            :height=130
            :width=130
        ></Loading>
    </div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    components:{
        Loading,
    },
    props: {
        isLoading: Boolean
    }
}
</script>