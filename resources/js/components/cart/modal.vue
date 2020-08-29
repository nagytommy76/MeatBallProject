<template>
    <div>
        <transition name="modal">
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
                    
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
import cartModal from './cartModal';
import userInfo from './userInfo';
import summaryCart from './summaryCart';
export default {
    components: {
        cartModal,
        summaryCart,
        userInfo
    },
    data:() => {
        return {
            pages: ['cartModal','userInfo','summaryCart'],
            step: 0,
            isUserinfoFilled: false,
            user: {},
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
                this.user = user;
                this.isUserinfoFilled = user.user.userinfo_filled;
            })            
        },
        async makeOrder(){
            console.log("Rendelés leadása")
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