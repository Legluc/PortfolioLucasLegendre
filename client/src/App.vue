<template>
  <div id="app">
    <NavBar :overSection="navOverSection" :overFooter="navOverFooter"/>
    <router-view @section-intersect="handleSectionIntersect" @footer-intersect="handleFooterIntersect"/>
  </div>
</template>



<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      navOverSection: false,
      navOverFooter: false,
    }
  },
  methods: {
    handleSectionIntersect(isIntersecting) {
      this.navOverSection = isIntersecting
    },
    handleFooterIntersect(isIntersecting) {
      this.navOverFooter = isIntersecting
    },
  },
  watch: {
    $route() {
      this.navOverFooter = false;
      this.navOverSection = false;
    }
  }
};
</script>
