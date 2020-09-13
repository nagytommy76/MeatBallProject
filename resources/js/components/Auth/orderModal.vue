<template>
    <div class="modal-bg modal-bg-xl bg-closed">
        <div class="modal">
            <span @click="closeModal" class="modal-close"><i class="far fa-times-circle"></i></span>
            <h1 class="text-center py-1">Korábbi rendeléseim</h1>
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
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import loadData from '../../helpers/loadData';
export default {
    data: () =>{
        return {
            orders: null,
        }
    },
    created(){
        if(this.orders == null && this.$parent.accessToken){
            this.getOrders()
        }
    },
    methods: {
        async getOrders(){
            loadData.fetchAuthData('myOrders','GET', this.$parent.accessToken)
            .then(result => {
                this.orders = result.data;
                
            })
        },
        closeModal(){
            let modalBg = document.querySelector('.modal-bg-xl').classList;
            modalBg.remove('bg-activate');
            modalBg.add('bg-closed');
        }
    }
}
</script>