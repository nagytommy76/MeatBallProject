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
        </div>
</template>
<script>
import baseFilter from '../baseComponents/baseFilter'
import baseCard from '../baseComponents/baseCard'

export default {
    name: "pasta-filtering",
    data: () => {
        return {
            foods: {},
            orderRoute: "getPastaByOrder",
            byName: "getPastaByName",
            minMaxPrice: "getPastaMinMaxPrice",
            foodType: "pastas",
        }
    },
    components: {
        baseFilter,
        baseCard
    }
}
</script>