<template>
  <div id="Accueil">
    <section id="LucasLegendre">
      <h1>Lucas <br>Legendre</h1>
      <div class="CarteVerte">
        <h2>Développeur web en alternance</h2>
        <p>Moi c'est Lucas, j’ai 27 ans et je suis développeur web, randonneurs, voyageur et un joueur. Je suis un développeur web passionné de création numérique, d’exploration et d’aventures. Curieux et toujours en quête de nouveaux défis, je mêle savoir-faire et esprit créatif. Explorez mon site pour découvrir mes projets, mon parcours, ainsi que mes autres passions. Bienvenue dans mon univers !</p>
      </div>
    </section>
    <section id="MonParcours">
      <img src="" alt="illustation parcours">
      <button class="Bouton">Mon parcours</button>
    </section>
    <section id="MesPassions">

      <div v-if="screenWidth > 768" class="MesPassionsDesktop">
        <div 
          class="ImagePassion" 
          v-for="(passion, idx) in imagesPassion" 
          :key="idx"
        >
          <router-link :to="passion.link">
            <img :src="passion.image" :alt="passion.title" />
            <div class="TextePassion">
              <p>{{ passion.title }}</p>
            </div>
          </router-link>
        </div>
      </div>

      <div v-else class="MesPassionsCarousel">
        <CarouselGlobal 
          :images="imagesPassion"
          :slide-component="slideCompPassion"
        />
      </div>

    </section>
    <section id="MesProjets">
      <div id="ProjetsPro">
        <h2>Mes <br>projets</h2>
        <div class="CarteVerte">
          <h3>Découvrez ici mes projet professionnel</h3>
          <button class="Bouton">Découvrir</button>
        </div>
      </div>
      <div class="MockupProjetAccueil">

      </div>
    </section>
    <section class="ContactAccueil">
      <div class="ContactTitre">
        <h2>Contact</h2>
        <p>Vous souhaitez échanger et en savoir plus sur mon parcours ? </p>
      </div>
        <div class="Formulaire">
          <form action="">
            <div class="InputForm">
              <div class="InputInfo">
                <input type="text" label="nom" placeholder="Nom">
                <input type="text" label="prenom" placeholder="Prénom">
                <input type="text" label="mail" placeholder="Mail">
              </div>
              <textarea  label="message" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="Bouton">Envoyé</button>
          </form>
        </div>
    </section>
    <footer id="FooterAccueil">
      <div class="LogoNavFooterAccueil">
        <router-link to="/">
          <svg id="LogoFooter" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 232.8 283">
            <path class="st0" d="M203.3,70.2c.1,0,.3,0,.4,0,5.2-1,7.9-1.5,9.5-1.9,11.9-3.4,19.5-12.6,19.6-23.5,0-10.6-7.4-19.7-18.9-23.2-4.1-1.3-8.4-1.9-12.5-1.9-6.9,0-13.2,1.7-18.8,4.1-1.2.5-2.7.2-3.6-.7C165.1,8.3,145.8,0,124.8,0s-32.4,5.1-45.6,14.2c-14.3,10-24.4,24.1-29.1,40.9-2.7,9.5-2.6,17.7-2.5,25,0,4.5.1,8.7-.4,13.2-.4,3.7-3,8.1-5.8,12.7-3,4.9-6.3,10.5-8.1,17.1-2,7.3-2.2,13.5-2.4,19-.3,7.1-.5,12.8-4.5,20.4-2.9,5.4-5.9,9.8-8.9,14.1-6.5,9.4-13.2,19.1-15.9,36.9-3.8,25-.6,43.8,9.7,55.7,7.9,9.2,19.4,13.9,34.2,13.9s4.6-.1,7-.3c14.6-1.3,20.8-8.7,25.3-14,2.1-2.5,3.9-4.6,6.5-6.3,2.1-1.4,5.4-2.4,8.8-3.6,2.9-.9,5.8-1.9,8.7-3.3,15.3-7.1,25.1-20.2,25.8-34.2,0-.6,0-1.3,0-1.9,0-2.2,2.3-3.7,4.4-2.9,5.9,2.2,12.8,3.3,20.6,3.3s18.2-1.6,25.2-4.3c25.2-9.9,38.8-34.5,37.2-67.5-.2-4.4-.6-9.2-1.9-14-.4-1.3.1-2.7,1.3-3.5h.2c1.1-.9,1.6-2.3,1.3-3.7l-1.3-4.6-13.7-47.9c-.5-1.8.6-3.7,2.5-4.1Z"/>
            <g>
              <path class="st1" d="M187.3,63.6l17.5,61.4-5.2,3.7c4.3,5.9,5.1,12.8,5.4,19.9,1.2,24.2-6.7,48.3-30.8,57.7-13.6,5.3-42,6.3-50.4-8l-5-13.9c-2.7,12-.6,24.4-1.2,36.5-.6,11.7-9.9,20.9-20.1,25.7s-13.3,4-18.7,7.5c-10.7,6.8-10.9,17.3-27.4,18.8-38.6,3.5-45.1-25.6-40.2-57.8,3.5-23,14.2-29.6,23.8-47.8,8.6-16.2,3.6-26,7.8-41.4,3.1-11.4,12.9-20.4,14.2-31.2s-1.2-23.3,2.6-36.6C74.5,5.4,146.5-7.6,177.8,37.3c10.6-6.1,20.8-10.1,33.2-6.3,16.2,4.9,15.4,22.9-.6,27.6-3.1.9-22.4,4-23.1,5ZM175.8,39.7C138.7-15.1,50.8,19.7,60.4,85.1l80.1-15.4c12-9.6,22.1-21.8,35.2-29.9ZM184.9,64.4l-40.1,7c-10.7,11.7-.4,24.4,3.9,35.7,2.5,6.8,3.2,14.8,2.4,22-.8,6.8-4.5,7.9-1.8,15.8,6.1,17.9,31.7,18.9,43.8,6.2,2.1-2.2,6.6-9.2,7.2-12,.2-1,0-1.5-1.1-1.1-5.5,2.3-11.2,9.7-17.7,11.6-11.7,3.3-19.3-.8-21-12.9-.1-.7-.9-9.6,1.3-7.1,3.4,17.2,17.1,15.4,26.2,3.5-2.1-.8-5.3,2-5.4-1.9,6.9-1.2,13.6-3.2,19.3-7.5l-17.1-59.3ZM134.8,119.4c8.8-8.9,5-25.7-9.3-24.3-3.6.4-12.9,5.4-9.7-2,3-3,12.2,1.7,13.1-3.9,1.5-9.4-17-6.9-21.1.5-3.2,5.7-1.5,14.7,6.1,15.4,4.8.4,14.5-4.7,15.8,1.9,1.8,9.3-16.1,7.2-11.9,15.7,2.8,5.7,13.9-.2,17-3.4ZM96.6,118.9c1.9-.1,3.1,1.9,4,3.3,4.7,7.2,4.4,20.8,11.8,25.9,5.3,3.7,9.8-.9,9.7-6.5-.1-5.1-11.3-23.9-14.5-29.4-3.4-5.8-12.2-21.4-18.6-23-5.4-1.3-8.8,7.3-9.1,11.7-1.2,17.3,11.2,41.8,13.5,59.3,1.8,5.3,6,5.2,8.9.7,7.7-12-7.5-29.2-5.5-42.1ZM70.8,135.4c-9.7-.5-11.3,8.2-10.2,16,1.5,11.2,20.7,44.2,30.6,49.3,20.1,10.3,28.4-25.3,17.6-29.9-9.1-3.9-8.5,14.5-16.3,12.5s-15.6-16.9-16.6-21.9c-1.9-9.8,6.4-12.6,4.8-18.7-.9-3.4-6.7-7.1-10-7.3ZM53.3,169.8c-3.7,1.1-3,8.4-2.5,11.4,1.2,7,7.4,12.8,9.8,19.4,3.5,9.8-2,7.6-5.8,1.2-3.3-5.5-5.1-19.5-10.5-21.8-8.7-3.7-9.1,9-8.2,14.4.8,5.4,9.4,20.2,13.2,24.4,14.5,16.1,29.7,2.1,28-16.4-.8-9.3-11.7-36.4-24-32.6ZM29.4,205.2c-2.5.2-5.6,5.1-6.6,7.2-12,26.1,9,64.5,39.8,45.2,8.2-5.1,12-19.2,2.3-23.7-11-5.1-13.6,18.6-24.1,8.7-9.3-8.7-3.1-20.7-5.2-31-.5-2.2-3.6-6.8-6.2-6.6Z"/>
              <path class="st1" d="M164.8,82.9c12.9-2.7,13.4,17.7.7,15.9-8.3-1.2-9.4-14.1-.7-15.9Z"/>
              <path class="st1" d="M93.3,103c3.1,2.6,2,8.5-2.4,8.9-3.7-2.3-5-7.2-.7-9.8,1-.3,2.3.2,3.1.9Z"/>
            </g>
          </svg>
        </router-link>
        
        <ul class="NavFooter">
          <li><router-link to="/Portfolio">Portfolio</router-link></li>
          <li><router-link to="/Parcours">Parcours</router-link></li>
          <li><router-link to="/Passions">Passions</router-link></li>
          <li>Mentions Légales</li>
        </ul>
      </div>
      <div class="MentionsFooter">
        <p class="CreditFooter">Lucas Legendre X Studio Aosagi 2025</p>
        <p class="CallToActionFooter">Follow me on my network !</p>
      </div>
      <div class="BaseOverlayPrenomFooter">
        <div class="OverlayPrenomFooter">
          <p class="NomFooter">Lucas Legendre</p>
          <p class="PrenomFooter">Lu<span v-if="showBreak"><br></span>cas</p>
        </div>
      </div>
      <div class="ReseauFooter">
        <a href="https://github.com/Legluc" class="LienLogoReseau"> 
          <svg id="LogoGithub" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 126 126">
            <rect class="st1" x="4.9" y="4.9" width="116.3" height="116.3" rx="28.6" ry="28.6"/>
            <path class="st0" d="M52,104.7c-.4,1.3-2.3,1.3-3.4,1.1-8.7-1.6-20.1-12.3-24.4-19.9C2.5,47.9,43.3,6.4,82.4,24.4c35,16.1,33.5,67.4-2.4,80.6-2,.7-5.5,2.2-5.9-1.1-.8-6.6,2.1-14.9-2.8-20.3,11.1-.9,18.8-6.1,20.1-17.6s.1-9.3-2.5-13.6-1.8-2.1-1.8-2.3c0-.5.6-2.1.7-2.8.3-2.9,0-5.9-1.1-8.6-4.4-1-8.8,2.2-12.5,4.3-7.2-1.9-15-2-22.2,0-3.7-2.1-7.9-5-12.3-4.4-1.2.8-1.7,6.2-1.5,7.7s.9,3.2.8,3.9-1.4,1.9-1.9,2.6c-5.3,9-2.6,23.2,7,28.2,3.4,1.7,6.5,2.1,10.1,2.8s.6,0,.4.4-1.3,1.4-1.7,2.2-.6,2.3-1.1,3.4c-2.5,1.2-5.9,1.4-8.5.4-4.7-1.9-5.3-8.5-11.3-8.7-5.2-.1.9,3.4,1.8,4.4,2.3,2.4,2.7,5.8,5,8.1,3.6,3.5,8.3,3.3,12.9,2.7-.4,2.1.5,6.4,0,8.3Z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/lucas-legendre-42a95b203/" class="LienLogoReseau">
            <svg id="LogoLinkedin" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 126 126">
              <rect class="st1" x="4.9" y="4.9" width="116.3" height="116.3" rx="28.6" ry="28.6"/>
              <g>
                <path class="st0" d="M101,101.1h-16v-29.7c0-.1-.6-1.7-.8-2-2.9-6-11.4-6-14.3,0s-.8,1.9-.8,2v29.7h-16v-47.9h16v6c5.9-7.4,15.1-9.4,23.2-4.2,3.9,2.5,8.6,8.8,8.6,13.7v32.4Z"/>
                <rect class="st0" x="26.4" y="53.2" width="16" height="47.9"/>
                <path class="st0" d="M33.9,24.9c12.6-.5,13.4,18,1.6,19.1-13.2,1.3-14.3-18.6-1.6-19.1Z"/>
              </g>
            </svg>
          </a>
      </div>
    </footer>
  </div>
