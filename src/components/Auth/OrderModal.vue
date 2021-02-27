<template>
    <div class="modal-bg">
        <div class="modal">
            <span @click="$emit('close')" class="modal-close"><font-awesome :icon="['far', 'times-circle']"/></span>
            <h1 class="text-center py-1">Korábbi rendeléseim</h1>
            <h1 v-show="showEmpty">Még nem rendelt tölünk!</h1>
            <div class="modal-body">
                <div class="orderCard" v-for="order in orders" :key="order.id">
                <h3>Rendelve: {{order.created_at}}</h3> 
                <div class="orders">                  
                    <div class="orderItem" v-for="(item, index) in order.cartItems.items" :key="index">
                        <ul>
                            <li>                                
                                <div class="tooltip">
                                    <span class="tooltiptext">
                                        Mennyiség {{item.qty}} db
                                    </span>
                                    <span>
                                        <h5>{{item.item.foodName}}</h5>
                                    </span>
                                </div>
                            </li>
                            <li>                                
                                <div class="tooltip">
                                    <span class="tooltiptext">
                                        Eredeti ár: {{item.item.price}} Ft
                                    </span>
                                    <span>
                                        <h5>{{item.oneItemTotalPrice}} Ft</h5>
                                    </span>
                                </div>
                            </li>
                        </ul>                                               
                    </div>
                </div> 
                    <h3>Összesen: {{order.cartItems.totalPrice}} Ft</h3>
                    <h3>Rendelés szám: {{order.orderNumber}}</h3>
                    <div v-if="order.with_paypal == 1">
                        <h3>PayPal-el fizetve</h3>
                        <h3>Tranzakciós ID: {{ order.transaction_id }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import axios from 'axios'
export default {
    data: () =>{
        return {
            orders: null,
            showEmpty: false,
        }
    },
    created(){
        this.getOrders()
    },
    methods: {
        getOrders(){
            axios.get('myOrders')
            .then(result => {
                this.orders = result.data.data
                if (this.orders.length == 0) {
                    this.showEmpty = true
                }
            })
            
        },
    }
}
</script>