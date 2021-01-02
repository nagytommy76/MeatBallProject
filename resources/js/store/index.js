import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import accessToken from './modules/accessToken';
import getCartItems from './modules/getCartItems';
import payPal from './modules/paypal';
import userDetails from './modules/userDetails';
 
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        accessToken,
        getCartItems,
        payPal,
        userDetails,
    },
    plugins: [createPersistedState({
        key: 'accessToken'
    })],
});


