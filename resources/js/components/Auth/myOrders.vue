<template>
        <div>
            <a @click="showModal" class="dropdown-item modal-button">
            <i class="fas fa-shopping-cart"></i> 
            Kosár
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