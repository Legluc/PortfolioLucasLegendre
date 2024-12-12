import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/views/IndexPage.vue';
import MonPortfolio from '@/views/MonPortfolio.vue';
import MonParcours from '@/views/MonParcours.vue';

const routes = [
  { path: '/', name: 'IndexPage', component: IndexPage },
  { path: '/Portfolio', name: 'MonPortfolio', component: MonPortfolio },
  { path: '/Parcours', name: 'MonParcours', component: MonParcours },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
