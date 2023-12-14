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
            next("/demo");
          },
        },
        {
          path: 'demo',
          name: 'Demo',
          component: () => import('../views/Demo1.vue')
        },
        {
          path: 'demo-slot',
          name: 'Demo Slot',
          component: () => import('../views/Demo2.vue')
        },
        {
          path: 'demo-ref',
          name: 'Demo Ref',
          component: () => import('../views/Demo3.vue')
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
