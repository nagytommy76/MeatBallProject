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
            <h1 class="py-1 text-center">Pizzák</h1>
            <section class="food_card_content">
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
export default {
    name: "Filtering",
    components: {
        pizzaCard
    },
    props:{
        
    },
    data: () => {
        return {
            pizzas: [],
            order: 'asc',
            minPrice: 0,
            maxPrice: 10000,
            priceValue: 0,
            ingreds: [],
        }
    },
    computed: {
        
    },
    created(){
        this.fetchPizza();
        this.getPrices();
        this.fetchIngredients();
    },
    methods: {
        async fetchPizza(){
            await fetch('api/pizzas')
            .then(resp => resp.json())
            .then(res => {
                this.pizzas = res.data;
            });
        },
        async getPizzaByOrder(event){
            await fetch(`api/getPizzaByOrder?orderBy=${this.order}&minPrice=${this.priceValue}&maxPrice=${this.maxPrice}`)
            .then(resp => resp.json())
            .then(res => {
                this.pizzas = res.data;
            });
        },
        async searchByName(e){
            let pizzaName = e.target.value;
            await fetch(`api/searchPizzaByName?name=${pizzaName}`)
            .then(respons => respons.json())
            .then(res => {
                this.pizzas = res.data;
            })
        },
        async getPrices(){
            await fetch('api/getMinMaxPrice')
            .then(response => response.json())
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