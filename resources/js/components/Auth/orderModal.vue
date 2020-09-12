<template>
    <div class="modal-bg modal-bg-xl bg-closed">
        <div class="modal">
            <span @click="closeModal" class="modal-close"><i class="far fa-times-circle"></i></span>
            <h1 class="text-center py-1">Korábbi rendeléseim</h1>
            <div class="modal-body" v-for="order in orders" :key="order.id">
                <h3>Rendelve: {{order.created_at}}</h3>
                <div class="card-body">
                    {{order.cartItems}}
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
        if(this.orders == null){
            this.getOrders()
        }
    },
    methods: {
        async getOrders(){
            loadData.fetchAuthData('myOrders','GET', this.$parent.accessToken)
            .then(result => {
                this.orders = result.data;
                console.log('lefutottam')
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