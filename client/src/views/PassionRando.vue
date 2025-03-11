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
          title: "Le Mont Ventoux",
          subtitle: "Un jour au Charvin",
          content: "Cette randonnée est la concrétisation de six mois de préparation. Lorsque nous vivions en Provence dans Brick, notre camping-car qui nous emmenait sur d’innombrables sentiers, toujours avec en toile de fond l’imposant colosse provençal. Après l’hiver, nos jambes endurcies par de multiples parcours, une journée idéale s’est présentée pour l’ascension, sans le moindre vent. Nous avons gravi 10 km de nuit afin de savourer un petit-déjeuner au lever du soleil, offrant une vue panoramique sur toute la Provence. Pour couronner cette aventure, une descente ensoleillée avec en vue d’un magnifique bouquetin qui couronna de succès cette aventure."
        },
        {
          image: ImagesRando.MontCharvin01,
          title: "Le Pic Carlit",
          subtitle: "Un jour au Charvin",
          content: "Le Pic Carlit est sans doute l’une des plus belles randonnées que j’ai vécues. Découvrir les 12 lacs gelés dans les Pyrénées fut un véritable émerveillement. Ce fut aussi ma première vraie expédition dans la neige, ce qui m’a poussé à investir dans des crampons forestiers pour l’occasion. Nous avons divisé l’aventure en deux temps : d’abord, repérer le parcours menant au barrage des Bouillouse, puis réaliser le grand tour des 12 lacs. Parcourir la neige par un temps radieux et des températures clémentes fut un plaisir, et le retour, éclairé par la lueur de la lune et nos frontales, ajouta une touche de piment à cette expédition."
        },
        {
          image: ImagesRando.MontCharvin01,
          title: "Le Parmelan",
          subtitle: "Un jour au Charvin",
          content: "Arrivé récemment à Annecy, il nous fallait découvrir notre nouveau voisin. Pour l’occasion, j’ai convié deux amis novices en randonnée pour une expédition jusqu’à la tête du Parmelan, en passant par la Grotte de l’Enfer et la Mer de Cailloux. Cette aventure nous a laissé de précieux souvenirs et une vue imprenable sur les environs."
        },
        {
          image: ImagesRando.MontCharvin01,
          title: "Le Mont Charvin",
          subtitle: "Un jour au Charvin",
          content: "Dès notre arrivée, nous avons entrepris une randonnée enneigée jusqu’au lac du Charvin sur le Mont Charvin. Ce fut une aventure qui nous a confrontés à notre manque d’expérience et à un équipement insuffisant. Une véritable leçon d’humilité, car ici, les crampons forestiers ne suffisent plus et la lecture du terrain est primordiale. Après avoir rapidement renoncé à atteindre le sommet, nous avons entamé la descente par le refuge en empruntant le passage du Freux, qui nous a fait quelques frayeurs. Ce sommet demeure désormais une promesse d’une prochaine aventure, avec des conditions plus favorables et une expérience enrichie."
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