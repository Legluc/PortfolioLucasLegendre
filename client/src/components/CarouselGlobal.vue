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
      <div class="CarouselContainer" :style="{ transform: getTransformStyle }">
        <CarouselSlide
        v-for="(image, index) in images"
        :key="index"
        :slide="image"
      />
      </div>
      <div class="Indicators">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentSlide }"
          class="Indicator"
          @click="changeSlide(index)"
        ></span>
      </div>

    </div>
  </template>

<script>
import {
    carouselProps,
    carouselData,
    carouselComputed,
    carouselMethods,
} from '@/utils/Carousel.js';

import CarouselSlide from './CarouselSlide.vue';
export default {
  name: 'CarouselGlobal',
  props: carouselProps,
  data() {
    return {
      ...carouselData(),
      startX: 0, // Position de départ du swipe
      deltaX: 0, // Distance parcourue par le swipe
      isSwiping: false, // Indique si un swipe est en cours
    };
  },
  computed: {
    ...carouselComputed,
    getSwipeTransformStyle() {
      // Si en train de swiper, applique le déplacement relatif
      if (this.isSwiping) {
        const offset = -this.currentSlide * 100 + (this.deltaX / this.$el.offsetWidth) * 100;
        return `translateX(${offset}%)`;
      }
      return this.getTransformStyle;
    },
  },
  methods: {
    ...carouselMethods,
    changeSlide(index) {
      this.stopAutoSlide();    // Stoppe l'auto-slide en cours
      this.currentSlide = index; // Met à jour la slide active
      this.startAutoSlide();   // Redémarre l'auto-slide
    },

    startSwipe(event) {
  // Empêche le comportement par défaut (sélection de texte par exemple).
  event.preventDefault();

  this.isSwiping = true;
  this.startX = event.type === 'touchstart'
    ? event.touches[0].clientX
    : event.clientX;
  this.deltaX = 0;

  // On écoute le mouvement de la souris et le relâchement sur le window,
  // comme ça on ne perd pas les events quand on sort du composant.
  window.addEventListener('mousemove', this.onSwipe);
  window.addEventListener('mouseup', this.endSwipe);

  this.stopAutoSlide();
},
onSwipe(event) {
  if (!this.isSwiping) return;

  const currentX = event.type === 'touchmove'
    ? event.touches[0].clientX
    : event.clientX;

  this.deltaX = currentX - this.startX;
},
endSwipe() {
  if (!this.isSwiping) return;

  window.removeEventListener('mousemove', this.onSwipe);
  window.removeEventListener('mouseup', this.endSwipe);

  const threshold = 100;
  if (Math.abs(this.deltaX) > threshold) {
    if (this.deltaX > 0) {
      this.prevSlide();
    } else {
      this.nextSlide();
    }
  }

  this.isSwiping = false;
  this.deltaX = 0;
  this.startAutoSlide();
}


  },
  components: { CarouselSlide },
  mounted() {
    this.startAutoSlide(); // Démarre le changement automatique
  },
  beforeUnmount() {
    this.stopAutoSlide(); // Stoppe l'intervalle lors de la destruction du composant
  },
};
</script>
  
<style lang="scss">
  @use '@/assets/scss/components/carousel' as *;

</style>  