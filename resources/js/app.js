// Elméletileg ha importálok egy üres scss file-t akkor lehet style a componentekben, nem kapok errort...
import '../sass/test.scss'
require('./bootstrap');
import { createApp, defineAsyncComponent } from "vue";
import App from "./views/App";
const app = createApp(App)
// window.Vue = require('vue');
app.use(require('vue-cookies'))

import store from './store';
import router from './router/router';
// import App from './views/App'

import BaseProject from './views/includes/MainPage/includes/projects/BaseProject'
app.component('BaseProject', BaseProject)

app.component('BaseButton', defineAsyncComponent(() => import('./components/baseComponents/BaseButton')))
app.component('ImageSlider', defineAsyncComponent(() => import('./views/includes/MainPage/includes/ImageSlider')))
app.component('Tooltip', defineAsyncComponent(() => import('./components/Utility/Tooltip')))
app.component('Alert', defineAsyncComponent(() => import('./components/Utility/Alert')))
app.component('ErrorMsg', defineAsyncComponent(() => import('./components/Utility/FormErrorMsg')))
app.component('Loading', defineAsyncComponent(() => import('./components/Utility/Loading')))

app.component('BaseFilter', defineAsyncComponent(() => import('../js/components/baseComponents/BaseFilter')))
app.component('BaseCard', defineAsyncComponent(() => import('./components/baseComponents/BaseCard')))

app.component('Modal', defineAsyncComponent(() => import('./components/cart/Modal')))
app.component('OrdersModal', defineAsyncComponent(() => import('./components/Auth/OrderModal')))

app.use(store)
app.use(router)
app.mount('#app')

// new Vue({
//   el: '#app',
//   store,
//   router,
//   render(createApp) {
//     return createApp(App);
//   },
// });