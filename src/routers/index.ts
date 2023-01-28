import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/setup'
    },
    {
      name: 'setup',
      path: '/setup',
      component: () => import('@/views/setup/index.vue')
    },
    {
      name: 'stage-manager',
      path: '/stage-manager',
      component: () => import('@/views/stage-manager/index.vue')
    }
  ]
})

export { routers }
