<template>
    <div id="JeuxVideo">
        <section id="EnteteJeuxVideo">
        <h1>Ma passion : <br>Les jeux video</h1>
        <div class="CarteOrange CartePassion">
          <h3>Et pourquoi la rando ?</h3>
          <p> Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.</p>
        </div>
      </section>
      <section id="AventureVirtuel">
        <h2>L'aventure virtuel</h2>
        <h3>Mes aventures favorites</h3>
        <div>

        </div>
      </section>
      <section id="MonSteam">
        <h2>Mon Steam</h2>
        <h3>Une bibliotheque d'aventure</h3>
        <div>

        </div>
      </section>
    </div>
    <Footer />
</template>
<script>
import images from '@/data/images';

import Footer from '@/components/FooterGlobal.vue';

export default {
name: "PassionJeuxVideo",
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
@use '@/assets/scss/pages/jeuxVideo' as *;

</style>