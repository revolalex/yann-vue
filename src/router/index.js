import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/Admin/SignIn.vue'
import Home from'../views/Home/Home.vue'
import Biographie from "../views/Biographie/Biographie.vue"
import Galerie from"../views/Galeries/Galerie.vue"
import Actualites from"../views/Actualites/Actualites.vue"
import Contact from"../views/Contact/Contact.vue"
import NotFound from "../views/NotFound.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/Dashboard/Dashboard.vue')
  },
  {
    path: '/biographie',
    name: 'Biographie',
    component: Biographie
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites
  },
  {
    path: '/actualites/interview',
    name: 'Interview',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Actualites/Interview/Interview.vue')
  },
  {
    path: '/actualites/calendrier',
    name: 'Calendrier',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Actualites/Calendrier/Calendrier.vue')
  },
  {
    path: '/actualites/presse',
    name: 'Presse',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Actualites/Presse/Presse.vue')
  },
  {
    path: '/actualites/expositions',
    name: 'Expositions',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Actualites/Expositions/Expositions.vue')
  },
  {
    path: '/photo',
    name: 'Photo',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Photo/Photo.vue')
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/Galeries/Noir/Noir.vue')
  },
  { path: '/404', component: NotFound },  
  { path: '*', redirect: '/404' },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
