<template>
    <div class="modal-bg">
        <div class="modal">
            <span @click="$emit('close')" class="modal-close"><i class="far fa-times-circle"></i></span>
            <component
                :is="currentPage"
                :showMakeOrderBTN="showMakeOrderBTN"
                :makeOrder="makeOrder"
            ></component>            
            <div v-show="totalQty > 0" class="">
                <button v-show="getCurrentPage>0 && getCurrentPage != 3" @click="previousPage" class="btn btn-delete-dark">Vissza</button>
                <span v-show="getCurrentPage<pages.length-1 && getCurrentPage != 2">
                    <button v-show="this.isUserinfoFilled || getCurrentPage != 1" @click="nextPage" class="btn btn-confirm-dark" >Tovább</button>
                </span>   
                <button @click="makeOrder" v-show="showMakeOrder" class="btn btn-confirm-dark">Rendelés Leadása!</button>
                <Alert 
                    v-if="showException"
                    :Msg="exceptionMsg"
                    :className="'danger'"
                />
            </div>
            <Loading :isLoading="isLoading" />
            <Alert 
                v-if="showSuccessCashPay"
                :Msg="`A visszaigazoló e-mailt elküldtük!`"
                :className="'success'"
            />
            <Alert 
                v-if="showSuccessCashPay"
                :Msg="`Köszönjük rendelését! A fizetés a futárnál történik.`"
                :className="'success'"
            />
        </div>
    </div>
</template>

<script>
import CartModal from './CartModal';
import UserInfo from './UserInfo';
import SummaryCart from './SummaryCart';
import Loading from '../Utility/Loading'

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Modal',
    components: {
        CartModal,
        SummaryCart,
        UserInfo,
        Loading,
    },
    data:() => {
        return {
            pages: ['CartModal','UserInfo','SummaryCart'],
            isLoading: false,
            exceptionMsg: '',

            // showPayment: true,
            // showSuccessPayPal: false,
            showSuccessCashPay: false,
            showException: false,
            showMakeOrder: false,
            // showPayPal: false,
            // showAlternatePayment: true,
        }
    },
    computed: {
        currentPage: function() {
            return this.pages[this.getCurrentPage];
        },
        ...mapGetters({
            totalQty: 'getTotalQty',
            paidWithPP: 'getPaid',
            transactionID: 'getTransactionID',
            getCreatedAt: 'getCreatedAt',
            isUserDataReceived: 'getIsUserDataReceived',
            isUserinfoFilled: 'getUserInfoFilled',
            getCurrentPage: 'getCurrentPage',
        }),
        ...mapGetters('paypalState', {
            showPayment: 'getShowPayment',
            showSuccessPayPal: 'showSuccessPayPal',
            showAlternatePayment: 'showAlternatePayment',
        })
    },
    created(){
        this.getUserInfo()
    },
    methods: {
        ...mapActions({
            setCartDefault: 'setCartDefault',
            setPayPalDefault: 'setPayPalDefault',
            getUserInfo: 'getUserInfo',
            increasePage: 'increasePage',
            decreasePage: 'decreasePage',
            setDefaultPage: 'setDefaultPage',
        }),
        ...mapActions('paypalState',{
            disableShowPayment: 'disableShowPayment',
            enableShowPaypalMessage: 'enableShowPaypalMessage',
        }),
        async makeOrder(){
            this.isLoading = true;
            axios.post('saveOrder',{
                paidWithPayPal: this.paidWithPP,
                transactionId: this.transactionID,
                getCreatedAt: this.getCreatedAt,
            }).then(saveOrder => {
                if (!saveOrder.data.exception) {
                    if(this.paidWithPP){
                        this.setCartDefault()
                        this.setPayPalDefault()
                        setTimeout(() => {
                            this.setDefaultPage()
                            this.enableShowPaypalMessage(false)
                            this.disableShowPayment(true)
                        },15000)
                    }else{
                        this.setCartDefault()
                        this.setDefaultPage()
                        this.showSuccessCashPay = true 
                    }                    
                    this.isLoading = false;
                }else{
                    this.showException = true
                    this.exceptionMsg = saveOrder.data.message
                    this.isLoading = false;
                }
            })
        },
        nextPage(){    
            this.increasePage()
            this.showMakeOrderBTN()                            
        },
        previousPage(){  
            this.decreasePage()
            this.showMakeOrderBTN() 
        },
        showMakeOrderBTN(){
            if (this.getCurrentPage == this.pages.length-1) {
                if (this.showAlternatePayment) {
                    this.showMakeOrder = true
                }else{
                    this.showMakeOrder = false
                    if (this.paidWithPP) {
                        // this.showPayment = false
                        this.disableShowPayment(false)
                        this.enableShowPaypalMessage()
                        // this.showSuccessPayPal = true
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