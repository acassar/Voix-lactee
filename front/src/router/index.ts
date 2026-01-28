import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      name: 'fetch-error',
      path: '/error/fetch',
      component: () => import('@/views/errors/FetchError.vue'),
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/errors/404Error.vue'),
    },
  ],
})

export default router
