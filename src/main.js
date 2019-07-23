import Vue from 'vue'
import VueParticles from 'vue-particles'
import vClickOutside from 'v-click-outside'
import Viewer from 'v-viewer'

import App from './App.vue'
import router from './router'
import store from './store'

import 'viewerjs/dist/viewer.css'
import './assets/app.sass'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(vClickOutside)
Vue.use(Viewer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
