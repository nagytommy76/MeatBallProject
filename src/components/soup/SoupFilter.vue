<template>
    <div class="card-and-filter">
        <BaseFilter
            :orderByRoute="orderRoute"
            :byName="byName"
            :minMaxPrice="minMaxPrice" 
            @set-food="setFood"           
        />
        <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Levesek</h1>
            <section class="food_card_content">
                <div v-for="soup in foods" :key="soup.id">
                    <BaseCard
                        :foodType="foodType"
                        :foodId="soup.id"
                        :image="soup.image.image_path"
                        :foodName="soup.name"
                        :foodPrice="soup.price"
                        :ingredients="soup.ingredients"
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
    name: "SoupFilter",
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