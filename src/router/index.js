import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about/:username',
    name: 'About',
    component: () => import('@/views/About.vue'),
    children: [
      {
        path: 'detail',
        name: 'Detail',
        component: () => import('@/views/Detail.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
