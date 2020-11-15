import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Home from'../views/Home.vue'
import Biographie from "../views/Biographie.vue"
import Galerie from"../views/Galerie.vue"
import Actualites from"../views/Actualites"

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/biographie',
    name: 'Biographie',
    component: Biographie
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/galeries',
    name: 'Galeries',
    component: Galerie
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
