<template>
    <div>
        <div class="modal-bg bg-closed">
            <div class="modal">
                <span @click="closeModal" class="modal-close"><i class="far fa-times-circle"></i></span>

                <component :is="currentPage"></component>

                <div v-show="this.$parent.cartItems.totalQty > 0" class="">
                    <button v-show="step>0" @click="previousPage" class="btn btn-delete text-white">Vissza</button>
                    <span v-show="step<pages.length-1">
                        <button v-show="this.isUserinfoFilled || step != 1" @click="nextPage" class="btn btn-primary" >Tovább</button>
                    </span>
                        
                    <button @click="makeOrder" v-show="step == pages.length-1" class="btn btn-confirm">A végén a leadáshoz</button>
                </div>
                <Loading
                    :active="isLoading"
                    :is-full-page="false"
                    background-color="#FFF"
                    color="#F0A700"
                    :height=100
                    :width=100
                ></Loading>
            </div>
        </div>        
    </div>
</template>

<script>
import cartModal from './cartModal';
import userInfo from './userInfo';
import summaryCart from './summaryCart';
import afterOrder from './afterOrder';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

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
            pages: ['cartModal','userInfo','summaryCart'],
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
            console.log("Rendelés leadása")
            this.isLoading = true;
            this.sendOrderEmail().then(email => {
                console.log(email);
                console.log("rendelés elküldve EMAIL");
                if(!email.exception){
                    this.saveOrder().then(saved => {
                        console.log('Mentve az adatbázisba')
                        console.log(saved)
                        this.isLoading = false;
                    })
                }
            });
        },
        async sendOrderEmail(){
            let emailResponse = await fetch('api/sendOrderEmail',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.$parent.accessToken
                }
            });
            return await emailResponse.json();
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
            if (this.step == 1 && this.isUserinfoFilled) {
                this.step++;
            }                 
        },
        previousPage(){
            this.step--
            if (this.step == 1 && this.isUserinfoFilled) {
                this.step--;
            }  
        },
    }
}
</script>