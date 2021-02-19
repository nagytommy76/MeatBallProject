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
          <BaseButton @click.native="loadPlusIngreds" :buttonText="'További Feltétek'"/>
          <MoreIngredients 
            v-if="moreButton"
            :moreIngreds="moreIngreds"
          />
      <div >
        <div v-if="!userLoggedIn">
          <Alert v-if="addedToCart" :Msg="'Kérem jelentkezzen be!'"/>
        </div>
        <div v-else>
          <Alert v-if="addedToCart" :className="'success'" :Msg="'A termék a kosárban'"/>
        </div>
      </div>
    </div>
    <div class="food_card_footer">
      <BaseButton @click.native="addCart" :buttonText="'Kosárba!'"/>
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
  components: {
    MoreIngredients
  },
  props: {
    pizzaId: Number,
    image: String,
    pizzaName: String,
    ingredients: Array,
    pizzaPrice: Number,
    moreIngreds: Array
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
      console.log('csocsi')
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