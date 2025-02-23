// utils/Carousel.js
import { gsap } from "gsap";

// CAROUSEL GLOBAL

export const carouselProps = {
  images: {
    type: Array,
    required: true,
  },
};

export const carouselData = () => ({
  currentSlide: 0, // Index de la slide active (0 à images.length - 1)
  interval: null,  // ID de l'intervalle pour l'auto-slide
});

export const carouselMethods = {
  // Passage à la slide suivante
  nextSlide() {
    this.currentSlide++;
      // Animation normale vers la prochaine slide
      this.animateSlideTo(this.currentSlide);
  },

  // Passage à la slide précédente
  prevSlide() {
    this.currentSlide--;
      // Animation normale vers la slide précédente
      this.animateSlideTo(this.currentSlide);
  },
  
  // Animation vers une slide spécifique
  animateSlideTo(index) {
    const containerEl = this.$refs.carouselContainer;
    if (!containerEl) return;

    gsap.to(containerEl, {
      xPercent: -((index + 1) * 100), // +1 à cause du clone initial
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        if (this.currentSlide >= this.images.length) {
          this.handleInfiniteScroll(0);
        } else if(this.currentSlide < 0) {
          // Si on est avant la première slide, repositionnement infini
          this.handleInfiniteScroll(this.images.length - 1);
        }
      }
    });
  },

  // Repositionnement pour l'effet infini
  handleInfiniteScroll(targetIndex) {
    const containerEl = this.$refs.carouselContainer;
    if (!containerEl) return;


    // Position instantanée sans animation
    gsap.set(containerEl, {
      xPercent: -((targetIndex + 1) * 100),
    });

    this.currentSlide = targetIndex;
  },

  // Démarrage de l'auto-slide
  startAutoSlide() {
    this.stopAutoSlide();
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  },
  

  // Arrêt de l'auto-slide
  stopAutoSlide() {
    clearInterval(this.interval);
    this.interval = null;
  },
};

// CAROUSEL CARTE

  export const carouselCarteMethods = {
    startAutoSlide() {
      this.stopAutoSlide();
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 40000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
      this.interval = null;
    },
  };




  