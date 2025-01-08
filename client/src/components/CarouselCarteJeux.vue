<template>
    <div class="CarouselJeu">
      <div class="CarouselJeuContainer" :style="{ transform: getTransformStyle }">
        <CarteJeux
          v-for="(CarteJeux, index) in CartesJeux"
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
          :class="{ active: index === currentSlide }"
          class="IndicatorJeu"
          @click="changeSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
import CarteJeux from '@/components/CarteJeux.vue';
  
  export default {
    name: 'CarouselCarteJeux',
    components: { CarteJeux },
    data() {
      return {
        currentSlide: 0,
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
        ],
      };
    },
    computed: {
      getTransformStyle() {
        return `translateX(-${this.currentSlide * 100}%)`;
      },
    },
    methods: {
      changeSlide(index) {
        this.currentSlide = index;
      },
    },
  };
</script>

<style lang="scss">
  @use '@/assets/scss/components/carouselCarteJeux' as *;

</style>
  