<template>
    <div>
        <div class="navigation">
            <router-link to="/pizza"><h4>Pizzák</h4></router-link>
            <router-link to="/pasta"><h4>Tészták és Risottók</h4></router-link>
            <h4>Teszt Link</h4>
            <h4>Teszt Link</h4>
        </div>
        

        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
           
        }
    },
    methods: {
       
    }
}
</script>