<template>
        <div class="modal-bg bg-closed">
            <div class="modal">
                <span @click="closeModal" class="modal-close"><i class="far fa-times-circle"></i></span>
                <component :is="currentPage"></component>

                <div v-show="this.$parent.cartItems.totalQty > 0" class="">
                    <button v-show="step>0 && step != 3" @click="previousPage" class="btn btn-delete-dark">Vissza</button>
                    <span v-show="step<pages.length-1 && step != 2">
                        <button v-show="this.isUserinfoFilled || step != 1" @click="nextPage" class="btn btn-confirm-dark" >Tovább</button>
                    </span>
                        
                    <button @click="makeOrder" v-show="step == pages.length-2" class="btn btn-confirm-dark">Rendelés Leadása!</button>
                    
                </div>
                <Loading :isLoading="isLoading" />
            </div>
        </div>        
</template>

<script>
import cartModal from './cartModal';
import userInfo from './userInfo';
import summaryCart from './summaryCart';
import afterOrder from './afterOrder';

import Loading from '../baseComponents/loading';

export default {
    components: {
        cartModal,
        summaryCart,
        userInfo,
        afterOrder,
        Loading
    },
    data:() => {
        return {
            pages: ['cartModal','userInfo','summaryCart','afterOrder'],
            step: 0,
            isUserinfoFilled: false,
            user: {},
            isLoading: false,
        }
    },
    computed: {
        currentPage: function() {
            return this.pages[this.step];
        }
    },
    created(){
        if(this.$parent.accessToken != null){
            this.getUserInfo();
        }        
    },
    methods: {
        async userinfoFilled(){
            let res = await fetch('api/userInfoFilled', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.$parent.accessToken
                }
            }) 
            return await res.json();
        },
        async getUserInfo(){
            this.userinfoFilled()
            .then(user => {
                if(!user.message){
                    this.user = user;
                    this.isUserinfoFilled = user.user.userinfo_filled;
                }                
            })            
        },
        async makeOrder(){
            this.isLoading = true;
            this.saveOrder().then(saved => {
                if(!saved.exception){
                    this.$parent.getCartItems(this.$parent.accessToken)
                    this.step = 3
                    this.setDefaultPage()
                }else{
                    console.log(saved.exception)
                }
                this.isLoading = false;
            }).catch(error => console.log(error))
        },
        async saveOrder(){
            let saveResponse = await fetch('api/saveOrder',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.$parent.accessToken
                }
            });
            return await saveResponse.json();
        },
        closeModal(){
            let modalBg = document.querySelector('.modal-bg').classList;
            modalBg.remove('bg-activate');
            modalBg.add('bg-closed');
        },
        nextPage(){    
            this.step++;                  
            // if (this.step == 1/* && this.isUserinfoFilled*/) {
            //     this.step++;
            // }                 
        },
        previousPage(){
            this.step--
            // if (this.step == 1/* && this.isUserinfoFilled*/) {
            //     this.step--;
            // }  
        },
        setDefaultPage(){
            setTimeout(() => {
                this.step = 0
            }, 5000)
        }
    }
}
</script>