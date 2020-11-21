import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin/Admin.vue'
import Home from'../views/Home/Home.vue'
import Biographie from "../views/Biographie/Biographie.vue"
import Galerie from"../views/Galeries/Galerie.vue"
import Actualites from"../views/Actualites/Actualites.vue"

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
    path: '/galeries/foret',
    name: 'Foret',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Galeries/Foret/Foret.vue')
  },
  {
    path: '/galeries/microcosmos',
    name: 'Microcosmos',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Galeries/Micro/Microcosmos.vue')
  },
  {
    path: '/galeries/vegetale',
    name: 'Vegetale',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Galeries/Vegetale/Vegetale.vue')
  },
  {
    path: '/galeries/eau',
    name: 'Eau',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Galeries/Eau/Eau.vue')
  },
  {
    path: '/galeries/jardin',
    name: 'Jardin',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Galeries/Jardin/Jardin.vue')
  },
  {
    path: '/galeries/noir',
    name: 'Noir',
    // component: Noir
    component: () => import(/* webpackChunkName: "about" */ '@/views/Galeries/Noir/Noir.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact/Contact.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
