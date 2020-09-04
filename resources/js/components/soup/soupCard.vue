<template>
    <div class="food_card">
        <div class="food_card_header">
            <img v-bind:src="'storage/'+image" alt="Leves Kép" />
        </div>
        <div class="food_card_inner">
            <h1 class="food_card_heading text-center">{{soupName}}</h1>
            <h3>Összetevők:</h3>

            <div class="ingredients">
                <span>({{ingredients}})</span>
            </div>   

            <div v-if="loggedIn == 'Unauthorized'">
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
        <div class="food_card_footer">
        <!-- <form> -->
        <button @click="addToCart" v-bind:id="soupId" class="btn btn-primary">Kosárba!</button>
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
            addedToCart: false,
            finalPrice: this.soupPrice,
            selectedIngreds: [],
            loggedIn: this.$parent.$parent.$parent.cartItems.message,
        }
    },
    props: {
        soupId: Number,
        image: String,
        soupName: String,
        soupPrice: Number,
        ingredients: String,
    },
    methods: {
        async addToCart(){
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
                    foodId: this.soupId,
                    plusIngreds: this.selectedIngreds,
                }),
            }
        )
            .then(response => response.json())
            .then(result => {
                this.$parent.$parent.$store.commit('setCartItems', result);
                this.selectedIngreds = [];
                this.finalPrice = this.pastaPrice;

                this.hideSuccessMsg();
                setTimeout(this.hideSuccessMsg, 3000);
            }); 
        },
        hideSuccessMsg(){
            this.addedToCart = !this.addedToCart;
        },
    },
}
</script>