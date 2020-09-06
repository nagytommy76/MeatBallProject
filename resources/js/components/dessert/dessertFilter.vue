<template>
    <div class="card-and-filter">
        <baseFilter
            v-bind:orderByRoute="orderRoute"
            v-bind:byName="byName"
            v-bind:minMaxPrice="minMaxPrice"
        />
        <div class="food_card_container py-2">
            <h1 class="py-1 text-black text-center">Levesek</h1>
            <section class="food_card_content">
                <div v-for="food in foods" :key="food.id">
                    <baseCard
                        v-bind:foodType="foodType"
                        v-bind:foodId="food.id"
                        v-bind:image="food.image.image_path"
                        v-bind:foodName="food.name"
                        v-bind:foodPrice="food.price"
                        v-bind:ingredients="food.ingredients"
                    />
                </div>
            </section>
        </div>

    </div>
</template>
<script>
import baseCard from '../baseComponents/baseCard'
import baseFilter from '../baseComponents/baseFilter'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import loadData from '../../helpers/loadData'
export default {
    components: {
        baseCard,
        baseFilter,
        Loading,
    },
    data: () => {
        return{
            foods: {},
            orderRoute: "getDessertByOrder",
            byName: "getDessertByName",
            minMaxPrice: "getDessertMinMaxPrice",
            isLoading: false,
            foodType: "dessert",
        }
    },
}
</script>