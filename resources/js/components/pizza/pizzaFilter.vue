<template>
    <div class="card-and-filter">
        <aside class="filter-container">
            <h2 class="py-1 text-center">Szűrő</h2>
            <label for="order">Rendezés:</label>
            <select class="form-control" name="order" v-model="order" v-on:change="getPizzaByOrder">
                <option value="asc">Ár Növekvő</option>
                <option value="desc">Ár Csökkenő</option>
            </select>

            <label for="price">Ár: <span>{{ priceValue }} Ft</span> - <span>{{maxPrice}} Ft</span></label>
            <input class="form-control" type="range" name="price" v-bind:min="minPrice" v-bind:max="maxPrice" step="50" v-on:change="getPizzaByOrder" v-model="priceValue">

            <label for="">Pizza Neve: </label>
            <input class="form-control" type="text" v-on:keyup="searchByName">
        </aside>
        
        <!-- PIZZAS -->
        
        <div class="food_card_container py-2">
            <h1 class="py-1 text-black text-center">Pizzák</h1>
            <section class="food_card_content">
                <Loading
                :active="isLoading"
                :opacity=0
                color="#00DC00"
                :height=130
                :width=130
                ></Loading>
            <div v-for="pizza in pizzas" :key="pizza.id">
                <pizzaCard  
                    v-bind:pizzaId="pizza.id"
                    v-bind:image="pizza.image_path"
                    v-bind:pizzaName="pizza.name"
                    v-bind:ingredients="pizza.ingredients"
                    v-bind:pizzaPrice="pizza.price"
                />
            </div>            
            </section>            
        </div>
         
    </div>
</template>

<script>
import pizzaCard from './pizza_card';
import loadData from '../../helpers/loadData'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: "Filtering",
    components: {
        pizzaCard,
        Loading
    },
    data: () => {
        return {
            pizzas: [],
            order: 'asc',
            minPrice: 0,
            maxPrice: 10000,
            priceValue: 0,
            ingreds: [],
            isLoading: false,
        }
    },
    created(){
        this.fetchPizza();
        this.getPrices();
        this.fetchIngredients();
    },
    methods: {
        async fetchPizza(){
            this.isLoading = true;
            await loadData.fetchData('pizzas')
            .then(res => {
                this.pizzas = res.data;
                this.isLoading = false
            });
        },
        async getPizzaByOrder(event){
            this.isLoading = true;
            await loadData.getFoodByOrder('getPizzaByOrder', this.order, this.priceValue, this.maxPrice)
            .then(res => {
                this.pizzas = res.data;
                this.isLoading = false;
            });
        },
        async searchByName(e){
            this.isLoading = true;
            await loadData.searchFoodByName('searchPizzaByName', e.target.value)
            .then(res => {
                this.pizzas = res.data;
                this.isLoading = false;
            })
        },
        async getPrices(){
            await loadData.getMinMaxPrice('getMinMaxPrice')
            .then(res =>{
                this.priceValue = res.minPrice;
                this.minPrice = res.minPrice;
                this.maxPrice = res.maxPrice;
            })
        },
        async fetchIngredients(){
            await fetch('api/getPlusIngreds')
            .then(resp => resp.json())
            .then(res => {
                this.ingreds = res.data;
            })
        },
    }
}
</script>