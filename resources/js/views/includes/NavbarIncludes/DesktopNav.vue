<template>
    <li class="nav-item dropdown">
        <a v-on="showOpenNavbarBtn ? {click: toggleFoodDrop} : {mouseenter: openFoodDrop}" id="foodOrder" class="nav-link dropdown">Étel Rendelés</a>
        <transition name="dropdownNav">
        <div class="dropdown-menu" v-if="showFoodDrop">
            <LinkItem 
                @click.native="closeNavbar"
                :menuName="'Pizzák'"
                :routeName="'Pizza'"
            ><font-awesome class="svg-icon" :icon="['fas', 'pizza-slice']" size="2x"/></LinkItem>
             <LinkItem 
                @click.native="closeNavbar"
                :menuName="'Levesek'"
                :routeName="'Soup'"
            ><font-awesome class="svg-icon" :icon="['fas', 'soap']" size="2x"/></LinkItem>
            <LinkItem 
                @click.native="closeNavbar"
                :menuName="'Desszertek'"
                :routeName="'Dessert'"
            ><font-awesome class="svg-icon" :icon="['fas', 'birthday-cake']" size="2x"/></LinkItem>
            <LinkItem 
                @click.native="closeNavbar"
                :menuName="'Italok'"
                :routeName="'Drink'"
            ><font-awesome class="svg-icon" :icon="['fas', 'wine-glass-alt']" size="2x"/></LinkItem>
            <LinkItem 
                @click.native="closeNavbar"
                :menuName="'Főételek'"
                :routeName="'Meal'"
            ><font-awesome class="svg-icon" :icon="['fas', 'bacon']" size="2x"/></LinkItem>
            <LinkItem 
                @click.native="closeNavbar"
                :menuName="'Tészták'"
                :routeName="'Pasta'"
            ><font-awesome class="svg-icon" :icon="['fas', 'bread-slice']" size="2x"/></LinkItem>
        </div>
        </transition>
    </li>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import LinkItem from './LinkItem'
export default {
    components: {
        LinkItem,
    },
    computed: {
        ...mapGetters('navbarDropdown', {
            showFoodDrop: 'getFoodDropdown',
        }),
        ...mapGetters('Navbar', {
            showOpenNavbarBtn: 'getOpenNavbarBtn',
        }),
    },
    methods:{
        ...mapMutations('Navbar',['setIsNavbarOpen']),
        ...mapMutations('navbarDropdown',[
            'toggleFoodDrop',
            'openFoodDrop',
        ]),
        closeNavbar(){
            if (window.innerWidth <= 700) {
                this.setIsNavbarOpen(false)                
            }
        },
    },
}
</script>