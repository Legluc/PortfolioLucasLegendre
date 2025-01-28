<template>
    <div id="Parcours" class="Marge">
      <section id="MesCompetences">
        <h1>Mes <br>compétences</h1>
        <div>
          <img :src="imageSrc" alt="">
        </div>
      </section>
      <section id="SectionParcours">
        <h2>Mon <br> parcours</h2>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Orange">
          <div class="CorpsCartesParcours Vert">
            <h3>Titre de la période</h3>
            <div class="DatesCartesParcours">
              <p>Nov 2015 - Dec 2018</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Avr 2020 - Jan 2022</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Vert">
          <div class="CorpsCartesParcours Orange">
            <h3>Titre de la période</h3>
            <div class="DatesCartesParcours">
              <p>Nov 2015 - Dec 2018</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Avr 2020 - Jan 2022</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Orange">
          <div class="CorpsCartesParcours Vert">
            <h3>Titre de la période</h3>
            <div class="DatesCartesParcours">
              <p>Nov 2015 - Dec 2018</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Avr 2020 - Jan 2022</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="CartesParcours">
          <img src="" alt="Illustration du parcours" class="Vert">
          <div class="CorpsCartesParcours Orange">
            <h3>Titre de la période</h3>
            <div class="DatesCartesParcours">
              <p>Nov 2015 - Dec 2018</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div class="DatesCartesParcours">
              <p>Avr 2020 - Jan 2022</p>
              <div class="TexteCartesParcours">
                <h4>Sous-titre</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
      imageSrc: window.innerWidth < 450 ? ImagesParcours.CompetenceMobile : ImagesParcours.CompetenceDesktop,
    };
  },
  watch: {
    screenWidth(newWidth) {
      this.imageSrc = newWidth < 450 ? this.CompetenceMobile : this.CompetenceDesktop;
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