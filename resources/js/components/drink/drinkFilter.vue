<template>
    <div class="card-and-filter">
        <baseFilter
            v-bind:orderByRoute="orderRoute"
            v-bind:byName="byName"
            v-bind:minMaxPrice="minMaxPrice"
        />
        <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Üdítők</h1>
            <section class="food_card_content">
                <div v-for="food in foods" :key="food.id">
                    <baseCard
                        :foodType="foodType"
                        :foodId="food.id"
                        :image="food.image.image_path"
                        :foodName="food.name"
                        :foodPrice="food.price"
                        :capacity="food.capacity"
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
            orderRoute: "getDrinksByOrder",
            byName: "getDrinkByName",
            minMaxPrice: "getDrinkMinMaxPrice",
            foodType: "drink",
        }
    },
    components: {
        baseFilter,
        baseCard
    }
}
</script>