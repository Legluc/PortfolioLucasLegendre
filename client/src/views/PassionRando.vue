<template>
    <div id="Rando">
      <section id="EnteteRando">
        <h1>Ma passion : <br>La randonnee</h1>
        <div class="CarteVerte CartePassion">
          <h3>Et pourquoi la rando ?</h3>
          <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux.<br> Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. <br>Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.</p>
        </div>
      </section>
      <section class="RandoBlog">
        <div class="RandoPost PostGauche">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
          <div class="RandoContenu">
            <h2>Le Mont <br>Charvin</h2>
            <div class="CarteVerte CartePassion">
              <h3>Un jour au Charvin</h3>
              <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.
              </p>
            </div>
          </div>
        </div>
        <div class="RandoPost PostDroit">
          <img :src="images.MontCharvin" alt="Paysage du Mont Charvin">
          <div class="RandoContenu">
            <h2>Le Pic <br>Carlit</h2>
            <div class="CarteVerte CartePassion">
              <h3>Un jour au Carlit</h3>
              <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.
              </p>
            </div>
          </div>
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
  name: "PassionRando",
  components: {
    Footer,
  },
  data() {
    return {
      images
    };
  }
};
</script>
<style lang="scss">
  @use '@/assets/scss/pages/rando' as *;

</style>