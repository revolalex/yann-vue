<template>
    <b-carousel
    id="carousel-1"
    :interval="4000"
    img-width="1024"
    fade
    img-height="480"
    style="text-shadow: 1px 1px 2px #333"
  >
    <div class="carousel-inner">
      <b-carousel-slide
        v-for="image in imageInCarousel"
        :key="image.url"
        :img-src="image.url"
        :img-alt="image.alt"
      />
    </div>
  </b-carousel>
</template>


<script>
/**
 * @module component - CarouselComponent
 * @param {array} - imageInCarousel
 */
export default {
  name: "CarouselComponent",
  props:{
    imageInCarousel: Array
  }
};
</script>

<style>

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(1, 1);
  }

  to {
    -webkit-transform: scale(1.5, 1.5);
  }
}

@keyframes zoom {
  from {
    transform: scale(1, 1);
  }

  to {
    transform: scale(1.5, 1.5);
  }
}

.carousel-inner .carousel-item > img {
  /* 20s d'origine */
  -webkit-animation: zoom 20s;
  animation: zoom 20s;
}

.carousel {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;
  /* Set up proportionate scaling */
  /* width: 100vw;
  height: auto; */
  /* Set up positioning */
  position: fixed;
  top: 20;
  left: 0;

  object-fit: cover;
}

@media screen and (max-width: 1024px) {
  /* Specific to this particular image */
  .carousel {
    left: 50%;
    margin-left: -512px;
    /* 50% */
  }
}

</style>