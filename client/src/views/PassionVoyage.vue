<template>
    <div id="Voyage">
      <section id="EnteteVoyage">
        <h1>Ma passion : <br>Le voyage</h1>
        <div class="CarteVerte CartePassion">
          <h3>Un voyage sans fin</h3>
          <p> Depuis mon enfance, le voyage fait partie intégrante de ma vie. J'ai eu la chance d'explorer la France, de la Bretagne aux Alpes en passant par le Massif Central. Cette passion pour la découverte de nouveaux paysages et la rencontre de cultures différentes m'a poussé à préparer une grande aventure, une quête d'exploration et de liberté.</p>
        </div>
      </section>
      <section id="Brick">
        <div class="ContenueVoyage">
            <h2>À la <br>quête du <br>bonheur</h2>
            <div class="CarteVerte CartePassion">
                <h3>Brick</h3>
                <p> Pour cette grande aventure, nous avons choisi de voyager à bord de notre fidèle camping-car, que nous avons baptisé Brick. Avec Brick, nous avons parcouru la France dans tous les sens, mais surtout réalisé un tour inoubliable de l'Espagne et du Portugal. En longeant la Méditerranée puis la côte Atlantique, nous avons vécu un road trip de 3 mois riche en découvertes et en moments mémorables. Tout au long de ce périple, nous avons documenté notre voyage sur les réseaux sociaux pour partager cette expérience unique.</p>
            </div>
        </div>
        <img :src="images.LucasBrick" alt="Photo de moi assis sur le marchepied du camping-car">
      </section>
      <section id="RoadMap">
        <div class="RoadMapTitre">
            <h2>La road map</h2>
        </div>
        <div class="RoadMapContenue">
            <img :src="images.MontCharvin" alt="La map">
            <div class="RoadMapContenueTexte">
                <h3>Notre Itinéraire</h3>
                <p> A REDIGER : Pour cette grande aventure, nous avons choisi de voyager à bord de notre fidèle camping-car, que nous avons baptisé Brick. Avec Brick, nous avons parcouru la France dans tous les sens, mais surtout réalisé un tour inoubliable de l'Espagne et du Portugal. En longeant la Méditerranée puis la côte Atlantique, nous avons vécu un road trip de 3 mois riche en découvertes et en moments mémorables. Tout au long de ce périple, nous avons documenté notre voyage sur les réseaux sociaux pour partager cette expérience unique.</p>
            </div>
        </div>
      </section>
      <section id="BichecoAventure">
        <div class="BichecoAventureContenue">
            <h2>Le projet <br>Bicheco <br>Aventure</h2>
            <div class="CarteVerte CartePassion">
            <h3>Une aventure partagée</h3>
            <p> Partager notre aventure avec nos proches et la faire vivre au-delà des frontières est rapidement devenu une évidence. C’est ainsi qu’est née notre chaîne YouTube. Passionné par la création et le montage vidéo, je me suis lancé dans la réalisation de vlogs hebdomadaires pour capturer chaque instant de notre road trip. Nous avons même adapté le rythme de notre voyage pour proposer un contenu toujours plus authentique et riche. Découvrez dès maintenant le premier épisode de cette incroyable aventure !</p>
            <button class="Bouton">Visité la chaine</button>
            </div>
        </div>
        <div class="BichecoAventureEpisode">
          <iframe
            src="https://www.youtube.com/embed/9GWgLgEsTDI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
  name: "PassionVoyage",
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
  @use '@/assets/scss/pages/voyage' as *;

</style>