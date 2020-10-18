require('./bootstrap');
window.Vue = require('vue');
Vue.use(require('vue-cookies'))

import store from './store';
import router from './router/router';

import App from './views/App'

new Vue({
    el: '#app',
    store,
    router,
    render(createApp) {
      return createApp(App);
    },
  });