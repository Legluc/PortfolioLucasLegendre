<template>
    <div id="Parcours" class="Marge">
      <section id="MesCompetences">
        <h1>Mes <br>compétences</h1>
        <div class="ImageCompetence">
          <img :src="imageSrc" alt="">
        </div>
      </section>
      <section id="SectionParcours">
        <h2>Mon <br> parcours</h2>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Orange">
          <div class="CorpsCartesParcours Vert">
            <h3>Développeur en devenir</h3>
            <div class="DatesCartesParcours">
              <p>Oct 2024 - Aujourd'hui</p>
              <div class="TexteCartesParcours">
                <h4>Boulangerie Chevallier</h4>
                <p>Actuellement vendeur en boulangerie chez Chevallier, cet emploi de transition marque mon arrivée à Annecy et m'a permis de développer mon portfolio en vue de la recherche d'une alternance.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Nov 2023 - Sep 2024</p>
              <div class="TexteCartesParcours">
                <h4>AFPA Developpeur web et web mobile</h4>
                <p>J'ai suivi une formation de développeur web et web mobile à distance avec l’AFPA Territoire Digital, une reconversion professionnelle effectuée en pleine transition d’un mode de vie mobile à sédentaire. J'ai passé mes épreuves finales en septembre, ce qui a quelque peu retardé mon retour dans le circuit traditionnel que je vise actuellement.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Vert">
          <div class="CorpsCartesParcours Orange">
            <h3>Sur la voie du voyage</h3>
            <div class="DatesCartesParcours">
              <p>Nov 2022 - Mai 2023</p>
              <div class="TexteCartesParcours">
                <h4>Sudcosmétique</h4>
                <p>J'ai travaillé sept mois en tant que peseur de matières premières chez Sudcosmétique lors d'un road trip à travers la Provence, une halte qui a coïncidé avec la préparation et le financement de mon mariage. C'est également à cette période que ma passion pour la randonnée est née, notamment lors d'une escapade sur les hauteurs de la Sainte Victoire, roc emblématique surplombant Aix-en-Provence.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Mars 2022 - Fev 2024</p>
              <div class="TexteCartesParcours">
                <h4>Le Road-trip</h4>
                <p>À partir de là, j'ai mis en pause mon parcours professionnel pour entreprendre un long road trip à travers la France, l'Espagne et le Portugal. Au cours de ce voyage, une idée a germé et a pris forme jusqu'à aujourd'hui, où je souhaite la concrétiser au sein d'une nouvelle aventure en alternance.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Orange">
          <div class="CorpsCartesParcours Vert">
            <h3>Mes premiers jobs</h3>
            <div class="DatesCartesParcours">
              <p>Avr 2019 - Mars 2022</p>
              <div class="TexteCartesParcours">
                <h4>Phone Design</h4>
                <p>Pendant plus de trois ans, j'ai travaillé en tant que monteur son chez Phone Design, un studio spécialisé dans la conception de messages téléphoniques pour entreprises et administrations. C'est durant cette période que le projet de voyage a vu le jour et s'est développé lors des différents confinements liés au COVID-19. À l'été 2021, nous avons acquis Brick, notre camping-car, afin d'opérer une transition de mode de vie qui nous permet de vivre en camping-car tout en poursuivant notre activité professionnelle.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Mars 2018 - Avr 2019</p>
              <div class="TexteCartesParcours">
                <h4>Interim et 3Media</h4>
                <p>Ensuite, j'ai effectué plusieurs missions en intérim pour diverses entreprises, telles que la chocolaterie Jackot, une entreprise de ménage, entre autres. J'ai également travaillé plus longtemps chez 3medias en tant que conseiller clientèle pour le service réclamations d'EDF.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Vert">
          <div class="CorpsCartesParcours Orange">
            <h3>Mon parcours d'étudiant</h3>
            <div class="DatesCartesParcours">
              <p>Sep 2016 - Mars 2018</p>
              <div class="TexteCartesParcours">
                <h4>IUT Troyes Champagne </h4>
                <p>Après l'obtention de mon Baccalauréat Économique et Social, j'ai intégré un DUT Techniques de Commercialisation à l'IUT de Troyes en Champagne. Malheureusement, je n'ai pas validé ce diplôme, n'étant pas en adéquation avec les valeurs et les enseignements de cette formation, contrairement à celle que j'entreprends actuellement.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Juin 2015</p>
              <div class="TexteCartesParcours">
                <h4>Lycée Thibault de Champagne Provins</h4>
                <p>Date de l'obtention de mon Baccalauréat Économique et Social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </template>
<script>
import {ImagesParcours} from '@/data/images';

import Footer from '@/components/FooterGlobal.vue';

export default {
  name: "MonParcours",
  components: {
    Footer,
  },
  data() {
    return {
      ImagesParcours,
      CompetenceDesktop: ImagesParcours.CompetenceDesktop,
      CompetenceMobile: ImagesParcours.CompetenceMobile,
      screenWidth: window.innerWidth,
      imageSrc: window.innerWidth <= 450 ? ImagesParcours.CompetenceMobile : ImagesParcours.CompetenceDesktop,
    };
  },
  watch: {
    screenWidth(newWidth) {
      this.imageSrc = newWidth <= 450 ? this.CompetenceMobile : this.CompetenceDesktop;
    }
  },
  mounted() {
    window.addEventListener("resize", this.updateScreenWidth);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.screenWidth = window.innerWidth;
      }, 200);
    }
  }
}
</script>
<style lang="scss">
  @use '@/assets/scss/pages/parcours' as *;

</style>