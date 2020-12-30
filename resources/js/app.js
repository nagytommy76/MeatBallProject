require('./bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-cookies'))

import store from './store';
import router from './router/router';
import App from './views/App'

import Tooltip from '../js/components/Utility/Tooltip'
import Alert from '../js/components/Utility/Alert'
import Loading from '../js/components/Utility/Loading'

import BaseCard from '../js/components/baseComponents/BaseCard'
import BaseFilter from '../js/components/baseComponents/BaseFilter'


Vue.component('Tooltip', Tooltip)
Vue.component('Alert', Alert)
Vue.component('Loading', Loading)

Vue.component('BaseCard', BaseCard)
Vue.component('BaseFilter', BaseFilter)

new Vue({
    el: '#app',
    store,
    router,
    render(createApp) {
      return createApp(App);
    },
});