<template>
    <span class="invalid-feedback" role="alert">
        <div v-for="(error, index) in errors" :key="index">
            <strong>{{ error }}</strong>
        </div> 
    </span>
</template>
<script>
export default {
    name: 'ErrorMsg',
    props: {
        errors: {
            type: Array,
            required: false,
        }
    }
}
</script>