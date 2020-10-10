// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import accessToken from './modules/accessToken';
import getCartItems from './modules/getCartItems';
 
Vue.use(Vuex);



export default new Vuex.Store({
    modules: {
        accessToken,
        getCartItems,
    },
    plugins: [createPersistedState({
        key: 'accessToken'
    })],
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        
    },
});


