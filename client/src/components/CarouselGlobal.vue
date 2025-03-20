<template>
    <div class="Carousel"
    @mousedown="startSwipe"
    @mousemove="onSwipe"
    @mouseup="endSwipe"
    @mouseleave="endSwipe"
    @touchstart="startSwipe"
    @touchmove="onSwipe"
    @touchend="endSwipe"
    >
      <div class="CarouselContainer" ref="carouselContainer">
        <component
        v-for="(image, index) in extendedImages"
        :key="index"
        :is="resolvedSlideComponent"
        :slide="image"
        :class="{ active: index === currentSlide }"
      />
      </div>
      <div class="Indicators">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === getIndicatorIndex() }"
          class="Indicator"
          @click="changeSlide(index)"
        ></span>
      </div>

    </div>
  </template>

<script>
import { gsap } from "gsap";
import {
  carouselProps,
  carouselData,
  carouselComputed,
  carouselMethods,
} from '@/utils/Carousel.js';

import CarouselSlide from './CarouselSlide.vue';


export default {
  name: 'CarouselGlobal',
  props: {
    ...carouselProps,
    slideComponent: {
      type: [Object, String],
      default: null
    }
  },

  data() {
    return {
      ...carouselData(),

      // Variables pour le swipe
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isSwiping: false,
      swipeDirection: null, // 'horizontal' ou 'vertical'
    };
  },

  computed: {
    ...carouselComputed,

    // On renvoie le composant passé en prop, ou par défaut l'ancien "CarouselSlide"
    resolvedSlideComponent() {
      const comp = this.slideComponent || CarouselSlide;
      return comp;
    },

    // Clonage des images pour l'effet infini
    extendedImages() {
      return [
        this.images[this.images.length - 1],
        ...this.images,
        this.images[0],
      ];
    },
  },

  methods: {
    ...carouselMethods,

    // Changement de slide via les indicateurs
    changeSlide(index) {
      this.stopAutoSlide();
      this.animateSlideTo(index);
      this.currentSlide = index;
      this.startAutoSlide();
    },

    getIndicatorIndex() {
      if( this.currentSlide === this.images.length ){
        return 0 ;
      } 
      return this.currentSlide;
    },
    
    // Gestion du swipe
    // startSwipe(event) {
      //   event.preventDefault();
      //   this.isSwiping = true;
      //   this.startX = event.type === 'touchstart'
      //     ? event.touches[0].clientX
      //     : event.clientX;
      //   this.deltaX = 0;
      
      //   window.addEventListener('mousemove', this.onSwipe);
      //   window.addEventListener('mouseup', this.endSwipe);
      //   window.addEventListener('touchmove', this.onSwipe);
      //   window.addEventListener('touchend', this.endSwipe);
      
      //   this.stopAutoSlide();
      // },
      
      // onSwipe(event) {
      //   if (!this.isSwiping) return;
  
      //   const currentX =
      //     event.type === "touchmove"
      //       ? event.touches[0].clientX
      //       : event.clientX;
  
      //   // Calcul du déplacement en pixels
      //   this.deltaX = currentX - this.startX;
  
      //   const containerEl = this.$refs.carouselContainer;
      //   if (!containerEl) return;
  
      //   // Conversion des pixels en pourcentage
      //   const containerWidth = containerEl.offsetWidth;
      //   const deltaPercent = (this.deltaX / containerWidth) * 100;
  
      //   // Application du déplacement temporaire
      //   gsap.to(containerEl, {
        //     xPercent: -((this.currentSlide + 1) * 100) + deltaPercent,
        //     duration: 0,
        //   });
        // },
        
            // endSwipe() {
            //   if (!this.isSwiping) return;
        
            //   const threshold = 20; // Pourcentage de déplacement nécessaire pour changer de slide
            //   const containerEl = this.$refs.carouselContainer;
            //   if (!containerEl) {
            //     this.isSwiping = false;
            //     this.deltaX = 0;
            //     this.startAutoSlide();
            //     return;
            //   }
        
            //   // Conversion des pixels en pourcentage
            //   const containerWidth = containerEl.offsetWidth;
            //   const deltaPercent = (this.deltaX / containerWidth) * 100;
        
            //   if (Math.abs(deltaPercent) > threshold) {
            //     if (deltaPercent > 0) {
            //       this.prevSlide();
            //     } else {
            //       this.nextSlide();
            //     }
            //   } else {
            //     // Retour à la position initiale
            //     this.animateSlideTo(this.currentSlide);
            //   }
        
            //   this.isSwiping = false;
            //   this.deltaX = 0;
            //   this.startAutoSlide();
            // },

    startSwipe(event) {
      // On n'empêche pas le comportement par défaut ici
      this.isSwiping = true;
      this.swipeDirection = null;
      if (event.type === 'touchstart') {
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      } else {
        this.startX = event.clientX;
        this.startY = event.clientY;
      }
      this.deltaX = 0;
      this.deltaY = 0;

      window.addEventListener('mousemove', this.onSwipe);
      window.addEventListener('mouseup', this.endSwipe);
      window.addEventListener('touchmove', this.onSwipe);
      window.addEventListener('touchend', this.endSwipe);

      this.stopAutoSlide();
    },

    onSwipe(event) {
      if (!this.isSwiping) return;

      let currentX, currentY;
      if (event.type === 'touchmove') {
        currentX = event.touches[0].clientX;
        currentY = event.touches[0].clientY;
      } else {
        currentX = event.clientX;
        currentY = event.clientY;
      }

      this.deltaX = currentX - this.startX;
      this.deltaY = currentY - this.startY;

      // Détermination de la direction du swipe (si non déjà définie)
      if (!this.swipeDirection) {
        if (Math.abs(this.deltaX) > Math.abs(this.deltaY)) {
          this.swipeDirection = 'horizontal';
        } else if (Math.abs(this.deltaY) > Math.abs(this.deltaX)) {
          this.swipeDirection = 'vertical';
        }
      }

      if (this.swipeDirection === 'horizontal') {
        // Empêche le scroll vertical si c'est un swipe horizontal
        event.preventDefault();

        const containerEl = this.$refs.carouselContainer;
        if (!containerEl) return;

        const containerWidth = containerEl.offsetWidth;
        const deltaPercent = (this.deltaX / containerWidth) * 100;

        // Application du déplacement temporaire avec GSAP
        gsap.to(containerEl, {
          xPercent: -((this.currentSlide + 1) * 100) + deltaPercent,
          duration: 0,
        });
      }
      // Si c'est vertical, on ne fait rien de particulier et on laisse le navigateur gérer le scroll
    },

    endSwipe() {
      if (!this.isSwiping) return;

      // Ne traite le changement de slide que pour un swipe horizontal
      if (this.swipeDirection === 'horizontal') {
        const threshold = 20; // Pourcentage de déplacement nécessaire pour changer de slide
        const containerEl = this.$refs.carouselContainer;
        if (containerEl) {
          const containerWidth = containerEl.offsetWidth;
          const deltaPercent = (this.deltaX / containerWidth) * 100;

          if (Math.abs(deltaPercent) > threshold) {
            if (deltaPercent > 0) {
              this.prevSlide();
            } else {
              this.nextSlide();
            }
          } else {
            // Retour à la position initiale si le geste est insuffisant
            this.animateSlideTo(this.currentSlide);
          }
        }
      }
      
      // Réinitialisation des variables de swipe
      this.isSwiping = false;
      this.swipeDirection = null;
      this.deltaX = 0;
      this.deltaY = 0;
      this.startAutoSlide();
    },


  },

  components: { CarouselSlide },

  mounted() {
    this.$nextTick(() => {
      // Positionnement initial du container
      gsap.set(this.$refs.carouselContainer, {
        xPercent: -100, // Commence sur la première image réelle
      });

      // Démarrage de l'auto-slide
      setTimeout(() => {
        this.startAutoSlide();
      }, 100);
    });
  },

  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>
  
<style lang="scss">
  @use '@/assets/scss/components/carousel' as *;

</style>  