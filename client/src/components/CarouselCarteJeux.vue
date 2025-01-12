<template>
  <div class="CarouselJeu"
    @mousedown="startSwipe"
    @mousemove="onSwipe"
    @mouseup="endSwipe"
    @mouseleave="endSwipe"
    @touchstart="startSwipe"
    @touchmove="onSwipe"
    @touchend="endSwipe"
  >
  <div class="CarouselJeuContainer" ref="carouselContainer">
    <CarteJeux
      v-for="(CarteJeux, index) in displayedCards"
      :key="index"
      :jeu="CarteJeux.jeu"
      :image="CarteJeux.image"
      :typeJeu="CarteJeux.typeJeu"
      :effetSpecial="CarteJeux.effetSpecial"
      :description="CarteJeux.description"
      :studio="CarteJeux.studio"
      :dateSortie="CarteJeux.dateSortie"
      :personnage="CarteJeux.personnage"
      :histoire="CarteJeux.histoire"
      :backgroundImage="CarteJeux.backgroundImage"
    >
    </CarteJeux>
    </div>
      <div class="IndicatorsJeu">
        <span
          v-for="(CarteJeux, index) in CartesJeux"
          :key="index"
          :class="{ active: index === (currentSlide - 1) }"
          class="IndicatorJeu"
          @click="changeSlide(index)"
        ></span>
      </div>
    </div>
</template>
  
