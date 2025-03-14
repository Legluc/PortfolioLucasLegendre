import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/views/IndexPage.vue';
import MonPortfolio from '@/views/MonPortfolio.vue';
import MonParcours from '@/views/MonParcours.vue';
import PassionRando from '@/views/PassionRando.vue';
import PassionVoyage from '@/views/PassionVoyage.vue';
import PassionJeuxVideo from '@/views/PassionJeuxVideo.vue';

const routes = [
  { path: '/', name: 'IndexPage', component: IndexPage },
  { path: '/Portfolio', name: 'MonPortfolio', component: MonPortfolio },
  { path: '/Parcours', name: 'MonParcours', component: MonParcours },
  { path: '/PassionRando', name: 'PassionRando', component: PassionRando },
  { path: '/PassionVoyage', name: 'PassionVoyage', component: PassionVoyage },
  { path: '/PassionJeuxVideo', name: 'PassionJeuxVideo', component: PassionJeuxVideo },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    // Si une ancre est présente dans l'URL, on y scroll
    if (to.hash) {
      return { selector: to.hash };
    }
    // Sinon, on retourne en haut de la page
    return { x: 0, y: 0 };
  }
  
});

router.afterEach((to) => {
  if (!to.hash) {
    window.scrollTo(0, 0);
  }
});




export default router;
