<template>
    <div>
        <div class="modal-head">
            <h1 class="text-center py-1">Rendelés véglegesítése</h1>
        </div>
        <div class="modal-body">
            <div class="userData">
                <h3>Személyes adatok: </h3>
                <h4>Név: {{userInfo.firstName}} {{userInfo.lastName}}</h4>
                <h4>E-mail: {{userInfo.user_email}}</h4>
                <h4>Telefon: {{userInfo.phone}}</h4>
                <h4>
                    Cím: 
                    {{userInfo.zipCode}}
                    {{userInfo.city}}
                    {{userInfo.street}}
                    {{userInfo.houseNumber}}
                    {{userInfo.floorDoor}}
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
                    <span v-if="showPaypal">
                        <p>A fizetéshez szükséges PayPal számla:</p>
                        <p>Email: <strong>sb-qkdaa3413370@business.example.com</strong></p>
                        <p>Jelszó: <strong>7}&&K[yb</strong></p>
                    </span>
                    <input @change="showPaymentContainer" type="radio" name="payment-option" value="paypal" v-model="computedPayment">
                    <span id="paypal-marks-container"></span>
                </label>

                <label>
                    Fizetés Készpénzzel
                    <input @change="showPaymentContainer" type="radio" name="payment-option" value="alternate" v-model="computedPayment">
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
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    name: "SummaryCart",
    mounted() {
        this.createPayPalScript()
    },
    props:{
        showMakeOrderBTN: Function,
        makeOrder: Function,
    },
    computed: {
        ...mapGetters({
            cartItems: 'getCartItems',
            transactionID: 'getTransactionID',
            userInfo: 'getUserInfo',
        }),
        ...mapGetters('paypalState',{
            showPayment: 'getShowPayment',
            showSuccessPayPal: 'showSuccessPayPal',
            showAlternatePay: 'showAlternatePayment',
            showPaypal: 'getPayPalContainer',
            payment: 'getPayment'
        }),
        computedPayment: {
            get(){
                return this.payment
            },
            set(value){
                this.setPayment(value)
            }
        },
    },
    methods:{
        ...mapActions({
            setPayPalDetails: 'setPayPalDetails',
            setPaidWithPP: 'setPaidWithPP',
        }),
        ...mapActions('paypalState',{
            disableShowPayment: 'disableShowPayment',
            enableShowPaypalMessage: 'enableShowPaypalMessage',
            setAlternatePayment: 'setAlternatePayment',
        }),
        ...mapMutations('paypalState',[
            'setPaypalContainer',
            'setPayment',
        ]),
        createPayPalScript(){
            const script = document.createElement('script');
            script.src = `
                https://www.paypal.com/sdk/js?client-id=Ab5PkxGXmT-up_8VMgPOajxLZSe9PzyOh4eHxeCkJ6GiVd-4vfcTtG-cayvv8dHJL6Uv6CW6vNxOaFa4&currency=HUF&components=buttons,marks
            `
            script.addEventListener('load', this.setLoaded)
            script.addEventListener('load', this.addPaypalPayment)
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
                        this.enableShowPaypalMessage(true)
                        this.disableShowPayment(false)
                        this.makeOrder()
                    }                    
                }
            })
            .render(this.$refs.paypal)
        },
        addPaypalPayment(){
            paypal.Marks().render('#paypal-marks-container');
        },
        showPaymentContainer(event){
            if(event.target.value == 'paypal'){
                this.setPaypalContainer(true)
                this.setAlternatePayment(false)
            }else{
                this.setPaypalContainer(false)
                this.setAlternatePayment(true)
            }
            this.showMakeOrderBTN()
        },
    },
}
</script>