// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import { createRouter, createWebHistory } from "vue-router";

// Vue.use(VueRouter);

// import MainWelcome from '../views/includes/MainPage/MainWelcome'
// const Welcome = () => import('../views/includes/Welcome')

// const Login = () => import('../components/Auth/Login')
// const Register = () => import('../components/Auth/Register')

// const Meatball = () =>  import('../views/MeatBall')

// const PizzaFilter = () => import('../components/pizza/PizzaFilter')
// const SoupFilter = () => import('../components/soup/SoupFilter')
// const DessertFilter = () => import('../components/dessert/DessertFilter')
// const DrinkFilter = () => import('../components/drink/DrinkFilter')
// const MealFilter = () => import('../components/meal/MealFilter')
// const PastaFilter = () => import('../components/pasta/PastaFilter')

// const PageNotFound404 = () =>  import('../views/errors/404');


// const routes = [
//     {
//         path: '/meatball',
//         name: 'Meatball',
//         component: Meatball,
//         children:[
//             {
//                 path: '/',
//                 name: 'Welcome',
//                 component: Welcome
//             },
//             {
//                 path: 'login',
//                 name: 'Login',
//                 component: Login,
//                 props: {
//                     registerAlert: false,
//                 }
//             },
//             {
//                 path: 'login/:validation/:msg',
//                 name: 'LoginLink',
//                 component: Login,
//                 props: {
//                     validation: false,
//                     msg: ''
//                 }
//             },
//             {
//                 path: 'register',
//                 name: 'Register',
//                 component: Register
//             },
//             {
//                 path: 'pizza',
//                 name: 'Pizza',
//                 component: PizzaFilter,
//             },
//             {
//                 path: 'soup',
//                 name: 'Soup',
//                 component: SoupFilter
//             },
//             {
//                 path: 'dessert',
//                 name: 'Dessert',
//                 component: DessertFilter
//             },
//             {
//                 path: 'drink',
//                 name: 'Drink',
//                 component: DrinkFilter
//             },
//             {
//                 path: 'meal',
//                 name: 'Meal',
//                 component: MealFilter
//             },
//             {
//                 path: 'pasta',
//                 name: 'Pasta',
//                 component: PastaFilter
//             },
//             {
//                 path: '*',
//                 component: PageNotFound404,
//             },
//         ],
//     },
//     {
//         path: '/',
//         name: 'MainWelcome',
//         component: MainWelcome
//     },
//     {
//         path: '*',
//         redirect: '/'
//     },
// ];

// export default createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     scrollBehavior(_, _2, savedPosition) {
//       if (savedPosition) {
//         return savedPosition
//       } else {
//         return { 
//           top: 0,
//           behavior: 'smooth'
//         }
//       }
//     },
//     routes
//   });

// export default new VueRouter({
//     mode: 'history',
//     routes,
//     scrollBehavior(_, _2, savedPosition){
//         if(savedPosition){
//             return savedPosition
//         }
//         return {x: 0, y: 0}
//     },
// })