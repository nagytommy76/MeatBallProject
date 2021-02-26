<template>
    <div class="card-and-filter">
        <BaseFilter
            :orderByRoute="orderRoute"
            :byName="byName"
            :minMaxPrice="minMaxPrice"
            @set-food="setFood"
        />
        <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Desszertek</h1>
            <section class="food_card_content">
                <div v-for="food in foods" :key="food.id">
                    <BaseCard
                        :foodType="foodType"
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
        return{
            foods: [],
            orderRoute: "getDessertByOrder",
            byName: "getDessertByName",
            minMaxPrice: "getDessertMinMaxPrice",
            foodType: "dessert",
        }
    },
}
</script>