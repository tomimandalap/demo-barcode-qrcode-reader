import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/demo.vue'),
      children: [
        {
          path: '',
          component: () => import('../layouts/default.vue'),
          beforeEnter: (_, __, next) => {
            next("/home");
          },
        },
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'custom',
          name: 'Custom',
          component: () => import('../views/CustomView.vue')
        },
      ]
    },
    {
      path: '/404',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: '',
          name: 'Not Found',
          component: () => import('../views/NotFound.vue')
        }
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import('../views/NotFound.vue'),
      beforeEnter: (_, __, next) => {
        next("/404");
      },
    },
  ]
});
