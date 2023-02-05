import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('../views/Provide.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/Watch.vue'),
    },
    {
      path: '/watch-effect',
      name: 'watch-effect',
      component: () => import('../views/WatchEffect.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/Computed.vue'),
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: () => import('../views/Hooks.vue'),
    },
    {
      path: '/readOnly',
      name: 'readOnly',
      component: () => import('../views/ReadOnly.vue'),
    },
    {
      path: '/shallowRef',
      name: 'shallowRef',
      component: () => import('../views/ShallowRef.vue'),
    },
    {
      path: '/toraw',
      name: 'toraw',
      component: () => import('../views/ToRaw.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/Pinia.vue'),
    },
  ],
});

export default router;
