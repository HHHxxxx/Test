import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '',
        name: 'User',
        component: () => import('../views/Components/User.vue')
      },
      {
        path: '/User',
        name: 'User',
        component: () => import('../views/Components/User.vue')
      },
      {
        path: '/Data',
        name: 'Data',
        component: () => import('../views/Components/Data.vue')
      },
    ]
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
