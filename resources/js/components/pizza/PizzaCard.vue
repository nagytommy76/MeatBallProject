<template>
  <div class="food_card">
    <div class="food_card_header">
      <img v-bind:src="'/storage/'+image" alt="Pizza Kép" />
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
        <MoreIngredients />
      </div>

      <div >
        <div v-if="!userLoggedIn">
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
      <button @click="addCart" v-bind:id="pizzaId" class="btn btn-primary">Kosárba!</button>
      <strong class="price">
        Ár:
        <span class="primary-color">{{finalPrice}}</span> Ft
      </strong>
    </div>
  </div>
</template>

<script>
import MoreIngredients from "./MoreIngredients";
import addToCart from '../../helpers/addToCart';

import { mapGetters } from "vuex";

export default {
  name: 'PizzaCard',
  components: {
    MoreIngredients,
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
    };
  },
  computed:{
      ...mapGetters({
          userLoggedIn: 'getUserLoggedIn',
      }),
  },
  methods: {
    loadPlusIngreds(){
      this.moreButton = !this.moreButton;
    },
    async addCart(){
      if(this.userLoggedIn){
        await addToCart.addFoodToCart(this.foodType, this.pizzaId, this.selectedIngreds)
        .then(result => {
            this.$store.commit('setCartItems', result.data);
            this.selectedIngreds = [];
            this.finalPrice = this.pizzaPrice;
            this.hideSuccessMsg();
            if(this.moreButton){
              this.moreButton = !this.moreButton;
            }
        });  
      }else{
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