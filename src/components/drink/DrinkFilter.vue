<template>
    <div class="card-and-filter">
        <BaseFilter
            :orderByRoute="orderRoute"
            :byName="byName"
            :minMaxPrice="minMaxPrice"
            @set-food="setFood"
        />
        <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Üdítők</h1>
            <section class="food_card_content">
                <div v-for="food in foods" :key="food.id">
                    <BaseCard
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
import setFood from '../../mixins/setFood'
export default {
    mixins: [setFood],
    data: () => {
        return{
            foods: {},
            orderRoute: "getDrinksByOrder",
            byName: "getDrinkByName",
            minMaxPrice: "getDrinkMinMaxPrice",
            foodType: "drink",
        }
    },
}
</script>