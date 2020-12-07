import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    meta: {
      title: "首页",
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    meta: {
      title: "",
    },
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '',
        name: 'User',
        meta: {
          title: "协会章程",
        },
        component: () => import('../views/Components/User.vue')
      },
      {
        path: '/User',
        name: 'User',
        meta: {
          title: "协会章程",
        },
        component: () => import('../views/Components/User.vue')
      },
      {
        path: '/Data',
        name: 'Data',
        meta: {
          title: "协会章程",
        },
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
