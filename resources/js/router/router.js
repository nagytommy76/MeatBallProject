import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainWelcome from '../views/includes/MainPage/MainWelcome'
import Welcome from '../views/includes/Welcome'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'

import Meatball from '../views/MeatBall'
// const Meatball = () =>  import('../views/MeatBall')

import PizzaFilter from '../components/pizza/PizzaFilter'
import SoupFilter from '../components/soup/SoupFilter'
import DessertFilter from '../components/dessert/DessertFilter'
import DrinkFilter from '../components/drink/DrinkFilter'
import MealFilter from '../components/meal/MealFilter'
import PastaFilter from '../components/pasta/PastaFilter'

import PageNotFound404 from '../views/errors/404'
// Ehhez webpack kell?!
// const PageNotFound404 = () =>  import('../views/errors/404');


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
                props: {
                    registerAlert: false,
                }
            },
            {
                path: 'login/:validation/:msg',
                name: 'LoginLink',
                component: Login,
                props: {
                    validation: false,
                    msg: ''
                }
            },
            {
                path: 'register',
                name: 'Register',
                component: Register
            },
            {
                path: 'pizza',
                name: 'Pizza',
                component: PizzaFilter,
            },
            {
                path: 'soup',
                name: 'Soup',
                component: SoupFilter
            },
            {
                path: 'dessert',
                name: 'Dessert',
                component: DessertFilter
            },
            {
                path: 'drink',
                name: 'Drink',
                component: DrinkFilter
            },
            {
                path: 'meal',
                name: 'Meal',
                component: MealFilter
            },
            {
                path: 'pasta',
                name: 'Pasta',
                component: PastaFilter
            },
            {
                path: '*',
                component: PageNotFound404,
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
        redirect: '/'
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(_, _2, savedPosition){
        if(savedPosition){
            return savedPosition
        }
        return {x: 0, y: 0}
    },
})