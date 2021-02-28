<template>
    <li class="nav-item dropdown">
        <a v-on="event ? {click: toggleDrop} : {mouseenter: openDrop}" id="foodOrder" class="nav-link dropdown">Étel Rendelés</a>
        <transition name="dropdownNav">
        <div class="dropdown-menu" v-if="showDrop">
            <LinkItem 
                @click="closeNav()"
                :menuName="'Pizzák'"
                :routeName="'Pizza'"
            ><font-awesome class="svg-icon" :icon="['fas', 'pizza-slice']" size="2x"/></LinkItem>
             <LinkItem 
                @click="closeNav()"
                :menuName="'Levesek'"
                :routeName="'Soup'"
            ><font-awesome class="svg-icon" :icon="['fas', 'soap']" size="2x"/></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Desszertek'"
                :routeName="'Dessert'"
            ><font-awesome class="svg-icon" :icon="['fas', 'birthday-cake']" size="2x"/></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Italok'"
                :routeName="'Drink'"
            ><font-awesome class="svg-icon" :icon="['fas', 'wine-glass-alt']" size="2x"/></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Főételek'"
                :routeName="'Meal'"
            ><font-awesome class="svg-icon" :icon="['fas', 'bacon']" size="2x"/></LinkItem>
            <LinkItem 
                @click="closeNav()"
                :menuName="'Tészták'"
                :routeName="'Pasta'"
            ><font-awesome class="svg-icon" :icon="['fas', 'bread-slice']" size="2x"/></LinkItem>
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