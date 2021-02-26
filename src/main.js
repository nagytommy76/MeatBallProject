require('./bootstrap')
require('./fontAwesome')
import { createApp, defineAsyncComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

import BaseProject from './views/includes/MainPage/includes/projects/BaseProject'
app.component('font-awesome', FontAwesomeIcon)
app.component('BaseProject', BaseProject)

app.component('BaseButton', defineAsyncComponent(() => import('./components/baseComponents/BaseButton')))
app.component('ImageSlider', defineAsyncComponent(() => import('./views/includes/MainPage/includes/ImageSlider')))
app.component('Tooltip', defineAsyncComponent(() => import('./components/Utility/Tooltip')))
app.component('Alert', defineAsyncComponent(() => import('./components/Utility/Alert')))
app.component('ErrorMsg', defineAsyncComponent(() => import('./components/Utility/FormErrorMsg')))
app.component('Loading', defineAsyncComponent(() => import('./components/Utility/Loading')))

app.component('BaseFilter', defineAsyncComponent(() => import('./components/baseComponents/BaseFilter')))
app.component('BaseCard', defineAsyncComponent(() => import('./components/baseComponents/BaseCard')))

// app.component('Modal', defineAsyncComponent(() => import('./components/cart/Modal')))
app.component('OrdersModal', defineAsyncComponent(() => import('./components/Auth/OrderModal')))

app.use(store)
app.use(router)

app.mount('#app')
