import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin/Admin.vue'
import Home from'../views/Home/Home.vue'
import Biographie from "../views/Biographie/Biographie.vue"
import Galerie from"../views/Galeries/Galerie.vue"
import Actualites from"../views/Actualites/Actualites.vue"
import Foret from '../views/Galeries/Foret/Foret.vue';
import Microcosmos from "../views/Galeries/Micro/Microcosmos.vue"
import Vegetale from "@/views/Galeries/Vegetale.vue"
import Eau from '@/views/Galeries/Eau/Eau.vue';
import Jardin from '@/views/Galeries/Jardin/Jardin.vue'
// import Noir from '@/views/Galeries/Noir/Noir.vue'


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
    path: '/galeries/jardin',
    name: 'Jardin',
    component: Jardin
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
