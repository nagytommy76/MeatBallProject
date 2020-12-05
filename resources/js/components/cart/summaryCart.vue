<template>
    <div>
        <div class="modal-head">
            <h1 class="text-center py-1">Rendelés véglegesítése</h1>
        </div>
        <div class="modal-body">
            <div class="userData">
                <h3>Személyes adatok: </h3>
                <h4>Név: {{user.userinfo.firstName}} {{user.userinfo.lastName}}</h4>
                <h4>E-mail: {{user.email}}</h4>
                <h4>Telefon: {{user.userinfo.phone}}</h4>
                <h4>
                    Cím: 
                    {{user.userinfo.zipCode}}
                    {{user.userinfo.city}}
                    {{user.userinfo.street}}
                    {{user.userinfo.houseNumber}}
                    {{user.userinfo.floorDoor}}
                </h4>
            </div>
            <div class="order">
                <h3>Rendelt étel(ek):</h3>
                <h3>{{cartItems.totalPrice}} Ft összértékben</h3>
                <div v-for="(food, index) in cartItems.items" :key="index">
                    <h4>
                        {{food.qty}} DB
                        {{food.item.foodName}}
                        ({{food.oneItemTotalPrice}}) Ft
                    </h4>
                    <p v-if="food.item.plusIngreds != null">
                        <span v-for="ingred in food.item.plusIngreds" :key="ingred.ingredId">
                            <span>{{ingred.ingredName}} ({{ingred.ingredPrice}}) Ft</span>
                        </span>
                    </p>
                </div>
            </div>
            <div v-if="showPayment" class="payment">
                <h3>Fizetési opció kiválasztása</h3>
                <label>                    
                    <p>Fizetés PayPal-el vagy kártyával</p>
                    <small><sup>*</sup>(A fizetés után automatikusan megtörténik a rendelés!)</small>
                    <input @change="showPaymentContainer" type="radio" name="payment-option" value="paypal" v-model="payment">
                    <span id="paypal-marks-container"></span>
                </label>

                <label>
                    Fizetés Készpénzzel
                    <input @change="showPaymentContainer" type="radio" name="payment-option" value="alternate" v-model="payment">
                    <i class="fas fa-money-bill-wave fa-2x"></i>
                </label>

                <div v-show="showPaypal" ref="paypal"></div>
                <div v-show="showAlternatePay" id="alternate-button-container">
                    <h3>A fizetés készpénzzel a futárnál történik</h3>
                </div>
            </div>
            <Alert 
                v-if="showSuccessPayPal"
                :Msg="`Köszönjük rendelését! A PayPal fizetés sikeres volt! Tranzakció szám: ${transactionID}`"
                :className="'success'"
            />
            <Alert 
                v-if="showSuccessPayPal"
                :Msg="`A visszaigazoló e-mailt elküldtük!`"
                :className="'success'"
            />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Alert from '../baseComponents/Alert'

export default {
    name: "summaryCart",
    template: "summarycart",
    components:{
        Alert
    },
    data() {
        return {
            payment: 'alternate',
        }
    },
    mounted() {
        this.createPayPalScript()
    },
    computed: {
        ...mapGetters({
            cartItems: 'getCartItems',
            transactionID: 'getTransactionID'
        }),
        showPayment: {
            get(){
                return this.$parent.showPayment
            },
            set(value){
                this.$parent.showPayment = value
            }
        },
        showSuccessPayPal: {
            get(){
                return this.$parent.showSuccessPayPal
            },
            set(value){
                this.$parent.showSuccessPayPal = value
            }
        },
        showPaypal:{
            get(){
                return this.$parent.showPayPal
            },
            set(value){
                this.$parent.showPayPal = value
            }
        },
        showAlternatePay:{
            get(){
                return this.$parent.showAlternatePayment
            },
            set(value){
                this.$parent.showAlternatePayment = value
            }
        },
        user: function(){
            return this.$parent.user;
        },
    },
    methods:{
        ...mapActions({
            setPayPalDetails: 'setPayPalDetails',
            setPaidWithPP: 'setPaidWithPP',
        }),
        createPayPalScript(){
            const script = document.createElement('script');
            script.src = `
                https://www.paypal.com/sdk/js?client-id=Ab5PkxGXmT-up_8VMgPOajxLZSe9PzyOh4eHxeCkJ6GiVd-4vfcTtG-cayvv8dHJL6Uv6CW6vNxOaFa4&currency=HUF&components=buttons,marks
            `
            script.addEventListener('load', this.setLoaded)
            script.addEventListener('load', this.setPayment)
            document.body.appendChild(script)
        },
        setLoaded: function() {
            paypal
            .Buttons({
                locale: 'hu_HU',
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ 
                            description: "Húsgolyó étterem ételrendelés",                           
                            amount: {
                                currency_code: 'HUF',
                                value: this.cartItems.totalPrice
                            },                            
                        }]
                    })
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture()
                    if (order.status === 'COMPLETED') {
                        const finalDetails = {
                        create_time: order.create_time,
                        id: order.id,
                        payer: order.payer,
                        purchase_units: order.purchase_units,
                        status: order.status,
                        }
                        this.setPaidWithPP(true)
                        this.setPayPalDetails(finalDetails);
                        this.showSuccessAlertMessage()
                        this.hidePaymentOptionsAfterPay()
                        this.$parent.makeOrder()
                    }                    
                }
            })
            .render(this.$refs.paypal)
        },
        setPayment(){
            paypal.Marks().render('#paypal-marks-container');
        },
        showPaymentContainer(event){
            if(event.target.value == 'paypal'){
                this.showPaypal = true
                this.showAlternatePay = false
            }else{
                this.showAlternatePay = true
                this.showPaypal = false
            }
            this.$parent.showMakeOrderBTN()
        },
        showSuccessAlertMessage(){
            this.showSuccessPayPal = true;            
        },
        hidePaymentOptionsAfterPay(){
            this.showPayment = false
        }
    },
}
</script>