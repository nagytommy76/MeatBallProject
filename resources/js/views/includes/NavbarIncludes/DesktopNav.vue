<template>
    <li class="nav-item dropdown">
        <a @mouseenter="showDrop = !showDrop" id="foodOrder" class="nav-link dropdown">Étel Rendelés</a>
        <transition name="dropdownNav">
        <div class="dropdown-menu" v-if="showDrop" @mouseleave="hideDropdown">
            <router-link @click.native="closeNav()" :to="{name: 'Pizza'}" class="dropdown-menu-item">
                <i class="fas fa-pizza-slice"></i>
                Pizza
            </router-link>
            <router-link @click.native="closeNav()" :to="{name: 'Soup'}" class="dropdown-menu-item">
                <i class="fas fa-soap"></i>
                Levesek
            </router-link>
            <router-link @click.native="closeNav()" :to="{name: 'Dessert'}" class="dropdown-menu-item">
                <i class="fas fa-birthday-cake"></i>
                Desszertek
            </router-link>
            <router-link @click.native="closeNav()" :to="{name: 'Drink'}" class="dropdown-menu-item">
                <i class="fas fa-wine-glass-alt"></i>
                Italok
            </router-link>
            <router-link @click.native="closeNav()" :to="{name: 'Meal'}" class="dropdown-menu-item">
                <i class="fas fa-weight"></i>
                Főételek
            </router-link>
            <router-link @click.native="closeNav()" :to="{name: 'Pasta'}" class="dropdown-menu-item">
                <i class="fas fa-weight"></i>
                Tészta Ételek
            </router-link> 
        </div>
        </transition>
    </li>
</template>
<script>
export default {
    props:{
        closeNav: Function,
    },
    data() {
        return {
            showDrop: false
        }
    },
    methods:{
         hideDropdown(){
            this.showDrop = false
        }
    },
}
</script>