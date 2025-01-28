<template>
  <div id="Portfolio">
    <section id="MonPotfolio">
      <div class="MonPotfolioContenue">
        <h1>Mes <br>Projets</h1>
        <div class="CarteVerte CartePassion">
          <h3>Mes projets</h3>
          <p>Découvrez une sélection de projets variés auxquels j'ai contribué, que ce soit lors de ma formation ou en milieu professionnel. <br>Vous trouverez également mes réalisations personnelles, conçues pour approfondir mes compétences et explorer de nouvelles technologies.</p>        
        </div>
      </div>
      <div class="MonPotfolioIllustrations">
        <img :src="ImagesRando.MontCharvin01" alt="">
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
import {ImagesRando, carouselImages} from '@/data/images';

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
      ImagesRando,
      carouselImages1: carouselImages.slice(0, 3),
    };
  }
};
</script>
<style lang="scss">
  @use '@/assets/scss/pages/portfolio' as *;

</style>