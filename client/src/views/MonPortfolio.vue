<template>
  <div id="Portfolio">
    <section id="MonPotfolio">
      <div class="MonPotfolioContenue">
        <h1>Mes <br>Projets</h1>
        <div class="CarteVerte CartePassion">
          <h3>Mes projets</h3>
          <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.</p>
        </div>
      </div>
      <div class="MonPotfolioIllustrations">
        <img :src="images.MontCharvin" alt="">
      </div>
    </section>
    <section id="MesProjetsPro">
      <div class="MesProjetsProContenue">

        <Carousel :images="carouselImages1"/>

        <div class="MesProjetsProTexte">
          <h2>#1</h2>
          <h3>Nom du projet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius elementum. Fusce eu ornare sem. Aenean venenatis pellentesque dolor sed posuere. </p>
          <button class="Bouton">Voir le site</button>
          <div class="CartoucheLogo">
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
          </div>
        </div>
        
      </div>
      <div class="MesProjetsProContenue">

        <Carousel :images="carouselImages1"/>

        <div class="MesProjetsProTexte">
          <h2>#1</h2>
          <h3>Nom du projet</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie varius elementum. Fusce eu ornare sem. Aenean venenatis pellentesque dolor sed posuere. </p>
          <button class="Bouton">Voir le site</button>
          <div class="CartoucheLogo">
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
            <div class="LogoTechno">
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
  <Footer />
  </template>
<script>
import {images, carouselImages} from '@/data/images';

import Footer from '@/components/FooterGlobal.vue';
import Carousel from "@/components/CarouselGlobal.vue";

export default {
  name: "MonPortfolio",
  components: {
    Footer,
    Carousel,
  },
  data() {
    return {
      images,
      carouselImages1: carouselImages.slice(0, 3),
    };
  }
};
</script>
<style lang="scss">
  @use '@/assets/scss/pages/portfolio' as *;

</style>