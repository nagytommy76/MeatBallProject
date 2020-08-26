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
        <div class="moreIngredients">
          <div v-for="ing in this.$parent.ingreds" :key="ing.ingred_id">
            <label>
            <input @click="select" type="checkbox" name="plusIngreds[]" v-bind:id="ing.ingred_id" v-bind:value="ing.price">
            
            {{ing.ingredient_name}} <span class="primary-color">({{ ing.price }}) </span> Ft</label>
        
          </div>
        </div>
      </div>
      <div >
        <div v-if="loggedIn == 'Unauthorized' || loggedIn == 'Unauthenticated'">
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
      loggedIn: this.$parent.$parent.$parent.cartItems.message,
    };
  },
  created() {

  },
  computed: {
      
  },
  methods: {
    loadPlusIngreds(){
      this.moreButton = !this.moreButton;
      if(!this.moreButton){
        this.finalPrice = this.pizzaPrice;
        this.selectedIngreds = [];
      }
    },
    select(e){        
        let ingredId = e.target.id;
        let ingredPrice = parseInt(e.target.value);

        if(e.target.checked){
          this.finalPrice += ingredPrice;
          this.selectedIngreds.push(ingredId)
        }else{
          this.finalPrice -= ingredPrice;
          const found = this.selectedIngreds.findIndex(item => item == ingredId)
          
          this.selectedIngreds.splice(found,1);
        }

    },
    async addCart(){
        await fetch(`api/addFoodToCart`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + this.$parent.$parent.accessToken
            },
            body: JSON.stringify({
              foodType: this.foodType,
              foodId: this.pizzaId,
              plusIngreds: this.selectedIngreds,
            }),
          }
        )
        .then(response => response.json())
        .then(result => {
            this.$parent.$parent.$store.commit('setCartItems', result);
            this.selectedIngreds = [];
            this.finalPrice = this.pizzaPrice;
            
            this.hideSuccessMsg();
            setTimeout(this.hideSuccessMsg, 3000);
            if(this.moreButton){
              this.moreButton = !this.moreButton;
            }
        });      
    },
    hideSuccessMsg(){
      this.addedToCart = !this.addedToCart;
    },
  }
};
</script>