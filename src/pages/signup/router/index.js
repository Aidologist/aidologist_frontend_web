import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupA from '../views/SignupA.vue'
import SignupB from '../views/SignupB.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/A',
    name: 'SignupA',
    component: SignupA
  },
  {
    path: '/B',
    name: 'SignupB',
    component: SignupB
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
