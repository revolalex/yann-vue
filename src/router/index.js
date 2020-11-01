import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Carousel from'../views/Carousel.vue'
import Apropos from "../views/Apropos.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: Carousel
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
