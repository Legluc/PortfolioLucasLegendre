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
        CartesJeux: [
          {
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
            jeu: "Valheim",
            image: FlipCardJeu.ValheimRecto,
            typeJeu: "Survival-Sandbox en univers nordique",
            description: "Valheim plonge le joueur dans un univers de survie inspiré de la mythologie nordique. Vous incarnez un guerrier viking tombé au combat, envoyé dans le dixième monde d’Yggdrasil. Pour prouver votre valeur et gagner votre place au Valhalla, il vous faudra explorer, bâtir des forteresses, combattre des créatures légendaires et vaincre les anciens ennemis des dieux. Dans ce royaume hostile, seuls les plus courageux survivent.",
            studio: "Iron Gate AB",
            dateSortie: "2021",
            personnage: "Aeldrin",
            histoire: "Dans cette aventure, j’ai choisi d’incarner un guerrier viking orienté vers la survie, équipé d'une armure lourde, d’un bouclier solide et d’une épée robuste. L’exploration et l’établissement régulier de nouvelles bases toujours plus éloignées sont la clé de la progression dans Valheim. Grâce à mon fidèle Drakkar, le transport des ressources devient plus simple, facilitant ainsi la traversée des mers qui séparent les nombreux biomes à découvrir.",
            backgroundImage:FlipCardJeu.ValheimVerso,
            isFlipped: false,
          },
          {
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
  