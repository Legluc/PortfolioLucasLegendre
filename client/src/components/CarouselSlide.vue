<template>
    <div class="CarouselSlide">
      <img :src="slide.image" :alt="slide.title" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      slide: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-slide {
    min-width: 100%;
    box-sizing: border-box;
  }
  </style>
  