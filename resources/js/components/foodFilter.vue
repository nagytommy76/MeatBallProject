<template>
    <div class="card-and-filter">
        <aside class="filter-container">
                <h2 class="py-1 text-center">Étel Szűrő</h2>

                <label for="foodType">Étel:</label>
                <select class="form-control" name="foodType" id="foodType">
                    <option value="pizza">Pizzák</option>
                </select>

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
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            food: {},
            orderBy: 'asc',
            minPrice: 0,
            maxPrice: 10000,
            priceValue: 0,
        }
    },
    methods: {
        getPastaByOrder(){

        },
        searchByName(){

        },
    }
}
</script>