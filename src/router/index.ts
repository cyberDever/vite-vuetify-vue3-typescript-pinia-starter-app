import Vue from 'vue'
import VueRouter from 'vue-router'

import AddVehicles from '../app/vehicles/AddVehicles.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AddVehicles,
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
})

export default router
