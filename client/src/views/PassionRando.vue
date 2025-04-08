<template>
    <div id="Rando">
      <section id="EnteteRando">
        <h1>Ma passion : <br>La randonnee</h1>
        <div class="CarteVerte CartePassion">
          <h3>Et pourquoi la rando ?</h3>
          <p> Ma passion pour la randonnée est née en Provence, lors de l'ascension renouvelée de la Sainte Victoire. Entre les sentiers du Lubéron, du massif des Alpilles et le majestueux mont Ventoux, chaque rando était une aventure inoubliable.<br><br>Surtout une passion et un sport ancré pour la vie qui nous a mené ici dans les Alpes pour vivre chaque jour une aventure de plus.</p>
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
              <p v-html="post.content"></p>
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
          image: ImagesRando.MontVentoux01,
          title: "Le Mont Ventoux",
          subtitle: "Mont Ventoux via le Vallon de Counillon",
          content: "Cette randonnée est la concrétisation de six mois de préparation. Lorsque nous vivions en Provence dans Brick, notre camping-car qui nous emmenait sur d’innombrables sentiers, toujours avec en toile de fond l’imposant colosse provençal, nous préparions nos jambes pour l’aventure.<br><br> Après l’hiver, nos jambes, endurcies par de multiples parcours, une journée idéale s’est présentée pour l’ascension, sans le moindre vent. Nous avons gravi 10 km de nuit afin de savourer un petit-déjeuner au lever du soleil, offrant une vue panoramique sur toute la Provence.<br><br> Pour couronner cette aventure, une descente ensoleillée, avec en ligne de mire un magnifique bouquetin, a marqué l’aboutissement de ce périple."
        },
        {
          image: ImagesRando.PicCarlit07,
          title: "Le Pic Carlit",
          subtitle: "La boucle des 12 lacs",
          content: "Le Pic Carlit est sans doute l’une des plus belles randonnées que j’ai vécu. Découvrir les 12 lacs gelés dans les Pyrénées fut un véritable émerveillement. Ce fut aussi ma première vraie expédition dans la neige, ce qui m’a poussé à investir dans des crampons forestiers pour l’occasion.<br><br> Nous avons divisé l’aventure en deux temps : d’abord, repérer le parcours menant au barrage des Bouillouse, puis réaliser le grand tour des 12 lacs. <br><br>Parcourir la neige par un temps radieux et des températures clémentes fut un plaisir, et le retour, éclairé par la lueur de la lune et nos frontales, ajouta une touche de piment à cette expédition."
        },
        {
          image: ImagesRando.Parmelan01,
          title: "Le Parmelan",
          subtitle: "Tête du Parmelan depart de Aviernoz",
          content: "Arrivé récemment à Annecy, il nous fallait découvrir notre nouveau voisin. Pour l’occasion, j’ai convié deux amis novices en randonnée pour une expédition jusqu’à la Tête du Parmelan, en passant par la Grotte de l’Enfer et la Mer de Cailloux. Cette aventure nous a laissé de précieux souvenirs et une vue imprenable sur les environs."
        },
        {
          image: ImagesRando.MontCharvin06,
          title: "Le Mont Charvin",
          subtitle: "Tour de la Tulle par le lac Charvin",
          content: "Dès notre arrivée, nous avons entrepris une randonnée enneigée jusqu’au lac du Charvin sur le Mont Charvin. Ce fut une aventure qui nous a confronté à notre manque d’expérience et à un équipement insuffisant. Une véritable leçon d’humilité, car ici, les crampons forestiers ne suffisent plus et la lecture du terrain est primordiale. <br><br>Après avoir rapidement renoncé à atteindre le sommet, nous avons entamé la descente par le refuge en empruntant le passage du Freux, qui nous a fait quelques frayeurs. Ce sommet demeure désormais une promesse d’une prochaine aventure, dans des conditions plus favorables et avec une expérience enrichie."
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