</template>

<script>
import { ImagesIndex } from '@/data/images';
import CarouselGlobal from '@/components/CarouselGlobal.vue';
import CarouselSlidePassion from '@/components/CarouselSlidePassion.vue';
import gsap from 'gsap';

export default {
  name: "IndexPage",
  components: {
    CarouselGlobal,
  },
  data() {
    return {
      ImagesIndex,
      screenWidth: window.innerWidth,
      imagesPassion: [
        {
          link: '/PassionRando',
          image: ImagesIndex.Randonneur,
          alt: 'Le randonneur',
          title: 'Le randonneur'
        },
        {
          link: '/PassionVoyage',
          image: ImagesIndex.Voyageur,
          alt: 'Le voyageur',
          title: 'Le voyageur'
        },
        {
          link: '/PassionJeuxVideo',
          image: ImagesIndex.Geek,
          alt: 'Le geek',
          title: 'Le joueur'
        },
      ],
    };
  },
  computed: {
    slideCompPassion() {
      return CarouselSlidePassion;
    },
    showBreak() {
      return this.screenWidth <= 768;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenWidth);
    if (this.screenWidth >= 768) {
      this.initScrollSnap();
    }
    if (this.$route.hash) {
      this.scrollToHash();
    }
  },
  watch: {
    '$route.hash'(newHash) {
      if (newHash) {
        this.scrollToHash();
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenWidth);
    if (this.screenWidth >= 768) {
      window.removeEventListener('wheel', this.throttledScrollHandler);
      window.removeEventListener('keydown', this.throttledKeyHandler);
    }
  },
  methods: {
    handleMesPassionsClick() {
      // Si le hash est déjà "#MesPassions", on force l'animation
      console.log(this.$route.hash)
      if (this.$route.hash === "#MesPassions") {
        this.scrollToHash();
      }
    },
    scrollToHash() {
      this.$nextTick(() => {
        const targetId = this.$route.hash.replace('#', '');
        const sections = document.querySelectorAll('section');
        const index = Array.from(sections).findIndex(
          (section) => section.id === targetId
        );
        if (index !== -1) {
          this.goToSection(index);
        }
      });
    },
    updateScreenWidth() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.screenWidth = window.innerWidth;
      }, 200);
    },
    initScrollSnap() {
      // Initialisation de l'index courant
      this.currentSectionIndex = 0;
      // Création des versions throttle des gestionnaires
      this.throttledScrollHandler = this.throttle(this.handleScroll, 600);
      this.throttledKeyHandler = this.throttle(this.handleKey, 600);
      window.addEventListener('wheel', this.throttledScrollHandler, { passive: false });
      window.addEventListener('keydown', this.throttledKeyHandler);
    },
    // Implémentation simple d'une fonction throttle
    throttle(func, limit) {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },
    // Gestionnaire de l'événement wheel
    handleScroll(e) {
      if (this.screenWidth <= 768) return; // désactivation sur mobile/tablette
      e.preventDefault();
      if (this.isAnimating) return;
      
      const delta = e.deltaY;
      if (delta > 0) {
        // Scroll vers le bas
        this.goToSection(this.currentSectionIndex + 1);
      } else if (delta < 0) {
        // Scroll vers le haut
        this.goToSection(this.currentSectionIndex - 1);
      }
    },
    // Gestionnaire de l'événement keydown pour les flèches
    handleKey(e) {
      if (this.screenWidth <= 768) return;
      if (this.isAnimating) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.goToSection(this.currentSectionIndex + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.goToSection(this.currentSectionIndex - 1);
      }
    },
    // Fonction pour animer le scroll vers la section souhaitée
    goToSection(index) {
      const sections = document.querySelectorAll('section');
      // Vérification des limites
      if (index < 0 || index >= sections.length) return;
      this.isAnimating = true;
      this.currentSectionIndex = index;
      const targetPosition = sections[index].offsetTop;
      gsap.to(document.scrollingElement || document.documentElement, {
        duration: 0.7,
        scrollTop: targetPosition,
        ease: "power2.out",
        onComplete: () => {
          this.isAnimating = false;
        }
      });
    }
  }
};
</script>
<style  lang="scss">
  @use '@/assets/scss/pages/index' as *;

</style>
