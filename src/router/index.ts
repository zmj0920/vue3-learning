import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/rxjs',
      name: 'rxjs',
      component: () => import('../views/Rxjs.vue'),
    },
    {
      path: '/copy',
      name: 'copy',
      component: () => import('../views/Copy.vue'),
    },
    {
      path: '/ellipsis',
      name: 'ellipsis',
      component: () => import('../views/TextEllipsis.vue'),
    },
    {
      path: '/life-cycle',
      name: 'life-cycle',
      component: () => import('../views/LifeCycle.vue'),
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('../views/Slots.vue'),
    },
    {
      path: '/transfer-value',
      name: 'transfer-value',
      component: () => import('../views/TransferValue.vue'),
    },
  ],
});

export default router;
