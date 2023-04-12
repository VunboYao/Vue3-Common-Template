import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { PAGE_XXX } from '@/router/constant'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PAGE_XXX,
    component: () => import('@/App.vue'),
  },
]
export default createRouter({
  history: createWebHashHistory(),
  routes,
})
