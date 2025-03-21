<template>
  <div class="CarouselJeu"
    @mouseenter="stopAutoSlide"
    @mouseleave="handleMouseLeave"
    @mousedown="startSwipe"
    @mousemove="onSwipe"
    @mouseup="endSwipe"
    @touchstart="startSwipe"
    @touchmove="onSwipe"
    @touchend="endSwipe"
  >
    <div class="CarouselJeuContainer" ref="carouselContainer">
      <CarteJeux
        v-for="(CarteJeux, index) in displayedCards"
        :key="index"
        :class="{ flipped: CarteJeux.isFlipped }"
        :id="CarteJeux.id"
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
  import {FlipCardJeu} from '@/data/images';


  import {
    carouselData,
    carouselCarteMethods,
  } from '@/utils/Carousel.js';
  
  export default {
    name: 'CarouselCarteJeux',
    components: { CarteJeux },

    data() {
      return {

        cardsToShow: 3,
        autoSlideTime: 4000,     // Par ex. 4 secondes pour chaque slide
        flipTimeout: null,       // Gèrera le flip “retardé” quand 1 carte visible
        // Variables swipe
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isSwiping: false,
        swipeDirection: null, // 'horizontal' ou 'vertical'

        CartesJeux: [
          {
            id: "WoW",
            jeu: "World Of Warcraft",
            image: FlipCardJeu.WorldOfWarcraftRecto,
            typeJeu: "MMORPG",
            description: "Au cœur d'Azeroth, un monde riche en histoires et en légendes, choisissez votre camp entre la Horde sauvage et l'Alliance des hommes. Explorer, défendre sa faction, accomplir des quêtes ou s'unir pour vaincre les donjons les plus redoutables : voici comment World of Warcraft a révolutionné l’univers des MMORPG.",
            studio: "Blizzard Entertainment",
            dateSortie: "2004",
            personnage: "Aeldrin",
            histoire: "Sur WoW, Aeldrin est mon Chevalier de la mort, spécialisé dans la magie du sang pour résister aux attaques des boss les plus puissants d’Azeroth. Mon activité favorite ? Collectionner les montures les plus rares en explorant encore et encore les anciens raids et donjons du jeu.",
            backgroundImage:FlipCardJeu.WorldOfWarcraftVerso,
            isFlipped: false,
          },
          {
            id: "Subnautica",
            jeu: "Subnautica",
            image: FlipCardJeu.SubnauticaRecto,
            typeJeu: "Survival-Aventure sous-marine",
            description: "Après le crash du vaisseau Aurora, vous vous retrouvez seul dans une capsule de survie, flottant à la surface d'une planète entièrement recouverte d’eau. Explorez les fonds marins hostiles pour trouver un moyen de fuir ce monde aquatique. Percer les mystères d’une maladie qui contamine toute forme de vie devient alors votre unique espoir de survie.",
            studio: "Unknown Worlds Entertainment",
            dateSortie: "2018",
            personnage: "Ryley Robinson",
            histoire: "Ancien mécanicien du vaisseau Aurora et seul survivant du crash, Ryley doit plonger sans relâche pour survivre. Collecter des ressources, enquêter sur l’origine de la maladie qui l’infecte, et explorer toujours plus profondément les abysses pour fabriquer des outils toujours plus avancés : voilà son quotidien. Ici, nous sommes la proie et non le chasseur ; les rares armes ne servent qu’à créer une diversion pour fuir les dangers omniprésents.",
            backgroundImage:FlipCardJeu.SubnauticaVerso,
            isFlipped: false,
          },
          {
            id: "Skyrim",
            jeu: "The Elder Scrolls V: Skyrim",
            image: FlipCardJeu.SkyrimRecto,
            typeJeu: "Action-RPG en monde ouvert",
            effetSpecial: "Échappée Nordique",
            description: "Dans Skyrim, vous incarnez le Dovahkiin, un guerrier légendaire capable de parler la langue des dragons et de les terrasser. Dans les vastes étendues nordiques de Bordeciel, les possibilités d’aventure sont infinies. Que vous deveniez Maître de la Guilde des voleurs ou Archimage de l'Académie de Fortdhiver, c’est le RPG par excellence.",
            studio: "Bethesda Game Studios",
            dateSortie: "2011",
            personnage: "Ekhelmineon",
            histoire: "Après avoir échappé de justesse à ses geôliers et à Alduin, le Dévoreur de Mondes, Ekhelmineon, fier Elfe noir, se dirige vers l'Académie de Fortdhiver. Son destin de conjurateur nécromant et sauveur du monde est tout tracé. Une telle épopée ne s'invente pas !",
            backgroundImage:FlipCardJeu.SkyrimVerso,
            isFlipped: false,
          },
          {
            id: "Grounded",
            jeu: "Grounded",
            image: FlipCardJeu.GroundedRecto,
            typeJeu: "Survival-Aventure en monde miniature",
            description: "Dans Grounded, vous incarnez un adolescent ayant joué avec l’invention d’un savant déjanté, ce qui vous a réduit à la taille d’une fourmi. La survie repose alors sur votre capacité à collecter des miettes et des gouttes de rosée tout en explorant un immense jardin devenu hostile. Avec son esprit cartoon et son univers miniature, ce jeu de survie est une véritable bouffée d'air frais.",
            studio: "Obsidian Entertainment",
            dateSortie: "2020",
            personnage: "Pete",
            histoire: "Pete, un adolescent timide à lunettes, doit rapidement apprendre à survivre dans ce monde miniature. Après avoir affronté ses premières araignées, il devient un combattant agile et astucieux. Architecte ingénieux, il construit progressivement un réseau de bases interconnectées par des tyroliennes, faisant du jardin son propre terrain de jeu.",
            backgroundImage:FlipCardJeu.GroundedVerso,
            isFlipped: false,
          },
          {
            id: "Valheim",
            jeu: "Valheim",
            image: FlipCardJeu.ValheimRecto,
            typeJeu: "Survival-Sandbox en univers nordique",
            description: "Valheim plonge le joueur dans un univers de survie inspiré de la mythologie nordique. Vous incarnez un guerrier viking tombé au combat, envoyé dans le dixième monde d’Yggdrasil. Pour prouver votre valeur et gagner votre place au Valhalla, il vous faudra explorer, bâtir des forteresses, combattre des créatures légendaires et vaincre les anciens ennemis des dieux.",
            studio: "Iron Gate AB",
            dateSortie: "2021",
            personnage: "Aeldrin",
            histoire: "Dans cette aventure, j’ai choisi d’incarner un guerrier viking orienté vers la survie, équipé d'une armure lourde, d’un bouclier solide et d’une épée robuste. L’exploration et l’établissement régulier de nouvelles bases toujours plus éloignées sont la clé de la progression dans Valheim. Grâce à mon fidèle Drakkar, le transport des ressources devient plus simple, facilitant ainsi la traversée des mers qui séparent les nombreux biomes à découvrir.",
            backgroundImage:FlipCardJeu.ValheimVerso,
            isFlipped: false,
          },
          {
            id:"Poe2",
            jeu: "Path of Exile 2",
            image: FlipCardJeu.PathOfExile2Recto,
            typeJeu: "Hack'n'slash-RPG",
            description: "Dans Path of Exile 2, retrouvez la formule parfaite d'un hack'n'slash nerveux, technique et sombre. Son gameplay riche et profond s'allie à un univers dark fantasy soigné, aux décors immersifs et au bestiaire particulièrement varié. Encore en early access, ce jeu promet déjà de devenir une référence incontournable du genre.",
            studio: "Grinding Gear Games",
            dateSortie: "2023",
            personnage: "Ekhelmineon",
            histoire: "J'ai choisi de jouer la sorcière, car j’apprécie particulièrement le gameplay basé sur l’invocation nécrotique. Afin de terrasser efficacement les vagues d’ennemis, j'ai opté pour un build centré sur l’invocation de mages de glace, inspiré par mon personnage favori de WoW : Arthas Menethil.",
            backgroundImage:FlipCardJeu.PathOfExile2Verso,
            isFlipped: false,
          },
        ],
        // currentSlide = index “virtuel” dans displayedCards
        currentSlide: 1, 
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

    handleMouseLeave() {
      if (this.isSwiping) {
        this.endSwipe();
      } else {
        this.startAutoSlide();
      }
    },

    startSwipe(event) {
      this.isSwiping = true;
      this.swipeDirection = null;
      if (event.type.startsWith('touch')) {
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      } else {
        this.startX = event.clientX;
        this.startY = event.clientY;
      }
      this.deltaX = 0;
      this.deltaY = 0;

      // Arrête l'auto slide pendant le swipe
      this.stopAutoSlide();

      window.addEventListener('mousemove', this.onSwipe);
      window.addEventListener('mouseup', this.endSwipe);
      window.addEventListener('touchmove', this.onSwipe);
      window.addEventListener('touchend', this.endSwipe);
    },

    onSwipe(event) {
      if (!this.isSwiping) return;

      let currentX, currentY;
      if (event.type.startsWith('touch')) {
        currentX = event.touches[0].clientX;
        currentY = event.touches[0].clientY;
      } else {
        currentX = event.clientX;
        currentY = event.clientY;
      }

      this.deltaX = currentX - this.startX;
      this.deltaY = currentY - this.startY;

      if (!this.swipeDirection) {
        if (Math.abs(this.deltaX) > Math.abs(this.deltaY)) {
          this.swipeDirection = 'horizontal';
        } else if (Math.abs(this.deltaY) > Math.abs(this.deltaX)) {
          this.swipeDirection = 'vertical';
        }
      }

      if (this.swipeDirection === 'horizontal') {
        // On empêche le scroll vertical
        event.preventDefault();
        const containerEl = this.$refs.carouselContainer;
        if (!containerEl) return;
        const containerWidth = containerEl.offsetWidth;
        const deltaPercent = (this.deltaX / containerWidth) * 100;
        // Calcul de l'offset de base en fonction du slide courant
        const baseOffset = (100 / this.cardsToShow) * (this.currentSlide + 1);
        // On ajuste l'offset en fonction du swipe (attention aux proportions)
        const deltaOffset = deltaPercent / this.cardsToShow;
        gsap.to(containerEl, {
          x: `-${baseOffset - deltaOffset}%`,
          duration: 0,
        });
      }
    },

    endSwipe() {
      if (!this.isSwiping) return;

      if (this.swipeDirection === 'horizontal') {
        const containerEl = this.$refs.carouselContainer;
        const containerWidth = containerEl ? containerEl.offsetWidth : 0;
        const deltaPercent = (this.deltaX / containerWidth) * 100;
        const threshold = 10; // Pourcentage minimum pour changer de slide

        if (Math.abs(deltaPercent) > threshold) {
          if (deltaPercent > 0) {
            this.prevSlide();
          } else {
            this.nextSlide();
          }
        } else {
          // Retour à la position initiale en cas de swipe insuffisant
          this.animateSlide();
        }
      }

      // Réinitialisation
      this.isSwiping = false;
      this.swipeDirection = null;
      this.deltaX = 0;
      this.deltaY = 0;
      this.startAutoSlide();

      window.removeEventListener('mousemove', this.onSwipe);
      window.removeEventListener('mouseup', this.endSwipe);
      window.removeEventListener('touchmove', this.onSwipe);
      window.removeEventListener('touchend', this.endSwipe);
    },

    handleResize() {
      const w = window.innerWidth;
      if (w <= 768) {
        this.cardsToShow = 1;
      } else if (w <= 1440) {
        this.cardsToShow = 2;
      } else {
        this.cardsToShow = 3;
      }
    },

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
      // On annule tout flipTimeout pour éviter de cumuler les timers
      if (this.flipTimeout) {
        clearTimeout(this.flipTimeout);
        this.flipTimeout = null;
      }

      const totalCards = this.CartesJeux.length;

      // Détermine l’offset pour la carte à flipper (quand 2 ou 3 cartes visibles)
      let offset;
      if (this.cardsToShow === 3) {
        offset = 0; // carte du milieu
      } else{
        offset = -1; // carte de gauche
      }

      // Calcule l'index de la carte à flipper (quand 2 ou 3 visibles)
      const flipIndex = (this.currentSlide + 1 + offset) % totalCards;

      // =========================
      // 1) Mise à jour du flipped selon le nombre de cartes
      // =========================
      this.CartesJeux.forEach((card, index) => {
        if (this.cardsToShow === 1) {
          // On force la carte à être "recto" (isFlipped=false) pour l’instant
          card.isFlipped = false;
        } else {
          // On flippe la carte ciblée (flipIndex) quand il y a 2 ou 3 cartes
          card.isFlipped = (index === flipIndex);
        }
      });

      // =========================
      // 2) Si 1 seule carte visible : on programme un flip à mi-parcours
      // =========================
      if (this.cardsToShow === 1) {
        this.flipTimeout = setTimeout(() => {
          // Vérifie encore qu’on est toujours sur 1 carte
          if (this.cardsToShow === 1) {
            // On flippe la (seule) carte ciblée
            this.CartesJeux[flipIndex].isFlipped = !this.CartesJeux[flipIndex].isFlipped;
          }
        }, this.autoSlideTime);
      }
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

      const offset = (100 / this.cardsToShow) * (this.currentSlide + 1);
      
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
            
            // On enlève la transition pour “sauter” discrètement à la slide 1
            gsap.set(this.$refs.carouselContainer, { x: `0%` });
          }
        },
      });
    },
  },

  mounted() {

    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    // Place la position de départ à - (100% / cardsToShow)
    const startOffset = 100 / this.cardsToShow;
    gsap.set(this.$refs.carouselContainer, { x: `-${startOffset}%` });

    this.startAutoSlide();
    this.updateFlipState();


    this.CartesJeux = this.CartesJeux.map((card) => ({
    ...card,
    isFlipped: card.isFlipped || false, // Ajoute isFlipped si absent
  }));
  },
  beforeUnmount() {

    window.removeEventListener('resize', this.handleResize);
    this.stopAutoSlide();
    if (this.flipTimeout) clearTimeout(this.flipTimeout);
  },
};
</script>

<style lang="scss">
  @use '@/assets/scss/components/carouselCarteJeux' as *;

</style>
  