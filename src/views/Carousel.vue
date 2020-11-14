<template>
  <!-- Carousel zoom effect-->
  <b-carousel
    id="carousel-1"
    :interval="3000"
    img-width="1024"
    fade
    img-height="480"
    style="text-shadow: 1px 1px 2px #333"
  >
    <div class="carousel-inner">
      <b-carousel-slide
        v-for="image in imagesInCarousel"
        :key="image.url"
        :img-src="image.url"
        :img-alt="image.alt"
      />
    </div>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data: function () {
    return {
      imagesInCarousel: [
        {
          url: "https://yanncrochet.com/photo/foret/foret1xs.jpg",
          alt: "ecureuil",
        },
        {
          url: "https://yanncrochet.com/photo/foret/foret24xs.jpg",
          alt: "renardeaux",
        },
        { url: "https://yanncrochet.com/photo/eau/eau2xs.jpg", 
          alt: "oiseaux" 
        },
        {
          url: "https://yanncrochet.com/photo/micro/micro2xs.jpg",
          alt: "insecte",
        },
        {
          url: "https://yanncrochet.com/photo/foret/renard.jpg",
          alt: "renard",
        },
        {
          url: "https://yanncrochet.com/photo/flore/flore3xs.jpg",
          alt: "fleur",
        },
        { url: "https://yanncrochet.com/photo/eau/eau1xs.jpg", 
          alt: "canard"
        },
        { url: "https://yanncrochet.com/photo/foret25xs.jpg", 
          alt: "sanglier" 
        },
        {
          url: "https://yanncrochet.com/photo/jardin/jardin13xs.jpg",
          alt: "chien",
        },
        {
          url: "https://yanncrochet.com/photo/foret/chouette.jpg",
          alt: "chouette",
        },
        {
          url: "https://yanncrochet.com/photo/eau/eau3xs.jpg",
          alt: "moineaux",
        },
        {
          url: "https://yanncrochet.com/photo/foret/foret13xs.jpg",
          alt: "biches",
        },
        {
          url: "https://yanncrochet.com/photo/noirBlanc/nbxs3.jpg",
          alt: "noir et blanc photographie",
        },
      ],
    };
  },
};
</script>

<style>
body {
  background-color: grey;
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
  width: 100vw;
  height: auto;
  /* Set up positioning */
  position: fixed;
  top: 20;
  left: 0;
}

@media screen and (max-width: 1024px) {
  /* Specific to this particular image */
  .carousel {
    left: 50%;
    margin-left: -512px;
    /* 50% */
  }
}
nav {
  background-color: #0005;
}

</style>