<template>
  <!-- Carousel zoom effect-->
  <b-carousel
    id="carousel-1"
    :interval="4000"
    background="#ababab"
    img-width="1024"
    fade
    img-height="480"
    style="text-shadow: 1px 1px 2px #333"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://yanncrochet.com/photo/foret/foret1xs.jpg"
          class="d-block w-100"
          alt="Ecureuil"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/foret/foret24xs.jpg"
          class="d-block w-100"
          alt="renardeau"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/eau/eau2xs.jpg"
          class="d-block w-100"
          alt="oiseaux"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/micro/micro2xs.jpg"
          class="d-block w-100"
          alt="insectes"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/foret/renard.jpg"
          class="d-block w-100"
          alt="renards"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/flore/flore3xs.jpg"
          class="d-block w-100"
          alt="fleur"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/eau/eau1xs.jpg"
          class="d-block w-100"
          alt="canard"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/foret25xs.jpg"
          class="d-block w-100"
          alt="sanglier"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/jardin/jardin13xs.jpg"
          class="d-block w-100"
          alt="chien"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/foret/chouette.jpg"
          class="d-block w-100"
          alt="chouette"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/eau/eau3xs.jpg"
          class="d-block w-100"
          alt="moineau"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/foret/foret13xs.jpg"
          class="d-block w-100"
          alt="biche"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://yanncrochet.com/photo/noirBlanc/nbxs3.jpg"
          class="d-block w-100"
          alt="noir et blanc"
        />
      </div>
    </div>
  </b-carousel>
</template>

<script>
export default {
    name: "Carousel"
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