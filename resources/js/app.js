require('./bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-cookies'))

import store from './store';
import router from './router/router';
import App from './views/App'

Vue.component('Tooltip', () => import('../js/components/Utility/Tooltip'))
Vue.component('Alert', () => import('../js/components/Utility/Alert'))
Vue.component('Loading', () => import('../js/components/Utility/Loading'))

Vue.component('BaseFilter', () => import('../js/components/baseComponents/BaseFilter'))
Vue.component('BaseCard', () => import('../js/components/baseComponents/BaseCard'))

new Vue({
  el: '#app',
  store,
  router,
  render(createApp) {
    return createApp(App);
  },
});