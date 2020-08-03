import Vue from 'vue'
import App from './Signup.vue'

import router from './router'

// import store from './store'

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
  // store,
  vuetify,
  render: h => h(App)
}).$mount('#signup')
