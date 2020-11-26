<template>
  <div>
    <div class="myContainer">
      <TitreDePage :titre="$t('Titre.Galeries')" />
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
    const $t = this.$t.bind(this)
    return {
      imageInGaleries: [
        {
          href: "/galeries/foret",
          src: "https://yanncrochet.com/photo/foret/foret23xs.jpg",
          alt: "foret",
          caption: $t('Titre.Galerie.Foret')
        },
        {
          href: "/galeries/microcosmos",
          src: "https://yanncrochet.com/photo/micro/micro1xs.jpg",
          alt: "abeille",
          caption: $t('Titre.Galerie.Micro')
        },
        {
          href: "/galeries/vegetale",
          src: "https://yanncrochet.com/photo/flore/flore10xs.jpg",
          alt: "fleur",
          caption: $t('Titre.Galerie.Vegetale')
        },
        {
          href: "/galeries/eau",
          src: "https://yanncrochet.com/photo/eau/eau2xs2.jpg",
          alt: "oiseaux marin",
          caption: $t('Titre.Galerie.Eau')
        },
        {
          href: "/galeries/jardin",
          src: "https://yanncrochet.com/photo/jardin/jardin2xs.jpg",
          alt: "oiseaux des jardins",
          caption: $t('Titre.Galerie.Jardin')
        },
        {
          href: "/galeries/noir",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs1.jpg",
          alt: "biche",
          caption: $t('Titre.Galerie.Noir')
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