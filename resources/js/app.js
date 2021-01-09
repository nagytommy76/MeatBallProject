require('./bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-cookies'))

import store from './store';
import router from './router/router';
import App from './views/App'

import BaseFilter from '../js/components/baseComponents/BaseFilter'

Vue.component('Tooltip', () => import('./components/Utility/Tooltip'))
Vue.component('Alert', () => import('./components/Utility/Alert'))
Vue.component('ErrorMsg', () => import('./components/Utility/FormErrorMsg'))
Vue.component('Loading', () => import('./components/Utility/Loading'))

Vue.component('BaseFilter', BaseFilter)
Vue.component('BaseCard', () => import('./components/baseComponents/BaseCard'))

Vue.component('Modal', () => import('./components/cart/Modal'))
Vue.component('OrdersModal', () => import('./components/Auth/OrderModal'))

new Vue({
  el: '#app',
  store,
  router,
  render(createApp) {
    return createApp(App);
  },
});