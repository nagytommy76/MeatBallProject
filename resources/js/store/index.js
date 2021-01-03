import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import accessToken from './modules/accessToken';
import getCartItems from './modules/getCartItems';
import payPal from './modules/paypal';
import paypalState from './modules/paypalState';
import userDetails from './modules/userDetails';
import modalPages from './modules/modalPages';
 
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        accessToken,
        getCartItems,
        payPal,
        paypalState,
        userDetails,
        modalPages,
    },
    plugins: [createPersistedState({
        key: 'accessToken'
    })],
});


