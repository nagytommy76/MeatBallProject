<template>
        <div class="card-and-filter">
            <aside class="filter-container">
                <h2 class="py-1 text-center">Szűrő</h2>
                <label for="orderBy">Rendezés:</label>
                <select class="form-control" name="orderBy" v-model="orderBy" v-on:change="getPastaByOrder">
                    <option value="asc">Ár Növekvő</option>
                    <option value="desc">Ár Csökkenő</option>
                </select>

                 <label for="price">Ár: <span>{{ priceValue }} Ft</span> - <span>{{maxPrice}} Ft</span></label>
                <input class="form-control" type="range" name="price" v-bind:min="minPrice" v-bind:max="maxPrice" step="50" v-on:change="getPastaByOrder" v-model="priceValue">

                <label for="">Étel Neve: </label>
                <input class="form-control" type="text" v-on:keyup="searchByName">
            </aside>
            <div class="food_card_container py-2">
                 <h1 class="py-1 text-black text-center">Tészták és Roizottók</h1>
                <section class="food_card_content">
                    <div v-for="pastas in pasta" :key="pastas.id">
                        <PastaCard
                            v-bind:pastaId="pastas.id"
                            v-bind:image="pastas.image.image_path"
                            v-bind:pastaName="pastas.name"
                            v-bind:pastaPrice="pastas.price"
                            v-bind:ingredients="pastas.ingredients"
                            v-bind:foodType="pastas.type"
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
import PastaCard from './pastaCard';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: "pasta-filtering",
    components: {
        PastaCard,
        Loading
    },
    data: () => {
        return {
            pasta: {},
            orderBy: 'asc',
            minPrice: 0,
            maxPrice: 10000,
            priceValue: 0,
            isLoading: false
        }
    },
    created(){
        this.getPrices();
        this.fetchPasta();
    },
    methods: {
        async getPastaByOrder(){
            this.isLoading = true;
            await fetch('api/getPastaByOrder', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    orderBy: this.orderBy,
                    minPrice: this.priceValue,
                    maxPrice: this.maxPrice
                })
            })
            .then(resp => resp.json())
            .then(result => {
                this.pasta = result.data;
                this.isLoading = false;
            });
        },
        async fetchPasta(){
            this.isLoading = true;
            await fetch('api/pastas', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => response.json())
            .then(result => {
                this.pasta = result.data;
                this.isLoading = false;
            });
        },
        async searchByName(event){
            this.isLoading = true;
            await fetch('api/getPastaByName', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: event.target.value
                })
            })
            .then(response => response.json())
            .then(result => {
                this.pasta = result.data
                this.isLoading = false;
            });
        },
        async getPrices(){
            await fetch('api/getPastaMinMaxPrice')
            .then(response => response.json())
            .then(res =>{
                this.priceValue = res.minPrice;
                this.minPrice = res.minPrice;
                this.maxPrice = res.maxPrice;
            })
        }
    },
}
</script>