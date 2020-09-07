<template>
        <div>
            <a @click="showModal" class="dropdown-item modal-button">
            <i class="fas fa-shopping-cart"></i> 
            Kosár
            <span class="noOfFoodsInCart">{{this.$parent.numberOfItemsInCart}}</span>
            </a>
        </div>
</template>


<script>

export default {
    name: "cart-items",
    methods: {
        showModal(){
            let modalBg = document.querySelector('.modal-bg');
            modalBg.classList.remove('bg-closed');
            modalBg.classList.add('bg-activate');            
        },
    }
}
</script>

