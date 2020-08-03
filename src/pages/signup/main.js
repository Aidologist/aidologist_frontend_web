import Vue from 'vue'
import App from './Signup.vue'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#signup')
