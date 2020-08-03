import Vue from 'vue'
import App from './Login.vue'

import router from './router'

import vuetify from './../../plugins/vuetify'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

import VueTypedJs from 'vue-typed-js'

import particles from 'particles.js'

Vue.use(ElementUI)

Vue.use(VueTypedJs)

Vue.use(particles)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#login')
