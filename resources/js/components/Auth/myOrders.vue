<template>
        <div>
            <a @click="showModal" class="dropdown-item modal-button">
            <i class="fas fa-cart-arrow-down"></i>
            Korábbi rendelések
            </a>
        </div>
</template>


<script>

export default {
    name: "my-orders",
    
    methods: {         
        showModal(){
            let modalBg = document.querySelector('.modal-bg-xl');
            modalBg.classList.remove('bg-closed');
            modalBg.classList.add('bg-activate');           
        },
    }
}
</script>