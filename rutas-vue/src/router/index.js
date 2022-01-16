import Vue from 'vue'
import VueRouter from 'vue-router'
import Personas from '../views/Personas.vue'


Vue.use(VueRouter)
//añadir rutas para navegar entre si
const routes = [
  {
    path: '/',
    name: 'Personas',
    component: Personas
  },
  {
    path: '/carros',
    name: 'Carros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Carros.vue')
  },
  {
    path: '/formPersonas',
    name: 'formularioPersonas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Personas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
