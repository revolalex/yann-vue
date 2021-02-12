<template>
  <b-carousel id="carousel-1" img-width="1024" fade v-if="imageInCarousel.length>1">
    <div class="carousel-inner">
      <b-carousel-slide
        v-for="image in imageInCarousel"
        :key="image.id"
        :img-src="getImgSrc(image.filename)"
        :img-alt="image.filename"
      />
    </div>
  </b-carousel>
</template>


<script>
/**
 * @module component - CarouselComponent
 * @param {array} - props:imageInCarousel {[url:"", alt:""]}
 */
export default {
  name: "CarouselComponent",
  props: {
    imageInCarousel: Array,
  },
  methods: {
    /**
     * @param filename
     * @returns the image links
     */
    getImgSrc(filename) {
      return require(`@/assets/uploads/images/caroussel/${filename}`);
    },
  },
};
</script>

<style>
/* full screen caroussel minus nav */
.carousel {
  height: calc(100vh - 56px);
}
.carousel-inner,
.carousel-item {
  height: 100%;
}
.carousel-item {
  background-color: #000;
}
.carousel-item img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* animation */
.carousel-inner .carousel-item > img {
  -webkit-animation: zoom 20s;
  animation: zoom 20s;
}
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
/* @media screen and (max-width: 1024px) {
  .carousel {
    left: 50%;
    margin-left: -512px;
  }
} */
</style>