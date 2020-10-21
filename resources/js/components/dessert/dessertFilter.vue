<template>
    <div class="card-and-filter">
        <baseFilter
            v-bind:orderByRoute="orderRoute"
            v-bind:byName="byName"
            v-bind:minMaxPrice="minMaxPrice"
        />
        <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Desszertek</h1>
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
        return{
            foods: {},
            orderRoute: "getDessertByOrder",
            byName: "getDessertByName",
            minMaxPrice: "getDessertMinMaxPrice",
            foodType: "dessert",
        }
    },
    components:{
        baseCard,
        baseFilter
    }
}
</script>