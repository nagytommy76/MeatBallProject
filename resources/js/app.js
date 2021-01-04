require('./bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-cookies'))

import store from './store';
import router from './router/router';
import App from './views/App'

import BaseCard from '../js/components/baseComponents/BaseCard'
import BaseFilter from '../js/components/baseComponents/BaseFilter'

Vue.component('Tooltip', () => import('../js/components/Utility/Tooltip'))
Vue.component('Alert', () => import('../js/components/Utility/Alert'))
Vue.component('ErrorMsg', () => import('../js/components/Utility/FormErrorMsg'))

Vue.component('BaseFilter', BaseFilter)
Vue.component('BaseCard', BaseCard)

new Vue({
  el: '#app',
  store,
  router,
  render(createApp) {
    return createApp(App);
  },
});