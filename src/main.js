import Vue from 'vue'
import VueParticles from 'vue-particles'
import vClickOutside from 'v-click-outside'
import Viewer from 'v-viewer'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import router from './router'
import store from './store'

import 'viewerjs/dist/viewer.css'
import './assets/app.sass'

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(vClickOutside)
Vue.use(Viewer)
Vue.use(VueScrollTo, {
	container: "body",
	duration: 600,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
