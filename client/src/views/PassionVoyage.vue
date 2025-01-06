<template>
    <div id="Voyage">
      <section id="EnteteVoyage">
        <h1>Ma passion : <br>Le voyage</h1>
        <div class="CarteVerte CartePassion">
          <h3>Et pourquoi la rando ?</h3>
          <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.</p>
        </div>
      </section>
      <section id="Brick">
        <div class="ContenueVoyage">
            <h2>À la <br>quête du <br>bonheur</h2>
            <div class="CarteVerte CartePassion">
                <h3>Brick</h3>
                <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.</p>
            </div>
        </div>
        <img :src="images.LucasBrick" alt="Photo de moi assis sur le marchepied du camping-car">
      </section>
      <section id="RoadMap">
        <div class="RoadMapTitre">
            <h2>La road map</h2>
        </div>
        <div class="RoadMapContenue">
            <img :src="images.MontCharvin" alt="La map">
            <div class="RoadMapContenueTexte">
                <h3>Notre Itinéraire</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
      </section>
      <section id="BichecoAventure">
        <div class="BichecoAventureContenue">
            <h2>Le projet <br>Bicheco <br>Aventure</h2>
            <div class="CarteVerte CartePassion">
            <h3>Une aventure partagée</h3>
            <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.</p>
            <button class="Bouton">Visité la chaine</button>
            </div>
        </div>
        <div class="BichecoAventureEpisode">
          <iframe
            src="https://www.youtube.com/embed/9GWgLgEsTDI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

      </section>
      <section class="Galerie">
        <div class="GaleriePack">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
        </div>
        <div class="GaleriePack">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
        </div>
      </section>
    </div>
    <Footer />
  </template>
<script>
import {images} from '@/data/images';

import Footer from '@/components/FooterGlobal.vue';

export default {
  name: "PassionVoyage",
  components: {
    Footer,
  },
  data() {
    return {
      images,
    };
  }
};
</script>
<style lang="scss">
  @use '@/assets/scss/pages/voyage' as *;

</style>