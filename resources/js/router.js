import Vue from 'vue';
import VueRouter from 'vue-router';
import foodFilter from './components/pasta/pastaFilter';
import pizzaFilter from './components/pizza/pizzaFilter';
import soupFilter from './components/soup/soupFilter';

import cartModal from './components/cart/cartModal';
import summaryCart from './components/cart/summaryCart';

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    routes: [
        { path: '/pasta', component: foodFilter },
        { path: '/', component: pizzaFilter},
        { path: '/soup', component: soupFilter},
        { path: '/cartModal', component: cartModal},
        { path: '/summaryCart', component: summaryCart},
    ],
})