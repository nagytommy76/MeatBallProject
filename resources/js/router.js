import Vue from 'vue';
import VueRouter from 'vue-router';
import foodFilter from './components/pasta/pastaFilter';
import pizzaFilter from './components/pizza/pizzaFilter';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/pasta', component: foodFilter },
        { path: '/pizza', component: pizzaFilter},
    ],
    mode: 'history',
})