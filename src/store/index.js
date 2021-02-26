import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import accessToken from '../../src/store/modules/accessToken';
import getCartItems from '../../src/store/modules/getCartItems';
import payPal from '../../src/store/modules/paypal';
import paypalState from '../../src/store/modules/paypalState';
import userDetails from '../../src/store/modules/userDetails';
import modalPages from '../../src/store/modules/modalPages';

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