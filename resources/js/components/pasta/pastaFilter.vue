<template>
        <div class="card-and-filter">
            <BaseFilter
                :orderByRoute="orderRoute"
                :byName="byName"
                :minMaxPrice="minMaxPrice"
            />
            <div class="food_card_container">
                 <h1 class="py-1 text-black text-center">Tészták és Roizottók</h1>
                <section class="food_card_content">
                    <div v-for="food in foods" :key="food.id">
                        <BaseCard
                            :foodType="food.type"
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
export default {
    data: () => {
        return {
            foods: {},
            orderRoute: "getPastaByOrder",
            byName: "getPastaByName",
            minMaxPrice: "getPastaMinMaxPrice",
            foodType: "pastas",
        }
    },
}
</script>