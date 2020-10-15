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
                <h3>Rendelt ételeid:</h3>
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
            <div class="payment">
                <label for="pay">Fizetés PayPal</label>
                <input type="checkbox" name="pay" id="pay" v-model="showPaypal">
            </div>
            <div v-show="showPaypal" class="" ref="paypal"></div>
        </div>
    </div>
</template>

<script>

export default {
    name: "summaryCart",
    template: "summarycart",
    data() {
        return {
            loaded: false,
            showPaypal: false,
        }
    },
    mounted(){
        this.createPayPalScript()
    },
    computed: {
        user: function(){
            return this.$parent.user;
        },
        cartItems: function(){
            return this.$store.getters.getCartItems;
        }
    },
    methods:{
        createPayPalScript(){
            const script = document.createElement('script');
            script.src = `
                https://www.paypal.com/sdk/js?client-id=Ab5PkxGXmT-up_8VMgPOajxLZSe9PzyOh4eHxeCkJ6GiVd-4vfcTtG-cayvv8dHJL6Uv6CW6vNxOaFa4&currency=HUF
            `
            script.addEventListener('load', this.setLoaded)
            document.body.appendChild(script)
        },
        setLoaded(){
            // this.loaded = true
            window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.orders.create({
                        purchase_units: [{
                            amount: {
                                currency_code: 'HUF',
                                value: this.cartItems.totalPrice
                            }
                        }]
                    })
                }
            })
            .render(this.$refs.paypal)
        },
    },
}
</script>