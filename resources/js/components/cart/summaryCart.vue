<template>
    <div>
        <div class="modal-head">
            <h1 class="text-center py-1">Rendelés véglegesítése</h1>
        </div>
        <div class="modal-body">
            <div class="userData">
                <h3>Személyes adatok: </h3>
                <h4>Név: {{user.userinfo.firstName}} {{user.userinfo.lastName}}</h4>
                <h4>E-mail: {{user.email}}</h4>
                <h4>Telefon: {{user.userinfo.phone}}</h4>
                <h4>
                    Cím: 
                    {{user.userinfo.zipCode}}
                    {{user.userinfo.city}}
                    {{user.userinfo.street}}
                    {{user.userinfo.houseNumber}}
                    {{user.userinfo.floorDoor}}
                </h4>
            </div>
            <div class="order">
                <h3>Rendelt ételeid:</h3>
                <div v-for="(food, index) in cartItems.items" :key="index">
                    <h4>
                        {{food.qty}} DB
                        {{food.item.foodName}}
                        ({{food.oneItemTotalPrice}}) Ft
                    </h4>
                    <p v-if="food.item.plusIngreds != null">
                        <span v-for="ingred in food.item.plusIngreds" :key="ingred.ingredId">
                            <span>{{ingred.ingredName}} ({{ingred.ingredPrice}}) Ft</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "summaryCart",
    template: "summarycart",
    computed: {
        user: function(){
            return this.$parent.user.user;
        },
        cartItems: function(){
            return this.$parent.$parent.cartItems;
        }
    },
    methods: {

    },
}
</script>