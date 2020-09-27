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
                <div v-for="soup in foods" :key="soup.id">
                    <baseCard
                        v-bind:foodType="foodType"
                        v-bind:foodId="soup.id"
                        v-bind:image="soup.image.image_path"
                        v-bind:foodName="soup.name"
                        v-bind:foodPrice="soup.price"
                        v-bind:ingredients="soup.ingredients"
                    />
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import baseCard from '../baseComponents/baseCard'
import baseFilter from '../baseComponents/baseFilter'

import loadData from '../../helpers/loadData'
export default {
    name: "soup-filtering",
    components: {
        baseCard,
        baseFilter,
    },
    data: () => {
        return{
            foods: {},
            orderRoute: "getSoupByOrder",
            byName: "getSoupByName",
            minMaxPrice: "getSoupMinMaxPrice",
            isLoading: false,
            foodType: "soup",
        }
    },
}
</script>