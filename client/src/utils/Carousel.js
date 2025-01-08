export const carouselProps = {
    images: {
      type: Array, // Le carousel reçoit un tableau d'images via cette prop
      required: true,
    },
  };
  
  export const carouselData = () => ({
    currentSlide: 0, // Indique l'index de la slide active
    interval: null,  // Stocke l'ID de l'intervalle pour l'auto-slide
  });
  
  export const carouselComputed = {
    getTransformStyle() {
      // Calcule la transformation pour déplacer les slides horizontalement
      return `translateX(-${this.currentSlide * 100}%)`;
    },
  };
  
  export const carouselMethods = {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
  };




  