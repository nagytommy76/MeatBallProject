<template>
    <aside class="filter-container">
        <h2 class="py-1 text-center">Szűrő</h2>
        <label for="orderBy">Rendezés:</label>
        <select class="form-control" name="orderBy" v-model="orderBy" @change="getFoodByOrder">
            <option value="asc">Ár Növekvő</option>
            <option value="desc">Ár Csökkenő</option>
        </select>
        <label for="price">Ár: <span>{{ priceValue }} Ft</span> - <span>{{maxPrice}} Ft</span></label>
        <input class="form-control" type="range" name="price" v-bind:min="minPrice" v-bind:max="maxPrice" step="10" v-on:change="getFoodByOrder" v-model="priceValue">

        <label for="">Étel Neve: </label>
        <input class="form-control" type="text" v-on:keyup="searchByName">
        <Loading 
            :isLoading="isLoading"
        />
        <a class="btn-up" href="#top"><i class="fas fa-arrow-circle-up fa-3x"></i></a>
    </aside>
</template>
<script>
import loadData from '../../helpers/loadData'
export default {
    data: () =>{
        return{
            priceValue: 0,
            maxPrice: 10000,
            minPrice: 0,
            orderBy: 'asc',
            isLoading: false,
        }
    },
    created() {
        this.getMinMaxPrice();
        this.fetchFoods();
    },
    props:{
        orderByRoute: String,
        byName: String,
        minMaxPrice: String,
    },
    methods: {
        async fetchFoods(){
            this.isLoading = true;
            await loadData.fetchData(this.$parent.foodType)
            .then(result => {
                this.$emit('set-food', result.data.data)
                this.isLoading = false;
            });
        },
        async getFoodByOrder(){
            this.isLoading = true;
            await loadData.getFoodByOrder(this.orderByRoute, this.orderBy, this.priceValue, this.maxPrice)
            .then(result => {
                this.$emit('set-food', result.data.data)
                this.isLoading = false;
            });
        },
        async searchByName(){
            this.isLoading = true;
            await loadData.searchFoodByName(this.byName, event.target.value, this.orderBy, this.priceValue, this.maxPrice)
            .then(result => {
                this.$emit('set-food', result.data.data)
                this.isLoading = false;
            });
        },
        async getMinMaxPrice(){
            await loadData.getMinMaxPrice(this.minMaxPrice)
            .then(result => {
                this.priceValue = result.data.minPrice;
                this.minPrice = result.data.minPrice;
                this.maxPrice = result.data.maxPrice;
            });
        }
    },
}
</script>
<style lang="scss">
@import '../../../sass/inc/food_card';
</style>