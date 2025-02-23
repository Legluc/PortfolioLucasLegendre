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

        <div v-for="(post, index) in posts" :key="index" :class="['RandoPost', (index % 2 === 0) ? 'PostGauche' : 'PostDroit']">
          <img :src="post.image" alt="Paysage" ref="ImageRando">
          <div class="RandoContenu">
            <div class="TitreRando">
              <h2>{{ post.title }}</h2>
            </div>
            <div class="CarteVerte CartePassion" ref="RandoContenu">
              <h3>{{ post.subtitle }}</h3>
              <p>{{ post.content }}</p>
            </div>
          </div>
        </div>

      </section>
      <DynamicGallery :images="ImagesRando" />>
    </div>
    <Footer />
  </template>
<script>
import {ImagesRando} from '@/data/images';

import Footer from '@/components/FooterGlobal.vue';
import DynamicGallery from '@/components/Galerie.vue';

export default {
  name: "PassionRando",
  components: {
    Footer,
    DynamicGallery,
  },
  data() {
    return {
      ImagesRando,
      posts: [
        {
          image: ImagesRando.MontCharvin01,
          title: "Le Mont Charvin",
          subtitle: "Un jour au Charvin",
          content: "Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus."
        },
        {
          image: ImagesRando.MontCharvin01,
          title: "Le pic carlit",
          subtitle: "Un jour au Charvin",
          content: "Ma passion pour la randonnée m’es apparue en lors de notre séjour en Provence. Lors de l'ascension de la Sainte Victoire, une rando que l'on a fait et refait par des chemins différents. Le massif des Alpilles et le Lubéron sont devenus notre terrain de jeu pour les mois d'hiver qui nous préparais a celui que l'on voit de partout, le colosse Provençal, le mont Ventoux. Au terme de notre séjour une aventures incroyable pour clôturer ce chapitre de notre vue que vous retrouverez compté plus bas. Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus."
        },
      ]
    };
  },
  mounted() {
    this.adjustMarginBottom();
    window.addEventListener("resize", this.adjustMarginBottom);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustMarginBottom);
  },
  methods: {
    adjustMarginBottom() {
      if (window.innerWidth > 1024) {
        // Ici, les refs deviennent des tableaux
        const imageRandoArray = this.$refs.ImageRando;
        const randoContenus = this.$refs.RandoContenu;

        // On prend la hauteur du premier imageRando par exemple
        if (imageRandoArray && imageRandoArray.length && randoContenus) {
          const hauteurImage = imageRandoArray[0].clientHeight;

          randoContenus.forEach((randoContenu) => {
            const hauteurContenu = randoContenu.clientHeight;
            let marge = hauteurImage - hauteurContenu;
            console.log(marge);
            if (marge < 0) marge = 0;
            randoContenu.style.marginBottom = marge + "px";
          });
        }
      } else {
        // Réinitialiser la marginBottom si nécessaire
        const randoContenus = this.$refs.RandoContenu;
        if (randoContenus) {
          (Array.isArray(randoContenus) ? randoContenus : [randoContenus]).forEach(
            (randoContenu) => {
              randoContenu.style.marginBottom = "";
            }
          );
        }
      }
    }
  }
};
</script>
<style lang="scss">
  @use '@/assets/scss/pages/rando' as *;

</style>