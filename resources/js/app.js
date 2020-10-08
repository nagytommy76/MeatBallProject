require('./bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-cookies'))
const axios = require('axios');

import store from './store';
import router from './router/router';
import navbarHelper from './helpers/navbarHelper';

// Vue.component('login', require('./components/Auth/login.vue').default);
// Vue.component('register', require('./components/Auth/register.vue').default);

// Vue.component('cart-items', require('./components/cart/itemsInCart.vue').default);
// Vue.component('cart-modal', require('./components/cart/modal.vue').default);
// Vue.component('my-orders', require('./components/Auth/myOrders.vue').default);
// Vue.component('order-modal', require('./components/Auth/orderModal.vue').default);

// Vue.component('baseCard', require('./components/baseComponents/baseCard.vue').default);
// Vue.component('baseFilter', require('./components/baseComponents/baseFilter.vue').default);
// Vue.component('food-filter', require('./components/foodFilter.vue').default);

// // Others
// Vue.component('loading', require('./components/baseComponents/loading.vue').default);

// Vue.component('App', require('./views/App.vue').default)

import App from './views/App'

import { mapState, mapActions } from "vuex";
new Vue({
    el: '#app',
    store,
    router,
    render(createApp) {
      return createApp(App);
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
        mounted(){
            navbarHelper.openBtn()
            navbarHelper.logOutBTN()
        }
  });