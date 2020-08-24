/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-cookies'))
const axios = require('axios');

import store from './store';
import router from './router';



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('Filtering', require('./components/pizza/pizzaFilter.vue').default);
// Vue.component('pasta-filtering', require('./components/pasta/pastaFilter.vue').default);


Vue.component('cart-items', require('./components/cart/itemsInCart.vue').default);
Vue.component('cart-modal', require('./components/cart/cartModal.vue').default);
Vue.component('login', require('./components/Auth/login.vue').default);


Vue.component('food-filter', require('./components/foodFilter.vue').default);
// import foodFilter from './components/foodFilter';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import { mapState, mapActions } from "vuex";

const app = new Vue({
    store,
    router,
    el: '#app',
    components: {
        // foodFilter
    },
    data: () => {
        return{
            
        }
    },
    computed: {
        ...mapState({
            accessToken: state => state.accessToken.accessToken,
            numberOfItemsInCart: state => state.getCartItems.cartItems.totalQty, 
            cartItems: state => state.getCartItems.cartItems,   
        }),
    },
    methods: {
        ...mapActions([
            'fetchAccessToken',
            'getCartItems'
        ]),
    },
    created() {
        this.fetchAccessToken();
        if(this.accessToken != null){
            this.getCartItems(this.accessToken)
        }
    },
});