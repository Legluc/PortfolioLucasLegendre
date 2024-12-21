import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/views/IndexPage.vue';
import MonPortfolio from '@/views/MonPortfolio.vue';
import MonParcours from '@/views/MonParcours.vue';
import PassionRando from '@/views/PassionRando.vue';
import PassionVoyage from '@/views/PassionVoyage.vue';

const routes = [
  { path: '/', name: 'IndexPage', component: IndexPage },
  { path: '/Portfolio', name: 'MonPortfolio', component: MonPortfolio },
  { path: '/Parcours', name: 'MonParcours', component: MonParcours },
  { path: '/PassionRando', name: 'PassionRando', component: PassionRando },
  { path: '/PassionVoyage', name: 'PassionVoyage', component: PassionVoyage },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
