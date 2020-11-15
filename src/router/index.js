import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin/Admin.vue'
import Home from'../views/Home.vue'
import Biographie from "../views/Biographie.vue"
import Galerie from"../views/Galerie.vue"
import Actualites from"../views/Actualites.vue"
import Foret from '../views/Galeries/Foret.vue';
import Microcosmos from "../views/Galeries/Microcosmos.vue"
import Vegetale from "@/views/Galeries/Vegetale.vue"
import Eau from '@/views/Galeries/Eau.vue';

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
    component: Foret
  },
  {
    path: '/galeries/microcosmos',
    name: 'Microcosmos',
    component: Microcosmos
  },
  {
    path: '/galeries/vegetale',
    name: 'Vegetale',
    component: Vegetale
  },
  {
    path: '/galeries/eau',
    name: 'Eau',
    component: Eau
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
