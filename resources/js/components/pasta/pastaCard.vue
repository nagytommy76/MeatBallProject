<template>
    <div class="food_card">
        <div class="food_card_header">
            <img v-bind:src="'storage/'+image" alt="Pizza Kép" />
        </div>
        <div class="food_card_inner">
            <h1 class="food_card_heading text-center">{{pastaName}}</h1>
            <h3>Összetevők:</h3>
            <div class="ingredients">
                ( <span v-for="(ingred, index) in ingredients" :key="index">
                {{ ingred }}, 
            </span> )
            </div>            
            <button class="btn btn-primary">Kell ez a gomb?</button>
        </div>
        <div class="food_card_footer">
        <!-- <form> -->
        <button v-bind:id="pastaId" class="btn btn-primary">Kosárba!</button>
        <strong class="price">
            Ár:
            <span class="primary-color">{{finalPrice}}</span> Ft
        </strong>
    </div>
   </div>
</template>
<script>
export default {
    data () {
        return{
            foodType: 'pasta',
            addedToCart: false,
            finalPrice: this.pastaPrice,
        }
    },
    props: {
        pastaId: Number,
        image: String,
        pastaName: String,
        pastaPrice: Number,
        ingredients: Array,
    },
}
</script>