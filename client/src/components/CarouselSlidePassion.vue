<template>
    <div class="ImagePassion">
      <router-link :to="slide.link">
        <img :src="slide.image" :alt="slide.alt" />
        <div class="TextePassion">
          <p>{{ slide.title }}</p>
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarouselSlidePassion',
    props: {
      slide: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Au besoin, styles spécifiques */
  </style>
  