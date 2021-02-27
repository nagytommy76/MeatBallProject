<template>
    <div class="card-and-filter">
        <BaseFilter
            :orderByRoute="orderRoute"
            :byName="byName"
            :minMaxPrice="minMaxPrice"
            :foodType="'meal'"
            @set-food="setFood"
        />
         <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Főételek</h1>
            <section class="food_card_content">
                <div v-for="food in foods" :key="food.id">
                    <BaseCard
                        :foodType="'meal'"
                        :foodId="food.id"
                        :image="food.image.image_path"
                        :foodName="food.name"
                        :foodPrice="food.price"
                        :ingredients="food.ingredients"                            
                    />
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import setFood from '../../mixins/setFood'
export default {
    mixins: [setFood],
    data: () => {
        return {
            foods: {},
            orderRoute: "getMealByOrder",
            byName: "getMealByName",
            minMaxPrice: "getMealMinMaxPrice",
        }
    },
}
</script>