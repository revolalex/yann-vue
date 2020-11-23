<template>
  <div>
    <div class="myContainer">
      <TitreDePage :titre="$t('Titre.Actualites')" />
      <GalerieMenu
        v-bind:imageInGaleries="imageInGaleries"
        v-bind:classes="classes"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import TitreDePage from "@/components/Global/TitrePage";
import GalerieMenu from "@/components/Galeries/GalerieMenu";
import Footer from "@/components/Global/Footer";
export default {
  name: "Actualites",
  components: {
    GalerieMenu,
    Footer,
    TitreDePage,
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
          alt: "exposition",
          caption: "Exposition",
        },
        {
          href: "actualites/interview",
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
.myContainer {
  padding-left: 10vw;
  padding-right: 10vw;
  min-height: 100vh;
}
</style>