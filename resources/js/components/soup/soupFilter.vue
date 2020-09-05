<template>
    <div class="card-and-filter">
            <aside class="filter-container">
                <h2 class="py-1 text-center">Szűrő</h2>
                <label for="orderBy">Rendezés:</label>
                <select class="form-control" name="orderBy" v-model="orderBy" v-on:change="getSoupByOrder">
                    <option value="asc">Ár Növekvő</option>
                    <option value="desc">Ár Csökkenő</option>
                </select>

                 <label for="price">Ár: <span>{{ priceValue }} Ft</span> - <span>{{maxPrice}} Ft</span></label>
                <input class="form-control" type="range" name="price" v-bind:min="minPrice" v-bind:max="maxPrice" step="30" v-on:change="getSoupByOrder" v-model="priceValue">

                <label for="">Étel Neve: </label>
                <input class="form-control" type="text" v-on:keyup="searchByName">
            </aside>
            <div class="food_card_container py-2">
                 <h1 class="py-1 text-black text-center">Levesek</h1>
                <section class="food_card_content">
                    <div v-for="soup in soups" :key="soup.id">
                        <SoupCard
                            v-bind:soupId="soup.id"
                            v-bind:image="soup.image.image_path"
                            v-bind:soupName="soup.name"
                            v-bind:soupPrice="soup.price"
                            v-bind:ingredients="soup.ingredients"
                        />
                    </div>
                </section>
            </div>
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
import SoupCard from './soupCard';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import loadData from '../../helpers/loadData'
export default {
    name: "soup-filtering",
    components: {
        SoupCard,
        Loading,
    },
    data: () => {
        return{
            soups: {},
            orderBy: 'asc',
            minPrice: 0,
            maxPrice: 10000,
            priceValue: 0,
            isLoading: false
        }
    },
    created(){
        this.fetchSoup();
        this.getMinMaxPrice();
    },
    methods: {
        async fetchSoup(){
            this.isLoading = true;
            await loadData.fetchData('soup')
            .then(result => {
                this.soups = result.data;
                this.isLoading = false;
            });
        },
        async getSoupByOrder(){
            this.isLoading = true;
            await loadData.getFoodByOrder('getSoupByOrder', this.orderBy, this.priceValue, this.maxPrice)
            .then(result => {
                this.soups = result.data;
                this.isLoading = false;
            });
        },
        async searchByName(){
            this.isLoading = true;
            await loadData.searchFoodByName('getSoupByName', event.target.value)
            .then(result => {
                this.soups = result.data
                this.isLoading = false;
            });
        },
        async getMinMaxPrice(){
            await loadData.getMinMaxPrice('getSoupMinMaxPrice')
            .then(result => {
                this.priceValue = result.minPrice;
                this.minPrice = result.minPrice;
                this.maxPrice = result.maxPrice;
            });
        }
    },
}
</script>