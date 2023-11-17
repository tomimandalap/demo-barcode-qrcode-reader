import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'custom',
          name: 'Custom',
          component: () => import('../views/CustomView.vue')
        }
      ]
    }
  ]
});
