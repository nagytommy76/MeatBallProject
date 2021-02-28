<template>
    <div class="modal-bg">
        <dialog open class="modal">
            <span @click="$emit('close')" class="modal-close"><font-awesome :icon="['far', 'times-circle']"/></span>
            <component
                :is="currentPage"
                :showMakeOrderBTN="showMakeOrderBTN"
                :makeOrder="makeOrder"
            ></component>            
            <div v-show="totalQty > 0" class="">
                <BaseButton 
                    v-show="getCurrentPage>0 && getCurrentPage != 3"
                    @click.native="previousPage"
                    :buttonClass="'delete-dark'"
                    :buttonText="'Vissza'"
                />
                <span v-show="getCurrentPage<pages.length-1 && getCurrentPage != 2">
                    <BaseButton 
                        v-show="isUserinfoFilled || getCurrentPage != 1"
                        @click.native="nextPage"
                        :buttonClass="'confirm-dark'"
                        :buttonText="'Tovább'"
                    />
                </span>   
                <BaseButton 
                    v-show="showMakeOrder"
                    @click.native="makeOrder"
                    :buttonClass="'confirm-dark'"
                    :buttonText="'Rendelés Leadása!'"
                />
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
        </dialog>
    </div>
</template>

<script>
import CartModal from './CartModal';
import UserInfo from './UserInfo';
import SummaryCart from './SummaryCart';

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'Modal',
    components: {
        CartModal,
        SummaryCart,
        UserInfo,
    },
    data:() => {
        return {
            pages: ['CartModal','UserInfo','SummaryCart'],
            isLoading: false,
            exceptionMsg: '',

            showSuccessCashPay: false,
            showException: false,
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
            getUserDataReceivedOnce: 'getUserDataReceivedOnce',

            getCurrentPage: 'getCurrentPage',
            showMakeOrder: 'getShowMakeOrder',
        }),
        ...mapGetters('paypalState', {
            showPayment: 'getShowPayment',
            showSuccessPayPal: 'showSuccessPayPal',
            showAlternatePayment: 'showAlternatePayment',
        })
    },
    created(){
        if (!this.getUserDataReceivedOnce) {
            this.getUserInfo() 
            this.setUserDataReceivedOnce(true)
        }
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
        ...mapMutations({
            setMakeOrder: 'setMakeOrder',
            setUserDataReceivedOnce: 'setUserDataReceivedOnce',
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
                    this.setMakeOrder(true)
                }else{
                    this.setMakeOrder(false)
                    if (this.paidWithPP) {
                        this.disableShowPayment(false)
                        this.enableShowPaypalMessage()
                        this.setMakeOrder(true)
                    }                    
                }               
            }else{
                this.setMakeOrder(false)
            }
        }
    }
}
</script>