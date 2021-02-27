import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import accessToken from './modules/accessToken';
import getCartItems from './modules/getCartItems';
import payPal from './modules/paypal';
import paypalState from './modules/paypalState';
import userDetails from './modules/userDetails';
import modalPages from './modules/modalPages';

export default createStore({
  modules:{
    accessToken,
      getCartItems,
      payPal,
      paypalState,
      userDetails,
      modalPages,
  },
  plugins: [createPersistedState()],
});