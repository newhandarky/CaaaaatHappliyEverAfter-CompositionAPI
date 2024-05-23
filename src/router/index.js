import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 前台根組件路由
      path: '/',
      name: 'frontendViewRoot',
      component: () => import('../views/FrontendRootView.vue'),
      children: [
        {
          // 首頁路由
          path: '/',
          name: 'home',
          component: () => import('../views/frontendViewRoot/HomeView.vue')
        }
      ]
    },
    {
      // 後台根組件路由
      path: '/admin',
      name: 'backendRoot',
      component: () => import('../views/BackendRootView.vue'),
      children: []
    }
  ]
})

export default router
