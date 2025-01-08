<template>
    <div class="CarteJeux" @click="toggleFlip">
      <div class="CardInner" :class="{ flipped: isFlipped }">
        <!-- Face avant -->
        <div class="CarteJeuxRecto">
          <div class="CadreTitreCarte">
            <p>{{ jeu }}</p>
          </div>
          <img :src="image" alt="Card image" class="CardImage" />
          <div class="CadreTitreCarte">
            <p>{{ typeJeu }}</p>
          </div>
          <div class="CarteContenueRecto">
            <p class="CarteContenueTitre">{{ effetSpecial }}</p>
            <p >{{ description }}</p>
          </div>
          <div class="CarteBas">
            <p>{{ studio }}</p>
            <p>{{ dateSortie }}</p>
          </div>
        </div>
        <!-- Face arrière -->
        <div class="CarteJeuxVerso" :style="{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }">
            <div class="CadreTitreCarte">
              <p>{{ personnage }}</p>
            </div>
            <div class="CarteHistoire">
              <div class="CadreTitreCarte">
                <p>Histoire</p>
              </div>
              <div class="CarteContenueVerso">
                <p>{{ histoire }}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarteJeux',
    props: {
      jeu: { type: String, required: true },
      image: { type: String, required: true },
      typeJeu: { type: String, required: true },
      effetSpecial: { type: String, required: true },
      description: { type: String, required: true },
      studio: { type: String, required: true },
      dateSortie: { type: String, required: true },
      personnage: { type: String, required: true },
      histoire: { type: String, required: true },
      backgroundImage: { type: String, required: false },
    },
    data() {
      return {
        isFlipped: false, // Indique si la carte est retournée
      };
    },
    methods: {
      toggleFlip() {
        this.isFlipped = !this.isFlipped; // Alterne l'état de retournement
      },
    },
  };
  </script>
  
<style lang="scss">
  @use '@/assets/scss/components/carteJeux' as *;

</style> 
  