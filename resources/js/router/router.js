import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainWelcome from '../views/includes/MainPage/MainWelcome'
import Welcome from '../views/includes/Welcome'
import Login from '../components/Auth/login'
import Register from '../components/Auth/register'

import Meatball from '../views/MeatBall'

import pizzaFilter from '../components/pizza/pizzaFilter'
import soupFilter from '../components/soup/soupFilter'
import dessertFilter from '../components/dessert/dessertFilter'
import drinkFilter from '../components/drink/drinkFilter'
import mealFilter from '../components/meal/mealFilter'
import pastaFilter from '../components/pasta/pastaFilter'

import pageNotFound404 from '../views/errors/404';


const routes = [
    {
        path: '/meatball',
        name: 'Meatball',
        component: Meatball,
        children:[
            {
                path: '/',
                name: 'Welcome',
                component: Welcome
            },
            {
                path: 'login',
                name: 'Login',
                component: Login,
                props: {registerAlert: false}
            },
            {
                path: 'register',
                name: 'Register',
                component: Register
            },
            {
                path: 'pizza',
                name: 'Pizza',
                component: pizzaFilter,
            },
            {
                path: 'soup',
                name: 'Soup',
                component: soupFilter
            },
            {
                path: 'dessert',
                name: 'Dessert',
                component: dessertFilter
            },
            {
                path: 'drink',
                name: 'Drink',
                component: drinkFilter
            },
            {
                path: 'meal',
                name: 'Meal',
                component: mealFilter
            },
            {
                path: 'pasta',
                name: 'Pasta',
                component: pastaFilter
            },
            {
                path: '*',
                component: pageNotFound404,
            },
        ],
    },
    {
        path: '/',
        name: 'MainWelcome',
        component: MainWelcome
    },
    {
        path: '*',
        component: pageNotFound404,
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
})