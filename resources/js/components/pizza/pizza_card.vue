<template>
  <div class="food_card">
    <div class="food_card_header">
      <img v-bind:src="'storage/'+image" alt="Pizza Kép" />
    </div>
    <div class="food_card_inner">
      <h1 class="food_card_heading text-center">{{ pizzaName }}</h1>
      <h3>Feltétek:</h3>
      <div class="ingredients">
        <span v-for="ingred in ingredients" v-bind:key="ingred.id">
          <span>{{ ingred.ingredient }}, </span>
        </span>
      </div>
      <button
        @click="loadPlusIngreds"
        class="btn btn-primary"
      >További Feltétek</button>

      <div v-if="moreButton">
        <moreIngredients></moreIngredients>
      </div>

      <div >
        <div v-if="!loggedIn">
          <div class="alert alert-danger" v-if="addedToCart">
            <p>Kérem jelentkezzen be!</p>
          </div>
        </div>
        <div v-else>
          <div class="alert alert-success" v-if="addedToCart">
            <p>A termék a kosárban</p>
          </div>
        </div>
      </div>
    </div>
    <div class="food_card_footer">
      <!-- <form> -->
      <button @click="addCart" v-bind:id="pizzaId" class="btn btn-primary">Kosárba!</button>
      <strong class="price">
        Ár:
        <span class="primary-color">{{finalPrice}}</span> Ft
      </strong>
    </div>
  </div>
</template>

<script>
import moreIngredients from "./moreIngredients";
import addToCart from '../../helpers/addToCart';

export default {
  components: {
    moreIngredients,
  },
  props: {
    pizzaId: Number,
    image: String,
    pizzaName: String,
    ingredients: Array,
    pizzaPrice: Number,
  },
  data() {
    return {
      moreButton: false,
      selectedIngreds: [],
      finalPrice: this.pizzaPrice,
      foodType: 'pizza',
      addedToCart: false,
      loggedIn: false,
    };
  },
  methods: {
    loadPlusIngreds(){
      this.moreButton = !this.moreButton;
    },
    async addCart(){
      if(this.$parent.$parent.$parent.accessToken != null){
        await addToCart.addFoodToCart(this.foodType, this.pizzaId, this.$parent.$parent.$parent.accessToken, this.selectedIngreds)
        .then(result => {
            this.$parent.$parent.$store.commit('setCartItems', result);
            this.selectedIngreds = [];
            this.finalPrice = this.pizzaPrice;
            this.loggedIn = !this.loggedIn
            this.hideSuccessMsg();
            if(this.moreButton){
              this.moreButton = !this.moreButton;
            }
        });  
      }else{
        // this.loggedIn = !this.loggedIn
        this.hideSuccessMsg();
      }
    },
    hideSuccessMsg(){
        this.addedToCart = !this.addedToCart;
        setTimeout(() => {this.addedToCart = !this.addedToCart}, 3000);
    },
  }
};
</script>