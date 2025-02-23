<template>
    <section class="GalerieGlobal">
      <transition-group name="fade" tag="div" class="Galerie">
        <div v-for="(group, groupIndex) in groupedImages" :key="groupIndex" class="GaleriePack">
          <img 
            v-for="imgKey in group" 
            :key="imgKey" 
            :src="images[imgKey]"
            sizes="(max-width: 768px) 800px, 400px"
            alt="Image de la galerie"
            loading="lazy"
            />
        </div>
      </transition-group>
    </section>
  </template>
  
  <script>
  export default {
    name: 'DynamicGallery',
    props: {
      images: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        displayedImages: [],
        intervalId: null,
      };
    },
    computed: {
      // Regroupe les 6 images en paquets de 3
      groupedImages() {
        const groups = [];
        for (let i = 0; i < this.displayedImages.length; i += 3) {
          groups.push(this.displayedImages.slice(i, i + 3));
        }
        return groups;
      },
    },
    methods: {
      // Met à jour la galerie en sélectionnant 6 images aléatoires et distinctes
      updateGallery() {
        // Récupère toutes les clés se terminant par des chiffres et dont la valeur est définie
        const keys = Object.keys(this.images)
          .filter(key => /\d+$/.test(key) && this.images[key]);
        
        // Exclut celles déjà affichées
        let availableKeys = keys.filter(key => !this.displayedImages.includes(key));
        
        // Si on n'a pas assez d'images de remplacement, on réinitialise pour utiliser toutes les images disponibles
        if (availableKeys.length < 6) {
          availableKeys = keys;
        }
        
        // Mélange aléatoirement le tableau (algorithme de Fisher-Yates)
        for (let i = availableKeys.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [availableKeys[i], availableKeys[j]] = [availableKeys[j], availableKeys[i]];
        }
        
        // Sélectionne les 6 premières images du tableau mélangé
        this.displayedImages = availableKeys.slice(0, 6);
      },
    },
    mounted() {
      this.updateGallery();
      this.intervalId = setInterval(this.updateGallery, 10000);
    },
    beforeUnmount() {
      clearInterval(this.intervalId);
    },
  };
  </script> 
    <style lang="scss">
    @use '@/assets/scss/components/galerie' as *;

    </style>
    