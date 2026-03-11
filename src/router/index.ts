import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/promotional',
      name: 'promotional',
      component: () => import('@/views/promotional.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/product.vue'),
    },
  ],
})

export default router
