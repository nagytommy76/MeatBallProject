<template>
    <div>
        <div class="card-and-filter">
            <aside class="filter-container">
                <h2 class="py-1 text-center">Szűrő</h2>
                <label for="order">Rendezés:</label>
                <select class="form-control" name="order" v-model="order" v-on:change="getPastaByOrder">
                    <option value="asc">Ár Növekvő</option>
                    <option value="desc">Ár Csökkenő</option>
                </select>

                 <label for="price">Ár: <span>{{ priceValue }} Ft</span> - <span>{{maxPrice}} Ft</span></label>
                <input class="form-control" type="range" name="price" v-bind:min="minPrice" v-bind:max="maxPrice" step="50" v-on:change="getPastaByOrder" v-model="priceValue">

                <label for="">Étel Neve: </label>
                <input class="form-control" type="text" v-on:keyup="searchByName">
            </aside>
            <div class="food_card_container py-2">
                <h1 class="py-1 text-black text-center">Tészta Ételek</h1>
                <section class="food_card_content">
                    <div v-for="pastas in pasta" :key="pastas.id">
                        <PastaCard
                            v-bind:pastaId="pastas.id"
                            v-bind:image="pastas.image.image_path"
                            v-bind:pastaName="pastas.name"
                            v-bind:pastaPrice="pastas.price"
                            v-bind:ingredients="pastas.ingredients"
                        />
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
import PastaCard from './pastaCard';
export default {
    name: "pasta-filtering",
    components: {
        PastaCard
    },
    data: () => {
        return {
            pasta: {},
            order: 'asc',
            minPrice: 0,
            maxPrice: 10000,
            priceValue: 0,
        }
    },
    created(){
        this.getPrices();
        this.fetchPasta();
    },
    methods: {
        async getPastaByOrder(){
            await fetch('api/getPastaByOrder', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    order: this.order,
                    minPrice: this.minPrice,
                    maxPrice: this.maxPrice
                })
            })
            .then(resp => resp.json())
            .then(result => {
                this.pasta = result.data;
            });
        },
        async fetchPasta(){
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
            });
        },
        async searchByName(){

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