// Elméletileg ha importálok egy üres scss file-t akkor lehet style a componentekben, nem kapok errort...
// import '../sass/test.scss'
require('./fontAwesome')
require('./bootstrap');
require('./cloudinary')
window.Vue = require('vue');
Vue.use(require('vue-cookies'))
import store from './store';
import router from './router/router';
import App from './views/App'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BaseProject from './views/includes/MainPage/includes/projects/BaseProject'

Vue.component('font-awesome', FontAwesomeIcon)
Vue.component('BaseProject', BaseProject)

Vue.component('CloudImage', () => import( /* webpackChunkName: "CloudImage" */ './views/includes/MainPage/includes/projects/CloudImage'))
Vue.component('BaseButton', () => import( /* webpackChunkName: "BaseButton" */ './components/baseComponents/BaseButton'))
Vue.component('ImageSlider', () => import(/* webpackChunkName: "ImageSlider" */'./views/includes/MainPage/includes/ImageSlider'))
Vue.component('Tooltip', () => import(/* webpackChunkName: "Tooltip" */'./components/Utility/Tooltip'))
Vue.component('Alert', () => import(/* webpackChunkName: "Alert" */'./components/Utility/Alert'))
Vue.component('ErrorMsg', () => import(/* webpackChunkName: "ErrorMsg" */'./components/Utility/FormErrorMsg'))
Vue.component('Loading', () => import(/* webpackChunkName: "LoadingOverlay" */'./components/Utility/Loading'))

Vue.component('BaseFilter', () => import(/* webpackChunkName: "BaseFilter" */'../js/components/baseComponents/BaseFilter'))
Vue.component('BaseCard', () => import(/* webpackChunkName: "BaseCard" */'./components/baseComponents/BaseCard'))

Vue.component('Modal', () => import(/* webpackChunkName: "CartModal" */'./components/cart/Modal'))
Vue.component('OrdersModal', () => import(/* webpackChunkName: "OrdersModal" */'./components/Auth/OrderModal'))

new Vue({
  el: '#app',
  store,
  router,
  render(createApp) {
    return createApp(App);
  },
});