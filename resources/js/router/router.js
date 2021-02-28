import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MainWelcome from '../views/includes/MainPage/MainWelcome'
const Welcome = () => import(/* webpackChunkName: "WelcomePage" */'../views/includes/Welcome')

const Login = () => import(/* webpackChunkName: "Login" */'../components/Auth/Login')
const Register = () => import(/* webpackChunkName: "Register" */'../components/Auth/Register')

const Meatball = () =>  import(/* webpackChunkName: "Meatball" */ '../views/MeatBall')

const PizzaFilter = () => import(/* webpackChunkName: "Pizza" */'../components/pizza/PizzaFilter')
const SoupFilter = () => import(/* webpackChunkName: "Soup" */'../components/soup/SoupFilter')
const DessertFilter = () => import(/* webpackChunkName: "Dessert" */'../components/dessert/DessertFilter')
const DrinkFilter = () => import(/* webpackChunkName: "Drink" */'../components/drink/DrinkFilter')
const MealFilter = () => import(/* webpackChunkName: "Meal" */'../components/meal/MealFilter')
const PastaFilter = () => import(/* webpackChunkName: "Pasta" */'../components/pasta/PastaFilter')

const PageNotFound404 = () =>  import(/* webpackChunkName: "PageNotFound" */'../views/errors/404');


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