<script>
  import { gsap } from 'gsap';
  import CarteJeux from '@/components/CarteJeux.vue';

  import {
    carouselData,
    carouselCarteMethods,
  } from '@/utils/Carousel.js';
  
  export default {
    name: 'CarouselCarteJeux',
    components: { CarteJeux },

    data() {
      return {
        CartesJeux: [
          {
            jeu: "Card 1",
            image: "/images/card1.jpg",
            typeJeu: "MMORPG",
            effetSpecial: "Spécial effect",
            description: "This is the first card's description.",
            studio: "Nitendo",
            dateSortie: "2012",
            personnage: "More Info 1",
            histoire: "Details about the first card.",
            backgroundImage:"/images/backcard1.jpg",
          },
          {
            jeu: "Card 2",
            image: "/images/card1.jpg",
            typeJeu: "MMORPG",
            effetSpecial: "Spécial effect",
            description: "Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien. Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien.",
            studio: "Nitendo",
            dateSortie: "2012",
            personnage: "More Info 1",
            histoire: "Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien. Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien.Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien. Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien.",
            backgroundImage:"/images/backcard1.jpg",
          },
          {
            jeu: "Card 3",
            image: "/images/card1.jpg",
            typeJeu: "MMORPG",
            effetSpecial: "Spécial effect",
            description: "This is the first card's description.",
            studio: "Nitendo",
            dateSortie: "2012",
            personnage: "More Info 1",
            histoire: "Details about the first card.",
            backgroundImage:"/images/backcard1.jpg",
          },
          {
            jeu: "Card 4",
            image: "/images/card1.jpg",
            typeJeu: "MMORPG",
            effetSpecial: "Spécial effect",
            description: "This is the first card's description.",
            studio: "Nitendo",
            dateSortie: "2012",
            personnage: "More Info 1",
            histoire: "Details about the first card.",
            backgroundImage:"/images/backcard1.jpg",
          },
          {
            jeu: "Card 5",
            image: "/images/card1.jpg",
            typeJeu: "MMORPG",
            effetSpecial: "Spécial effect",
            description: "Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien. Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien.",
            studio: "Nitendo",
            dateSortie: "2012",
            personnage: "More Info 1",
            histoire: "Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien. Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien.Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien. Praesent elit justo, fermentum ut vulputate vitae, rutrum quis sapien.",
            backgroundImage:"/images/backcard1.jpg",
          },
          {
            jeu: "Card 6",
            image: "/images/card1.jpg",
            typeJeu: "MMORPG",
            effetSpecial: "Spécial effect",
            description: "This is the first card's description.",
            studio: "Nitendo",
            dateSortie: "2012",
            personnage: "More Info 1",
            histoire: "Details about the first card.",
            backgroundImage:"/images/backcard1.jpg",
          },
        ],
        // currentSlide = index “virtuel” dans displayedCards
        currentSlide: 1, 
        // On désactive ici l’autoSlide pour simplifier, libre à toi de le remettre
        interval: null, 
        startX: 0,
        deltaX: 0,
        isSwiping: false,
        ...carouselData(),
      };
    },
    computed: {
    // On crée la liste “enrichie” avec un clone en début et fin
    displayedCards() {
      if (!this.CartesJeux || this.CartesJeux.length === 0) {
        return [];
      }
      // Clone la dernière carte en début
      const firstClone = this.CartesJeux[this.CartesJeux.length - 1];
      // Clone la première carte en fin
      const lastClone = this.CartesJeux[0];
      const lastClone2 = this.CartesJeux[1];

      return [firstClone, ...this.CartesJeux, lastClone, lastClone2];
    },
  },

  methods: {
    ...carouselCarteMethods,

    jumpToSlide(index) {
      // On veut que l'indicateur 0 corresponde au slide 1
      // (car 0 = clone de fin en realité).
      this.currentSlide = index + 1; 
      this.animateSlide();
    },

    nextSlide() {
      this.currentSlide++;
      this.animateSlide();
    },
    prevSlide() {
      this.currentSlide--;
      this.animateSlide();
    },

    animateSlide() {
      const offset = 20 + (this.currentSlide * 30);
      console.log(this.currentSlide);
      console.log(offset);

      // Animation GSAP sur le container
      gsap.to(this.$refs.carouselContainer, {
        x: `-${offset}%`,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          // Vérifie si on est arrivé à la “vraie” fin (dernier clone) → on saute au début
          if (this.currentSlide === this.CartesJeux.length - 1 ) {

            // slide n-1 = le clone de la 1ere carte
            this.currentSlide = -1;
            console.log(this.currentSlide);
            
            // On enlève la transition pour “sauter” discrètement à la slide 1
            gsap.set(this.$refs.carouselContainer, { x: `10%` });
          }

          // Vérifie si on est au tout début (0) → on saute à la fin
          // if (this.currentSlide === 0) {
          //   this.currentSlide = this.CartesJeux.length;
          //   // x = this.CartesJeux.length * 20 => la “vraie” dernière carte
          //   gsap.set(this.$refs.carouselContainer, { x: `-${20 * this.CartesJeux.length}%` });
          // }
        },
      });
    },
    

    // Swipe logic identique à ce que tu as, sauf qu'on remplace nextSlide / prevSlide par animateSlide
    startSwipe(event) {
      event.preventDefault();
      this.isSwiping = true;
      this.startX = event.type === 'touchstart'
        ? event.touches[0].clientX
        : event.clientX;
      this.deltaX = 0;
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
    gsap.set(this.$refs.carouselContainer, {
      x: `calc(-${20 + (this.currentSlide * 30)}% + ${(this.deltaX / this.$el.clientWidth) * 100}%)`
    });
  },

    endSwipe() {
      if (!this.isSwiping) return;
      window.removeEventListener('mousemove', this.onSwipe);
      window.removeEventListener('mouseup', this.endSwipe);

      const threshold = 80; // 80 px par exemple
      if (Math.abs(this.deltaX) > threshold) {
        if (this.deltaX > 0) {
          // swipe droite => prev
          this.prevSlide();
        } else {
          // swipe gauche => next
          this.nextSlide();
        }
      } else {
        // Reviens à la position initiale
        this.animateSlide();
      }
      this.isSwiping = false;
      this.deltaX = 0;
      this.startAutoSlide();
    },
  },

  mounted() {
    // On se place directement sur la slide 1 (car 0 = clone) sans animation
    gsap.set(this.$refs.carouselContainer, { x: '-20%' });
    this.startAutoSlide(); // si tu veux l'autoslide
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style lang="scss">
  @use '@/assets/scss/components/carouselCarteJeux' as *;

</style>
  