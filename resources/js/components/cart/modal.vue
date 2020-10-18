<template>
    <div class="modal-bg">
        <div class="modal">
            <span @click="$emit('close')" class="modal-close"><i class="far fa-times-circle"></i></span>
            <component :is="currentPage"></component>
            <div v-show="totalQty > 0" class="">
                <button v-show="step>0 && step != 3" @click="previousPage" class="btn btn-delete-dark">Vissza</button>
                <span v-show="step<pages.length-1 && step != 2">
                    <button v-show="this.isUserinfoFilled || step != 1" @click="nextPage" class="btn btn-confirm-dark" >Tovább</button>
                </span>   
                <!-- <button @click="makeOrder" v-show="step == pages.length-2 && (showPayPal && paidWithPP)" class="btn btn-confirm-dark">Rendelés Leadása!</button> -->
                <button @click="makeOrder" v-show="showMakeOrder" class="btn btn-confirm-dark">Rendelés Leadása!</button>
                    
            </div>
            <Loading :isLoading="isLoading" />
        </div>
    </div>
</template>

<script>
import cartModal from './cartModal';
import userInfo from './userInfo';
import summaryCart from './summaryCart';
import afterOrder from './afterOrder';

import Loading from '../baseComponents/loading';
import { mapGetters } from 'vuex'

export default {
    name: 'Modal',
    components: {
        cartModal,
        summaryCart,
        userInfo,
        afterOrder,
        Loading
    },
    data:() => {
        return {
            pages: ['cartModal','userInfo','summaryCart','afterOrder'],
            step: 0,
            isUserinfoFilled: false,
            user: {},
            isLoading: false,

            showMakeOrder: false,
            showPayPal: false,
            showAlternatePayment: true,
        }
    },
    computed: {
        currentPage: function() {
            return this.pages[this.step];
        },
        ...mapGetters({
            totalQty: 'getTotalQty',
            userLoggedIn: 'getUserLoggedIn',
            paidWithPP: 'getPaid',
        }),
    },
    created(){
        if(this.userLoggedIn){
            // ÁTTENNI VUEX-BE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            this.getUserInfo();
        }  
    },
    methods: {
        getUserInfo(){ 
            axios.get('api/userInfoFilled').then(user => {
                if (user.status == 200) {
                    this.user = user.data.user;
                    this.isUserinfoFilled = user.data.user.userinfo_filled;
                }
            }).catch(error => console.log(error))
        },
        async makeOrder(){
            this.isLoading = true;
            axios.post('api/saveOrder').then(saveOrder => {
                if (!saveOrder.data.exception) {
                    this.$store.dispatch('setCartDefault')
                    this.step = 3
                    this.setDefaultPage()
                    this.isLoading = false;
                }
                this.isLoading = false;
            })
        },
        nextPage(){    
            this.step++;  
            this.showMakeOrderBTN()                            
        },
        previousPage(){
            this.step--  
            this.showMakeOrderBTN() 
        },
        setDefaultPage(){
            setTimeout(() => {
                this.step = 0
            }, 5000)
        },
        showMakeOrderBTN(){
            if (this.step == this.pages.length-2) {
                if (this.showAlternatePayment) {
                    this.showMakeOrder = true
                }else{
                    this.showMakeOrder = false
                    if (this.paidWithPP) {
                        this.showMakeOrder = true
                    }
                    
                }               
            }
        }
    }
}
</script>