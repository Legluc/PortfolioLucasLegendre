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
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="_x33_ZnMpl.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7v.2l-4,45.2-18.1,5h-.2l-18-5-4.1-45.3h44.4ZM30.3,49.8h19.2l-.6,7.2-6.1,1.7h-.1l-6.2-1.6-.4-4.4h-5.6c.2,2.7.5,5.4.7,8,0,.1,0,.6,0,.6l11.4,3.2,11.3-3.1,1.6-17.1h-20.2l-.5-5.7h21.2s.5-5.5.5-5.5h-27.8s1.5,16.8,1.5,16.8Z"/>
                    <polygon class="st0" points="52.7 11.4 52.7 19.8 49.9 19.8 49.9 15.7 47.9 18.7 45.9 15.7 45.9 19.8 43.2 19.8 43.2 11.4 46.1 11.4 47.9 14.3 49.7 11.4 52.7 11.4"/>
                    <polygon class="st0" points="27.5 11.4 27.5 14.2 30.1 14.2 30.1 11.4 32.9 11.4 32.9 19.8 30.1 19.8 30.1 17 27.5 17 27.5 19.8 24.7 19.8 24.7 11.4 27.5 11.4"/>
                    <polygon class="st0" points="41.9 11.4 41.9 14.2 39.4 14.2 39.4 19.8 36.6 19.8 36.6 14.2 34.1 14.2 34.1 11.4 41.9 11.4"/>
                    <polygon class="st0" points="56.9 11.4 56.9 17 60.9 17 60.9 17.1 60.9 19.8 54 19.8 54 11.4 56.9 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="xAcIV7.tif">
                  <g>
                    <path class="st0" d="M64.9,23.7c0,.3,0,.7,0,1s-.1.1-.1.3c-.8,13.4-2.3,27.2-3.5,40.6-.1,1.1-.2,2.3-.4,3.4l-18.2,5-18-4.9-4-44.7v-.6c0,0,44.3,0,44.3,0ZM56.5,33h-27.6l.5,5.5h21.2l-.5,5.7h-20.3l.5,5.5h19.2l-.6,7.2-6.1,1.7-6.3-1.6-.4-4.2c0,0-.1-.3-.2-.3h-5.3l.7,8.4.2.3,11.2,3.1,11.3-3.1,2.5-28.3Z"/>
                    <path class="st0" d="M45.9,11.4c0,.3.1,2.5-.2,2.5h-3.8v.3h3.8s.2.2.2.2v5.6h-6.9v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.9Z"/>
                    <path class="st0" d="M53.9,11.4v2.5h-3.9v.3h3.9v5.7h-6.8v-2.6h3.9s0-.5,0-.5h-3.9v-5.5h6.8Z"/>
                    <polygon class="st0" points="37.7 11.4 37.7 14.3 33.8 14.3 33.8 17.1 37.7 17.1 37.7 19.9 31 19.9 31 11.4 37.7 11.4"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="m3fKXb.tif">
                  <g>
                    <path class="st0" d="M65,23.6c0,.4,0,.7,0,1.1-.3,3.8-.7,7.6-1,11.4-.8,8.6-1.5,17.2-2.3,25.9-.2,2.2-.4,4.4-.6,6.5s0,.5-.2.6c-.7.4-2.5.9-3.4,1.1-4.9,1.4-9.9,2.8-14.9,4-6-1.6-12-3.3-18.1-5h0s-3.4-38.2-3.4-38.2c-.1-2.2-.5-4.4-.6-6.6,0-.3,0-.5,0-.8h44.5ZM30.4,49.9h19.1l-.8,7.1c-.7.3-1.5.5-2.3.7s-1.4.4-2.2.6-1.1.3-1.5.4-1.2-.2-1.7-.3c-1.6-.4-3.1-.9-4.6-1.3l-.4-4.4h-5.6c0,.5,0,.9,0,1.4.1,2.2.3,4.6.7,6.7,0,.1,0,.6.1.7s0,0,0,0c.3.1.9.3,1.3.4,3.3,1,6.7,1.9,10,2.8,3.9-1,7.7-2,11.5-3.3,0,0,0-.5.1-.6.1-1,.2-2,.3-3,.4-4.5.8-8.9,1.2-13.4-.1,0-.3,0-.4,0-.4,0-1,0-1.4,0-5.8-.1-11.4,0-17.2,0h-.1s.8-8.7.8-8.7c1.7,0,3.5-.1,5.2-.2,2,.2,4,0,6,.3s.6,0,.7.1.1.3.1.4c0,.4.1.9.2,1.3.1,1.3.3,2.6.3,3.8,0,0,0,0,0,0,0,0,.5.1.6.1h5.2l-1.1-12.1h-17.6c-1.4,0-2.8,0-4.2,0s-.5,0-.7,0,0,.2,0,.3c-.2,1.6-.3,3.2-.5,4.9-.5,5-.9,10.1-1.3,15.1,0,0,0,0,0,.1Z"/>
                    <path class="st0" d="M50.7,11.2v2.3h-3.6c0,.1,3.8,4.2,3.8,4.2v2h-8v-2.3c1,0,2.1,0,3.2,0s.6,0,.6,0c-1.2-1.4-2.5-2.8-3.7-4.1v-2h7.8Z"/>
                    <polygon class="st0" points="41.5 11.2 41.5 19.7 34.6 19.7 34.6 16.8 38.7 16.8 38.7 11.2 41.5 11.2"/>
                  </g>
                </g>
              </g>
            </svg>

            <div class="LogoBreak"></div>

            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="atToJv.tif">
                  <g>
                    <path class="st0" d="M8.4,59.3l5.2-26.2h12.3c4.2.3,7.3,2.4,7.5,6.9.3,6.7-4.6,12.6-11.5,12.6-.1,0-.2,0-.3,0-1.9,0-3.8,0-5.7,0l-1.3,6.8h-6.1ZM17.2,47.6c1.2,0,2.5,0,3.8,0,4-.2,5.7-2.7,5.9-6.5.1-2.5-1.8-3.1-3.9-3.2-1.4,0-2.8,0-4.2,0l-1.6,9.7Z"/>
                    <path class="st0" d="M58,59.3h-6.2l5.2-26.2h12.3c4,.3,7.2,2.4,7.5,6.7.3,5.2-2.3,10-7.1,12-1.7.7-2.9.8-4.6.8s-3.8,0-5.7,0l-1.3,6.8ZM60.6,47.6c1.2,0,2.5,0,3.8,0,3.8-.2,5.5-2.3,5.9-6s-1.3-3.7-3.9-3.8c-1.4,0-2.8,0-4.1,0l-1.6,9.7Z"/>
                    <path class="st0" d="M43.5,26.2l-1.3,6.8h6.1c3.3.3,6.7,1.8,6.2,5.7l-2.4,13.8h-6.5l2.4-12.4c.1-.9.2-1.7-.8-2s-.9-.2-1.3-.2c-1.6,0-3.2,0-4.8,0l-2.9,14.6h-6.2l5.2-26.2h6.1Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <g id="KpCypn.tif">
                  <g>
                    <path class="st0" d="M70.4,60.5l-8.5,1.8c.9,1.7,3,2.4,4.5,3.5,1.7,1.2,4.2,3.5,5.3,5.2s.4.9.7,1.4c-.2,0-.4,0-.5-.2-1-.7-2-1.7-3.1-2.4-3.4-2.2-7.2-2.9-9.6-6.6-.2-.3-.9-1.5-.8-1.8.2-.6,2.4-1.2,3.1-1.4,2-.5,4.1-.6,6.1-.7-.3-.5-.7-.8-1.2-1.2-1.7-1.3-4.6-3.3-6.5-4.1-1.6-.7-4.7-1.2-5.8-2.5-.7-.8-1.3-2.2-1.8-3.2-2.5-5.1-4.3-10.8-7.7-15.4-3.2-4.4-10.2-10.6-15.7-11.5s-3,0-4.2-.4c-.4-.1-2.8-2-3.7-2.5s-5.1-2.5-5.1-.2,3.2,4.9,4.1,6.5c1.7,3,2,7.1,4.1,9.9.4.6,1.1,1.1,1.5,1.7.8,1.4-.4,3.2-.8,4.6-.9,3.2-1,7,.1,10.2s1.1,3.1,2.5,3.1c.3-2.3.3-4.9,1.6-6.9l1.5-1.8c.4.1.6,1.4.8,1.8,1.2,2.8,2.7,5.7,4.3,8.3s2.8,4.1,4.8,5.5c0,.3-.3.1-.4,0-.7-.3-3.5-2.9-4.2-3.5-2.3-2.1-4-4.3-5.1-7.3-.2,0-.2.4-.2.5-.3,1.6-.3,4.7-1.9,5.4-2.3,1.1-4.2-1.7-5-3.6-2.2-4.8-1.3-10.4.4-15.2-1-1.2-1.8-2.3-2.5-3.7-1.6-3.3-1.9-6.6-4.1-9.6s-4.3-4.5-3-7.4,7.5-.9,9.9.7c.6.4,1.1,1.1,1.7,1.3s2.3,0,3.3.3c6.8,1.1,14.7,8.4,18.5,13.8,2.7,3.9,4,8.2,6.1,12.4s1.8,3.9,2.4,4.5,3.9,1.7,4.9,2.3c2.1,1.1,8.3,5.7,9.3,7.7s.1.3,0,.5Z"/>
                    <path class="st0" d="M25.6,25c1.2-.3,2-.2,2.8.8s.6,1.4.1,2.2c-.8,1.5-1.1-.3-1.5-1.1-.4-.7-1.1-1.2-1.4-1.9Z"/>
                  </g>
                </g>
              </g>
            </svg>
            <svg class="LogoTechno" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 85.5 85.5">
              <rect class="st1" width="85.5" height="85.5" rx="15.7" ry="15.7"/>
              <g class="st2">
                <path class="st0" d="M42.7,26.6c-7.1,0-11.6,3.6-13.4,10.7,2.7-3.6,5.8-4.9,9.4-4,2,.5,3.5,2,5.1,3.6,2.6,2.7,5.7,5.8,12.3,5.8s11.6-3.6,13.4-10.7c-2.7,3.6-5.8,4.9-9.4,4-2-.5-3.5-2-5.1-3.6-2.6-2.7-5.7-5.8-12.3-5.8ZM29.3,42.7c-7.1,0-11.6,3.6-13.4,10.7,2.7-3.6,5.8-4.9,9.4-4,2,.5,3.5,2,5.1,3.6,2.6,2.7,5.7,5.8,12.3,5.8s11.6-3.6,13.4-10.7c-2.7,3.6-5.8,4.9-9.4,4-2-.5-3.5-2-5.1-3.6-2.6-2.7-5.7-5.8-12.3-5.8Z"/>
              </g>
            </svg>
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
            <div class="LogoBreak"></div>
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