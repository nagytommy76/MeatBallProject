<template>
    <div class="card-and-filter">
        <BaseFilter
            :orderByRoute="orderRoute"
            :byName="byName"
            :minMaxPrice="minMaxPrice" 
            :foodType="'pizzas'"
            @set-food="setFood"
        />
        <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Pizzák</h1>
            <section class="food_card_content">                
            <div v-for="pizza in foods" :key="pizza.id">
                <PizzaCard  
                    :pizzaId="pizza.id"
                    :image="pizza.image.image_path"
                    :pizzaName="pizza.name"
                    :ingredients="pizza.ingredients"
                    :pizzaPrice="pizza.price"
                    :moreIngreds="ingreds"
                />
            </div>            
            </section>            
        </div>
    </div>
</template>
<script>
import PizzaCard from './PizzaCard';
import setFood from '../../mixins/setFood'
import axios from 'axios'
export default {
    components: {
        PizzaCard,
    },
    mixins: [setFood],
    data: () => {
        return {
            foods: [],
            orderRoute: "getPizzaByOrder",
            byName: "searchPizzaByName",
            minMaxPrice: "getMinMaxPrice",
            ingreds: [],
        }
    },
    created(){
        this.fetchIngredients();
    },
    methods: {
        async fetchIngredients(){
            // console.log(this.$http)
            await axios.get('getPlusIngreds')
            .then(ingredients => {
                this.ingreds = ingredients.data.data
            })
        },
    }
}
</script>