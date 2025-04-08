<template>
    <div id="JeuxVideo">
        <section id="EnteteJeuxVideo">
        <h1>Ma passion : <br>Les jeux video</h1>
        <div class="CarteVerte CartePassion">
          <h3>Quand la quête debute</h3>
          <p> Les jeux vidéo sont pour moi le média idéal pour vivre des aventures grandioses. <br><br> Tout a commencé avec Pokémon Rubis sur GameBoy mon parcours s'est poursuivi dans la ville d'Astrub sur Dofus, avant de plonger dans l'incontournable World of Warcraft.<br><br> Aujourd'hui, j'ai survécu à un crash sur une planète océanique dans Subnautica et je lutte pour retrouver ma taille normale sur Grounded. <br><br> Plongez avec moi dans mes aventures virtuelles préférées !</p>
        </div>
      </section>
      <section id="AventureVirtuel">
        <h2>L'aventure virtuelle</h2>
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