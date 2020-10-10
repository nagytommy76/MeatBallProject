<template>
        <div>
            <a class="dropdown-item modal-button">
            <i class="fas fa-shopping-cart"></i> 
            Kosár
            <span class="noOfFoodsInCart">{{ this.$store.getters.getTotalQty }}</span>
            </a>
        </div>
</template>
<script>

export default {
    name: "itemsInCart",
}
</script>

