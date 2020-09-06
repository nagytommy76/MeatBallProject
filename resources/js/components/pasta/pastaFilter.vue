<template>
        <div class="card-and-filter">
            <baseFilter
                v-bind:orderByRoute="orderRoute"
                v-bind:byName="byName"
                v-bind:minMaxPrice="minMaxPrice"
            />
            <div class="food_card_container py-2">
                 <h1 class="py-1 text-black text-center">Tészták és Roizottók</h1>
                <section class="food_card_content">
                    <div v-for="food in foods" :key="food.id">
                        <baseCard
                            v-bind:foodType="food.type"
                            v-bind:foodId="food.id"
                            v-bind:image="food.image.image_path"
                            v-bind:foodName="food.name"
                            v-bind:foodPrice="food.price"
                            v-bind:ingredients="food.ingredients"                            
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
import baseCard from '../baseComponents/baseCard'
import baseFilter from '../baseComponents/baseFilter'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    name: "pasta-filtering",
    components: {
        baseCard,
        baseFilter,
        Loading
    },
    data: () => {
        return {
            foods: {},
            orderRoute: "getPastaByOrder",
            byName: "getPastaByName",
            minMaxPrice: "getPastaMinMaxPrice",
            foodType: "pastas",
            isLoading: false
        }
    },
}
</script>