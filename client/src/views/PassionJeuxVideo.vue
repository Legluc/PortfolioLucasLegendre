<template>
    <div id="JeuxVideo">
        <section id="EnteteJeuxVideo">
        <h1>Ma passion : <br>Les jeux video</h1>
        <div class="CarteVerte CartePassion">
          <h3>Quand la quête debute</h3>
          <p> Les jeux vidéo représentent pour moi le média parfait pour vivre des aventures grandioses. Grâce à leur interactivité et à leurs possibilités infinies, ils sont une source inépuisable de plaisir et d'évasion. <br> Tout a commencé avec Pokémon Rubis sur GameBoy, une licence qui m'a accompagné sur Nintendo DS avec Pokémon Diamant. Mon parcours s'est poursuivi dans la ville d'Astrub sur Dofus, puis dans les cieux de Flyff, avant de plonger dans l'incontournable World of Warcraft. Aujourd'hui, j'ai survécu à un crash sur une planète océanique dans Subnautica et je lutte pour retrouver ma taille normale sur Grounded. <br> Plongez avec moi dans mes aventures virtuelles préférées !</p>
        </div>
      </section>
      <section id="AventureVirtuel">
        <h2>L'aventure virtuel</h2>
        <h3>Mes aventures favorites</h3>
        <div id="CarouselCarte">
          <CarouselCarteJeux />
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
import ImagesGeek from '@/data/images';

import Footer from '@/components/FooterGlobal.vue';

import CarouselCarteJeux from '@/components/CarouselCarteJeux.vue';

export default {
name: "PassionJeuxVideo",
components: {
  Footer,
  CarouselCarteJeux,
},
data() {
  return {
    ImagesGeek,
  };
}
};
</script>
<style lang="scss">
@use '@/assets/scss/pages/jeuxVideo' as *;

</style>