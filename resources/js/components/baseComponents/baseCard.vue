<template>
    <div class="food_card">
        <div class="food_card_header">
            <img v-bind:src="'storage/'+image" alt="Leves Kép" />
        </div>
        <div class="food_card_inner">
            <h1 class="food_card_heading text-center">{{foodName}}</h1>
            <h3>Összetevők:</h3>

            <div class="ingredients">
                <span>({{ingredients}})</span>
            </div>   
            <!--  == 'Unauthorized' || loggedIn == 'Unauthenticated' -->
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
        <div class="food_card_footer">
        <!-- <form> -->
            <button @click="addToCart" v-bind:id="foodId" class="btn btn-primary">Kosárba!</button>
            <strong class="price">
                Ár:
                <span class="primary-color">{{finalPrice}}</span> Ft
            </strong>
        </div>
   </div>
</template>
<script>
import addToCart from '../../helpers/addToCart'
export default {
    data () {
        return{
            addedToCart: false,
            finalPrice: this.foodPrice,
            selectedIngreds: [],
            // loggedIn: this.$parent.$parent.$parent.cartItems.message,
            loggedIn: false,
        }
    },
    props: {
        foodType: String,
        foodId: Number,
        image: String,
        foodName: String,
        foodPrice: Number,
        ingredients: String,
    },
    methods: {
        async addToCart(){
            if(this.$parent.$parent.$parent.accessToken != null){
                await addToCart.addFoodToCart(this.foodType, this.foodId, this.$parent.$parent.$parent.accessToken)
                .then(result => {
                    this.$parent.$parent.$store.commit('setCartItems', result);
                    this.selectedIngreds = [];
                    this.finalPrice = this.foodPrice;
                    this.loggedIn = !this.loggedIn
                    this.hideSuccessMsg();
                })
                .catch(error => console.log(error)) 
            }else{
                // this.loggedIn = !this.loggedIn
                this.hideSuccessMsg();
            }
            
        },
        hideSuccessMsg(){
            this.addedToCart = !this.addedToCart;
            setTimeout(() => {this.addedToCart = !this.addedToCart}, 3000);
        },
    },
}
</script>