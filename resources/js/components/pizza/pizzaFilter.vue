<template>
    <div class="card-and-filter">
        <baseFilter
            v-bind:orderByRoute="orderRoute"
            v-bind:byName="byName"
            v-bind:minMaxPrice="minMaxPrice" 
        />
        <div class="food_card_container">
            <h1 class="py-1 text-black text-center">Pizzák</h1>
            <section class="food_card_content">                
            <div v-for="pizza in foods" :key="pizza.id">
                <pizzaCard  
                    v-bind:pizzaId="pizza.id"
                    v-bind:image="pizza.image.image_path"
                    v-bind:pizzaName="pizza.name"
                    v-bind:ingredients="pizza.ingredients"
                    v-bind:pizzaPrice="pizza.price"
                />
            </div>            
            </section>            
        </div>
    </div>
</template>

<script>
import baseFilter from '../baseComponents/baseFilter'
import pizzaCard from './pizza_card';
export default {
    name: "Pizza",
    components: {
        pizzaCard,
        baseFilter
    },
    data: () => {
        return {
            foods: [],
            orderRoute: "getPizzaByOrder",
            byName: "searchPizzaByName",
            minMaxPrice: "getMinMaxPrice",
            ingreds: [],
            foodType: "pizzas",
        }
    },
    created(){
        this.fetchIngredients();
    },
    methods: {
        async fetchIngredients(){
            await axios.get('getPlusIngreds')
            .then(ingredients => {
                this.ingreds = ingredients.data.data
            })
        },
    }
}
</script>