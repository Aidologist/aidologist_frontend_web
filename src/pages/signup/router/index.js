import Vue from 'vue'
import VueRouter from 'vue-router'

import Popular from '../views/Popular'
import Professional from '../views/Professional'
import Worldwide from '../views/Worldwide'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup/popular',
    name: 'popular',
    component: Popular
  },
  {
    path: '/signup/professional',
    name: 'professional',
    component: Professional
  },
  {
    path: '/signup/worldwide',
    name: 'worldwide',
    component: Worldwide
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
