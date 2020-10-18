import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import accessToken from './modules/accessToken';
import getCartItems from './modules/getCartItems';
import payPal from './modules/paypal';
 
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        accessToken,
        getCartItems,
        payPal,
    },
    plugins: [createPersistedState({
        key: 'accessToken'
    })],
});


