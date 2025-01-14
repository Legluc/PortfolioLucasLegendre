// utils/Carousel.js
import { gsap } from "gsap";

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

export const carouselComputed = {
  // Aucun calcul nécessaire ici car nous utilisons xPercent
};

export const carouselMethods = {
  // Passage à la slide suivante
  nextSlide() {
    this.currentSlide++;

    if (this.currentSlide >= this.images.length) {
      // Si on dépasse la dernière slide, repositionnement infini
      this.handleInfiniteScroll(0);
    } else {
      // Animation normale vers la prochaine slide
      this.animateSlideTo(this.currentSlide);
    }
  },

  // Passage à la slide précédente
  prevSlide() {
    this.currentSlide--;

    if (this.currentSlide < 0) {
      // Si on est avant la première slide, repositionnement infini
      this.handleInfiniteScroll(this.images.length - 1);
    } else {
      // Animation normale vers la slide précédente
      this.animateSlideTo(this.currentSlide);
    }
  },

  // Animation vers une slide spécifique
  animateSlideTo(index) {
    const containerEl = this.$refs.carouselContainer;
    if (!containerEl) return;

    gsap.to(containerEl, {
      xPercent: -((index + 1) * 100), // +1 à cause du clone initial
      duration: 0.5,
      ease: "power2.out",
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
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  },
  

  // Arrêt de l'auto-slide
  stopAutoSlide() {
    clearInterval(this.interval);
  },
};


  export const carouselCarteMethods = {
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
  };




  