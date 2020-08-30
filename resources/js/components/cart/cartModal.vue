<template>
    <div>        
                    <div class="modal-head">
                        <h2 class="text-center py-1">A Kosár tartalma</h2>
                    </div>
                    <div class="modal-body">
                        <div class="card-body" v-for="(item, index) in cartItems.items" :key="item.id">
                            <div class="cart-card">
                                <div class="image">
                                    <img v-bind:src="'storage/'+item.item.imagePath" alt="Kép helye">
                                </div>
                                <div class="body">
                                    <h3 class="text-center">{{item.item.foodName}}</h3>
                                    <h5>További feltétek:</h5>
                                    <div class="ingreds">
                                        <div class="tooltip" v-for="ingred of item.item.plusIngreds" :key="ingred.ingredId">
                                        <span class="tooltiptext" >
                                            {{ingred.ingredPrice}} Ft
                                        </span>
                                            <span>{{ingred.ingredName}}</span>
                                        </div>
                                    </div>
                                    <div class="tooltip">
                                        <span class="tooltiptext">
                                            Eredeti ár: {{item.item.price}} Ft
                                        </span>
                                        <span>
                                            <h4>Egységár: {{item.oneItemTotalPrice}} Ft</h4>
                                        </span>
                                    </div>
                                    <h4>Mennyiség: {{item.qty}} db</h4>
                                </div>
                                <div class="left">
                                    <form @click="deleteItem" class="deleteIcon">
                                        <input type="hidden" class="foodId" v-bind:value="item.item.id">
                                        <input type="hidden" class="foodType" v-bind:value="item.foodType">
                                        <i v-bind:id="index" v-bind:class="iconName"></i>                                      
                                    </form>                             
                                </div>
                            </div>
                        </div> 
                        <div v-if="deleted" class="alert alert-danger">
                            <p>A termék sikeresen törlve a kosárból</p>
                        </div>                       
                    </div>
                    <div class="modal-footer">
                        <h1 class="py-1">Végösszeg: {{ cartItems.totalPrice }} Ft</h1>
                    </div>
                </div>
</template>

<script>
export default {
    name: "cartmodal",
    template: 'cartmodal',
    data(){
        return{
            iconName: "far fa-trash-alt fa-2x",
            deleted: false,
        }
    },
    computed: {
        cartItems(){
            return this.$parent.$parent.cartItems;
        }
    },
    created(){
        
    },
    methods:{
        closeModal(){
            let modalBg = document.querySelector('.modal-bg').classList;
            modalBg.remove('bg-activate');
            modalBg.add('bg-closed');
        },
        async deleteItem(event){
            if(event.target.classList == this.iconName || event.target.tagName == "I"){
                const foodId = event.target.parentElement.querySelector('.foodId').value;
                const foodType = event.target.parentElement.querySelector('.foodType').value;
                const selectedItemIndex = event.target.parentElement.querySelector('I').id;
                await fetch('api/removeItemFromCart',
                    {
                        method: "DELETE",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+ this.$parent.accessToken
                        },
                        body: JSON.stringify({
                            foodId: foodId,
                            foodType: foodType,
                            selectedItemIndex: selectedItemIndex,
                        }),
                    }
                ).then(result => result.json())
                .then(res => {
                    this.$parent.$store.commit('setCartItems', res);
                    this.hideSuccessMsg(),
                    setTimeout(this.hideSuccessMsg, 3000);
                });
                
            }
        },
            hideSuccessMsg(){
                this.deleted = !this.deleted;
            },
    },
}
</script>