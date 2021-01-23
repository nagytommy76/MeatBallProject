<template>
    <div>        
        <div class="modal-head">
            <h2 class="text-center py-1">A Kosár tartalma</h2>
        </div>
            <div class="modal-body">
                <div class="card-body" v-for="(item, index) in cartItems.items" :key="item.id">
                    <div class="cart-card">
                        <div class="image">
                            <img v-bind:src="'/storage/'+item.item.imagePath" alt="Kép helye">
                        </div>
                    <div class="body">
                    <h3 class="">{{item.item.foodName}}</h3>
                        <h5>További feltétek:</h5>
                        <div class="ingreds">
                            <Tooltip 
                                v-for="ingred in item.item.plusIngreds" :key="ingred.ingredId"
                                :text="`${ingred.ingredPrice} Ft`"
                            >
                                <span>{{ingred.ingredName}}</span>
                            </Tooltip>
                        </div>
                        <Tooltip 
                            :text="`Eredeti ár: ${item.item.price} Ft`"
                        >
                            <span>
                                <h4>Egységár: {{item.oneItemTotalPrice}} Ft</h4>
                            </span>
                        </Tooltip>
                        <h4>Mennyiség: {{item.qty}} db</h4>
                        </div>
                            <div class="left">
                                <form @click="deleteItem" >
                                <Tooltip :text="`Termék törlése`">
                                    <span class="deleteIcon">
                                        <input type="hidden" class="foodId" v-bind:value="item.item.id">
                                        <input type="hidden" class="foodType" v-bind:value="item.foodType">
                                        <i v-bind:id="index" v-bind:class="iconName"></i>                                      
                                    </span>
                                </Tooltip>
                                </form>                             
                            </div>
                        </div>
                        </div>  
                        <Alert 
                            v-if="deleted"
                            :Msg="'A termék sikeresen törlve a kosárból'"
                            :className="'danger'"
                        />
            </div>
            <div class="modal-footer">
                <h1 class="modal-price">Végösszeg: {{ cartItems.totalPrice }} Ft</h1>
            </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: "CartModal",
    data(){
        return{
            iconName: "far fa-trash-alt fa-2x",
            deleted: false,
        }
    },
    computed: {
        ...mapGetters({
            cartItems: 'getCartItems',
        })
    },
    methods:{
        async deleteItem(event){
            if(event.target.classList == this.iconName || event.target.tagName == "I"){
                const foodId = event.target.parentElement.querySelector('.foodId').value;
                const foodType = event.target.parentElement.querySelector('.foodType').value;
                const selectedItemIndex = event.target.parentElement.querySelector('I').id;

                await axios.delete('removeItemFromCart',{
                    data:{
                        foodId: foodId,
                        foodType: foodType,
                        selectedItemIndex: selectedItemIndex,
                    }
                }).then(deleted => {
                    this.$store.commit('setCartItems', deleted.data);
                    this.toggleSuccessMsg()
                })
            }
        },
        toggleSuccessMsg(){
            this.deleted = true;
            setTimeout(() => {this.deleted = false}, 6000)
        },
    },
}
</script>