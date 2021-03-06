import Vue from 'vue'
import App from './App.vue'

import store from './store'

import router from './router'

import vuetify from './plugins/vuetify'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

import VueTypedJs from 'vue-typed-js'

Vue.use(ElementUI)

Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
