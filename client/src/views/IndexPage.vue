<template>
  <div>
    <section id="LucasLegendre">
      <h1>Lucas <br>Legendre</h1>
      <div class="CarteVerte">
        <h2>Développeur web</h2>
        <p> je suis Lucas Legendre, développeur web passionné de création numérique, d’exploration et d’aventures. Curieux et toujours en quête de nouveaux défis, je mêle savoir-faire et esprit créatif. Explorez mon site pour découvrir mes projets, mon parcours, ainsi que mes autres passions. Partons à l’aventure !</p>
        <button class="Bouton">Bouton</button>
      </div>
    </section>
    <section >
      <img src="" alt="illustation parcours">
      <button>Mon parcours</button>
    </section>
    <section id="MesPassions">
      <div>
        <img :src="images.randonneur" alt="Le randonneur">
        <div>
          <p>Le randonneur</p>
        </div>
      </div>
      <div>
        <img :src="images.voyageur" alt="Le voyageur">
        <div>
          <p>Le voyageur</p>
        </div>
      </div>
      <div>
        <img :src="images.geek" alt="Le geek">
        <div>
          <p>Le geek</p>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h2>Mes projets</h2>
        <div>
          <p>Découvrez ici mes projet professionnel</p>
          <button>Découvrir</button>
        </div>
      </div>
      <div>
        <h2>Mes créations</h2>
        <div>
          <p>Vous trouverez là mes créations</p>
          <button>Découvrir</button>
        </div>
      </div>
    </section>
    <section>
      <div>
        <h2>Contact</h2>
        <p>Vous souhaitez échanger et en savoir plus sur mon parcours ? </p>
        <div>
          <form action="">
            <div>
              <div>
                <input type="text" label="nom">
                <input type="text" label="prenom">
                <input type="text" label="mail">
              </div>
              <input type="text" label="message">
            </div>
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </section>
    <footer>
      <img src="" alt="logo">
      <div>
        <link rel="stylesheet" href="">
        <link rel="stylesheet" href="">
        <link rel="stylesheet" href="">
      </div>
      <div>
        <div>
          <img src="" alt="github">
          <img src="" alt="linkedin">
        </div>
        <link rel="stylesheet" href="">
        <p>Lucas Legendre X Studio Aosagi 2025</p>
      </div>
      <img src="" alt="illustration footer">
    </footer>
  </div>
</template>

<script>
import images from '@/data/images';

export default {
  name: "IndexPage",
  data() {
    return {
      images
    };
  }
};
</script>
<style lang="scss">
  @use '@/assets/scss/pages/index' as *;

</style>
