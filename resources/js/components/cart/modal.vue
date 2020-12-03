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
                <button @click="makeOrder" v-show="showMakeOrder" class="btn btn-confirm-dark">Rendelés Leadása!</button>
                <Alert 
                    v-if="showException"
                    :Msg="exceptionMsg"
                    :className="'danger'"
                />
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
import Alert from '../baseComponents/Alert'

import Loading from '../baseComponents/loading';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Modal',
    components: {
        cartModal,
        summaryCart,
        userInfo,
        afterOrder,
        Loading,
        Alert,
    },
    data:() => {
        return {
            pages: ['cartModal','userInfo','summaryCart'],
            step: 0,
            isUserinfoFilled: false,
            user: {},
            isLoading: false,
            exceptionMsg: '',

            showPayment: true,
            showSuccessPayPal: false,
            showException: false,
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
            transactionID: 'getTransactionID',
            getCreatedAt: 'getCreatedAt',
        }),
    },
    created(){
        if(this.userLoggedIn){
            // ÁTTENNI VUEX-BE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            this.getUserInfo();
        }  
    },
    methods: {
        ...mapActions({
            setCartDefault: 'setCartDefault',
            setPayPalDefault: 'setPayPalDefault'
        }),
        getUserInfo(){ 
            axios.get('userInfoFilled').then(user => {
                if (user.status == 200) {
                    this.user = user.data.user;
                    this.isUserinfoFilled = user.data.user.userinfo_filled;
                }
            }).catch(error => console.log(error))
        },
        async makeOrder(){
            this.isLoading = true;
            axios.post('saveOrder',{
                paidWithPayPal: this.paidWithPP,
                transactionId: this.transactionID,
                getCreatedAt: this.getCreatedAt,
            }).then(saveOrder => {
                if (!saveOrder.data.exception) {
                    setTimeout(() => {
                        this.setCartDefault()
                        if(this.paidWithPP){
                            this.setPayPalDefault()
                        }
                        this.setDefaultPage()
                    },10000)
                    this.isLoading = false;
                }else{
                    this.showException = true
                    this.exceptionMsg = saveOrder.data.message
                    this.isLoading = false;
                }
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
            this.step = 0
        },
        showMakeOrderBTN(){
            if (this.step == this.pages.length-1) {
                if (this.showAlternatePayment) {
                    this.showMakeOrder = true
                }else{
                    this.showMakeOrder = false
                    if (this.paidWithPP) {
                        this.showPayment = false
                        this.showSuccessPayPal = true
                        this.showMakeOrder = true
                    }                    
                }               
            }else{
                this.showMakeOrder = false
            }
        }
    }
}
</script>