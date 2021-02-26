<template>
    <li class="nav-item dropdown">
        <a v-on="event ? {click: toggleDrop} : {mouseenter: openDrop}" id="foodOrder" class="nav-link dropdown">Étel Rendelés</a>
        <transition name="dropdownNav">
        <div class="dropdown-menu" v-if="showDrop">
            <LinkItem 
                @click="closeNav()"
                :menuName="'Pizzák'"
                :routeName="'Pizza'"
            ><i class="fas fa-pizza-slice"></i></LinkItem>
             <LinkItem 
                @click="closeNav()"
                :menuName="'Levesek'"
                :routeName="'Soup'"
            ><i class="fas fa-soap"></i></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Desszertek'"
                :routeName="'Dessert'"
            ><i class="fas fa-birthday-cake"></i></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Italok'"
                :routeName="'Drink'"
            ><i class="fas fa-wine-glass-alt"></i></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Főételek'"
                :routeName="'Meal'"
            ><i class="fas fa-weight"></i></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Tészták'"
                :routeName="'Pasta'"
            ><i class="fas fa-weight"></i></LinkItem>
        </div>
        </transition>
    </li>
</template>
<script>
import LinkItem from './LinkItem'
export default {
    components: {
        LinkItem,
    },
    props:{
        closeNav: Function,
        event: Boolean,
        showDrop: Boolean,
    },
    methods:{
        hideDropdown(){
            this.$emit('hide-dropdown')
        },
        toggleDrop(){
            this.$emit('toggle-drop')
        },
        openDrop(){
            this.$emit('open-drop')
        },
    },
}
</script>