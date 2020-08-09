// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";

import accessToken from './modules/accessToken';
import getCartItems from './modules/getCartItems';
 
Vue.use(Vuex);



export default new Vuex.Store({
    modules: {
        accessToken,
        getCartItems,
    },
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        
    },
});


