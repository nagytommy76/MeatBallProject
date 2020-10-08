<template>
    <div class="card-and-filter">
        <baseFilter
            v-bind:orderByRoute="orderRoute"
            v-bind:byName="byName"
            v-bind:minMaxPrice="minMaxPrice"
        />
         <div class="food_card_container py-2">
            <h1 class="py-1 text-black text-center">Főételek</h1>
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
import baseFilter from '../baseComponents/baseFilter'
import baseCard from '../baseComponents/baseCard'

export default {
    data: () => {
        return {
            foods: {},
            orderRoute: "getMealByOrder",
            byName: "getMealByName",
            minMaxPrice: "getMealMinMaxPrice",
            foodType: "meal",
        }
    },
    components: {
        baseFilter,
        baseCard
    }
}
</script>