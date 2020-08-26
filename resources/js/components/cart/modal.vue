<template>
    <div>
        <transition name="modal">
            <div class="modal-bg bg-closed">
                <div class="modal">
                    <span @click="closeModal" class="modal-close"><i class="far fa-times-circle"></i></span>

                    <component :is="currentPage"></component>

                    <div v-show="this.$parent.cartItems.totalQty > 0" class="">
                        <button v-show="step>0" @click="previousPage" class="btn btn-delete text-white">Vissza</button>
                        <button v-show="step<pages.length-1" @click="nextPage" class="btn btn-primary">Tovább</button>
                        <!-- <button class="btn btn-confirm">A végén a leadáshoz</button> -->
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
            adatokKitoltve: false,
        }
    },
    computed: {
        currentPage: function() {
            return this.pages[this.step];
        }
    },
    methods: {
        closeModal(){
            let modalBg = document.querySelector('.modal-bg').classList;
            modalBg.remove('bg-activate');
            modalBg.add('bg-closed');
        },
        nextPage(){
            this.step++;
            if (this.step == 1 && this.adatokKitoltve) {
                this.step++;
            }           
        },
        previousPage(){
            this.step--
            if (this.step == 1 && this.adatokKitoltve) {
                this.step--;
            }  
        },
    }
}
</script>