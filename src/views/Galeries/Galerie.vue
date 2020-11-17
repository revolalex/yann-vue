<template>
  <div>
    <div class="myContainer">
      <TitreDePage titre="Galeries" />
      <GalerieMenu
        v-bind:imageInGaleries="imageInGaleries"
        v-bind:classes="classes"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Global/Footer";
import TitreDePage from "@/components/Global/TitrePage";
import GalerieMenu from "@/components/Galeries/GalerieMenu";
export default {
  name: "Gallery",
  components: {
    TitreDePage,
    GalerieMenu,
    Footer,
  },
  data: function () {
    return {
      imageInGaleries: [
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret23xs.jpg",
          alt: "foret",
          caption: "L'appel de la foret",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro1xs.jpg",
          alt: "abeille",
          caption: "Microcosmos",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flore/flore10xs.jpg",
          alt: "fleur",
          caption: "Féérie Végétale",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau2xs2.jpg",
          alt: "oiseaux marin",
          caption: "Au fil de l'eau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin2xs.jpg",
          alt: "oiseaux des jardins",
          caption: "Jardin d'Eden",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs1.jpg",
          alt: "biche",
          caption: "Noir et blanc",
        },
      ],
      classes: {
        box: "galeriesBox",
        container: "galeriesContainer ",
      },
    };
  },
};
</script>

<style>
</style>