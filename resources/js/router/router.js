import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: () => import('../views/includes/Welcome')
    },
    {
        path: '/pizza',
        name: 'Pizza',
        component: () => import('../components/pizza/pizzaFilter')
    },
    {
        path: '/soup',
        name: 'Soup',
        component: () => import('../components/soup/soupFilter')
    },
    {
        path: '/dessert',
        name: 'Dessert',
        component: () => import('../components/dessert/dessertFilter')
    },
    {
        path: '/drink',
        name: 'Drink',
        component: () => import('../components/drink/drinkFilter')
    },
    {
        path: '/meal',
        name: 'Meal',
        component: () => import('../components/meal/mealFilter')
    },
    {
        path: '/pasta',
        name: 'Pasta',
        component: () => import('../components/pasta/pastaFilter')
    },
];

export default new VueRouter({
    mode: 'history',
    routes
})
