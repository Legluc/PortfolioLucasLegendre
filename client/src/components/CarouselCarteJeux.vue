<template>
  <div class="CarouselJeu"
    @mouseenter="stopAutoSlide"
    @mouseleave="startAutoSlide"
  >
  <div class="CarouselJeuContainer" ref="carouselContainer">
    <CarteJeux
      v-for="(CarteJeux, index) in displayedCards"
      :key="index"
      :class="{ flipped: CarteJeux.isFlipped }"
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
      :isFlipped="CarteJeux.isFlipped"
      @flip-card="toggleFlip(index)"
    >
    </CarteJeux>
    </div>
      <div class="IndicatorsJeu">
        <span
          v-for="(CarteJeux, i) in CartesJeux"
          :key="i"
          :class="{ active: i === getIndicatorIndex() }"
          class="IndicatorJeu"
          @click="changeSlide(i)"
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
            isFlipped: false,
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
            isFlipped: false,
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
            isFlipped: false,
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
            isFlipped: false,
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
            isFlipped: false,
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
            isFlipped: false,
          },
          {
            jeu: "Card 7",
            image: "/images/card1.jpg",
            typeJeu: "MMORPG",
            effetSpecial: "Spécial effect",
            description: "This is the first card's description.",
            studio: "Nitendo",
            dateSortie: "2012",
            personnage: "More Info 1",
            histoire: "Details about the first card.",
            backgroundImage:"/images/backcard1.jpg",
            isFlipped: false,
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
    displayedCards() {
      if (!this.CartesJeux || this.CartesJeux.length === 0) {
        return [];
      }

      return [
    { ...this.CartesJeux[this.CartesJeux.length - 1], originalIndex: this.CartesJeux.length - 1 }, // Clone de la dernière carte (placé au début)
    ...this.CartesJeux.map((card, index) => ({ ...card, originalIndex: index })), // Cartes originales
    { ...this.CartesJeux[0], originalIndex: 0 }, // Clone de la première carte (placé à la fin)
    { ...this.CartesJeux[1], originalIndex: 1 }, // Clone de la deuxième carte (placé à la fin)
  ];
    },
  },

  methods: {
    ...carouselCarteMethods,

    toggleFlip(index) {
    const originalIndex = this.displayedCards[index].originalIndex;

    // Alterne l'état flipped pour toutes les cartes liées
    this.CartesJeux.forEach((card, idx) => {
      if (idx === originalIndex) {
        card.isFlipped = !card.isFlipped;
      }
    });

      // Force une synchronisation avec les clones
      this.$forceUpdate();
    },

    updateFlipState() {
      const totalCards = this.CartesJeux.length;
      const centerIndex = (this.currentSlide + 1) % totalCards; // +1 pour viser le centre (ou clone correspondant)

      this.CartesJeux.forEach((card, index) => {
        card.isFlipped = index === centerIndex;
      });

      this.$forceUpdate(); // Assure une mise à jour visuelle
    },

    changeSlide(i) {
      this.stopAutoSlide();    // Stoppe l'auto-slide en cours
      this.currentSlide = i; // Met à jour la slide active
      this.updateFlipState();
      this.animateSlide();
    },

    getIndicatorIndex() {
      if( this.currentSlide === -1 ){
        return this.CartesJeux.length - 1;
      } else if (this.currentSlide === this.CartesJeux.length) {
        return 0;
      }
      return this.currentSlide;
    },
    
    nextSlide() {
      this.currentSlide++;
      this.updateFlipState();
      this.animateSlide();
    },
    prevSlide() {
      this.currentSlide--;
      this.updateFlipState();
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
        },
      });
    },
  },

  mounted() {
    // On se place directement sur la slide 1 (car 0 = clone) sans animation
    gsap.set(this.$refs.carouselContainer, { x: '-20%' });
    this.startAutoSlide(); // si tu veux l'autoslide
    this.updateFlipState();

    this.CartesJeux = this.CartesJeux.map((card) => ({
    ...card,
    isFlipped: card.isFlipped || false, // Ajoute isFlipped si absent
  }));
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style lang="scss">
  @use '@/assets/scss/components/carouselCarteJeux' as *;

</style>
  