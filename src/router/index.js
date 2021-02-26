import { createRouter, createWebHistory } from 'vue-router'

import MainWelcome from '../views/includes/MainPage/MainWelcome'
const routes = [
  {
    path: '/',
    name: 'MainWelcome',
    component: MainWelcome
  },
  {
    path: '/meatball',
    name: 'Meatball',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "meatball" */ '../views/MeatBall'),
    children: [
      {
        path: '/',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "meatball" */ '../views/includes/Welcome')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "meatball" */ '../components/Auth/Login'),
        props: {
            registerAlert: false,
        }
      },
      {
        path: 'login/:validation/:msg',
        name: 'LoginLink',
        component: () => import(/* webpackChunkName: "meatball" */ '../components/Auth/Login'),
        props: {
            validation: false,
            msg: ''
        }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "meatball" */ '../components/Auth/Register')
      },
      {
        path: 'pizza',
        name: 'Pizza',
        component: import(/* webpackChunkName: "meatball" */ '../components/pizza/PizzaFilter'),
      },
      {
          path: 'soup',
          name: 'Soup',
          component: import(/* webpackChunkName: "meatball" */ '../components/soup/SoupFilter')
      },
      {
          path: 'dessert',
          name: 'Dessert',
          component: import(/* webpackChunkName: "meatball" */ '../components/dessert/DessertFilter')
      },
      {
          path: 'drink',
          name: 'Drink',
          component: import(/* webpackChunkName: "meatball" */ '../components/drink/DrinkFilter')
      },
      {
          path: 'meal',
          name: 'Meal',
          component: import(/* webpackChunkName: "meatball" */ '../components/meal/MealFilter')
      },
      {
          path: 'pasta',
          name: 'Pasta',
          component: import(/* webpackChunkName: "meatball" */ '../components/pasta/PastaFilter')
      },
      {
          path: '*',
          component: import(/* webpackChunkName: "meatball" */ '../views/errors/404'),
      },
    ]
  },
  {
    path: '/:notFound(.*)',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router