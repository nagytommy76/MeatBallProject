<template>
    <div class="food_card">
        <div class="food_card_header">
            <img v-bind:src="'/storage/'+image" alt="Leves Kép" />
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
                <Alert 
                    v-if="showVerifyEmail"
                    :Msg="'E-mail címet vissza kell igazolni!'"
                    :className="'danger'"
                />
            </div>
        </div>
        <div class="food_card_footer">
            <BaseButton @click.native="addToCart" :id="foodId"
                :buttonText="'Kosárba!'"
            />
            <strong class="price">
                Ár:
                <span class="primary-color">{{finalPrice}}</span> Ft
            </strong>
        </div>
   </div>
</template>
<script>
import addToCart from '../../helpers/addToCart'
import { mapGetters, mapMutations } from "vuex";

export default {
    name: 'BaseCard',
    data () {
        return{
            addedToCart: false,
            showVerifyEmail: false,
            finalPrice: this.foodPrice,
        }
    },
    computed:{
        ...mapGetters('loginUser',{
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
        ...mapMutations([ 'setCartItems' ]),
        addToCart(){
            if(this.userLoggedIn){
                addToCart.addFoodToCart(this.foodType, this.foodId)
                .then(result => {
                    if (result.data.error) {
                        this.showVerify();
                    }else{
                        this.setCartItems(result.data);
                        this.finalPrice = this.foodPrice;
                        this.hideSuccessMsg();
                    }
                })
                .catch(error => console.log(error)) 
            }else{
                this.hideSuccessMsg();
            }            
        },
        showVerify(){
            this.showVerifyEmail = true
            setTimeout(() => {this.showVerifyEmail = false}, 4000)
        },
        hideSuccessMsg(){
            this.addedToCart = !this.addedToCart;
            setTimeout(() => {this.addedToCart = !this.addedToCart}, 3000);
        },
    },
}
</script>