<template>
    <div class="food_card">
        <div class="food_card_header">
            <img v-bind:src="'storage/'+image" alt="Leves Kép" />
        </div>
        <div class="food_card_inner">
            <h1 class="food_card_heading text-center">{{foodName}}</h1>            

            <div v-if="ingredients != undefined" class="ingredients">
                <h3>Összetevők:</h3>
                <span>({{ingredients}})</span>
            </div>   
            <div class="" v-if="capacity != undefined">
                <h3>Térfogat:</h3>
                <p>{{capacity}} (ml)</p>
            </div>
            <div v-if="!userLoggedIn">
                <Alert 
                    v-if="addedToCart"
                    :Msg="'Kérem jelentkezzen be!'"
                    :className="'danger'"
                />
            </div>
            <div v-else>
                <Alert 
                    v-if="addedToCart"
                    :Msg="'A termék bekerült a kosárba'"
                    :className="'success'"
                />
            </div>
        </div>
        <div class="food_card_footer">
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
import Alert from './Alert'
import { mapGetters } from "vuex";

export default {
    name: 'baseCard',
    data () {
        return{
            addedToCart: false,
            finalPrice: this.foodPrice,
        }
    },
    components:{
        Alert
    },
    computed:{
        ...mapGetters({
            userLoggedIn: 'getUserLoggedIn',
        }),
    },
    props: {
        foodType: String,
        foodId: Number,
        image: String,
        foodName: String,
        foodPrice: Number,
        ingredients:{
            type: String,
            requried: false
        },
        capacity: {
            type: Number,
            requried: false
        }
    },
    methods: {
        addToCart(){
            if(this.userLoggedIn){
                addToCart.addFoodToCart(this.foodType, this.foodId)
                .then(result => {
                    this.$store.commit('setCartItems', result.data);
                    this.finalPrice = this.foodPrice;
                    this.hideSuccessMsg();
                })
                .catch(error => console.log(error)) 
            }else{
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