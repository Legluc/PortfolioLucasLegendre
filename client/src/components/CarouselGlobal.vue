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
      // Gestion du tactile
      if (event.type === "touchstart") {
        this.isSwiping = true;
        this.startX = event.touches[0].clientX;
        this.deltaX = 0;
        this.stopAutoSlide();
        return;
      }

      // Gestion de la souris : vérifie que le bouton est bien le bouton gauche
      if (event.type === "mousedown" && event.button === 0) {
        this.isSwiping = true;
        this.startX = event.clientX;
        this.deltaX = 0;
        this.stopAutoSlide();
        console.log("start")
      }
    },

    onSwipe(event) {
      if (!this.isSwiping) return; // Ignore si aucun swipe n'est en cours

      const currentX = event.type === "touchmove"
        ? event.touches[0].clientX
        : event.clientX;

      this.deltaX = currentX - this.startX;
      console.log("onSwipe")
    },

    endSwipe() {
      if (!this.isSwiping) return;

      const threshold = 200; // Distance minimale pour changer de slide
      if (Math.abs(this.deltaX) > threshold) {
        if (this.deltaX > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      }

      this.isSwiping = false;
      this.deltaX = 0;
      this.startAutoSlide(); // Redémarre l'autoplay
      console.log("endSwipe")
    },
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