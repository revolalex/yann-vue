<template>
  <div>
      <TitreDePage titre="Actualités"/>
    <GaleriesThumnails
      v-bind:imageInGaleries="imageInGaleries"
      v-bind:classes="classes"
    />
    <Footer />
  </div>
</template>

<script>
import TitreDePage from "../components/Global/TitrePage";
import GaleriesThumnails from "../components/Galeries/GaleriesThumnails";
import Footer from "../components/Global/Footer";
export default {
  name: "Actualites",
  components: {
    GaleriesThumnails,
    Footer,
    TitreDePage
  },
  data: function () {
    return {
      imageInGaleries: [
        {
          href: "",
          src: "https://yanncrochet.com/images/calendrier.jpg",
          alt: "foret",
          caption: "Calendriers",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/ff.jpg",
          alt: "presse",
          caption: "Parutions Presse",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/expo.jpg",
          alt: "oiseaux marin",
          caption: "Au fil de l'eau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/images/fc.png",
          alt: "france culture logo",
          caption: "Interview",
        },
      ],
      classes: {
        box: "actuBox",
        container: "actuContainer ",
      },
    };
  },
};
</script>

<style>
</style>