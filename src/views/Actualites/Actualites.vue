<template>
  <div>
    <div class="container m-t-md fullHeight">
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
  computed:{
    imageInGaleries(){
      const $t = this.$t.bind(this)
      let imageInGaleries = [
        {
          href: "actualites/calendrier",
          src: "https://yanncrochet.com/images/calendrier.jpg",
          alt: "foret",
          caption: $t('Calendrier.Card.Header'),
        },
        {
          href: "actualites/presse",
          src: "https://yanncrochet.com/photo/ff.jpg",
          alt: "presse",
          caption: $t('Titre.Parutions.presse'),
        },
        {
          href: "actualites/expositions",
          src: "https://yanncrochet.com/photo/expo.jpg",
          alt: "expositions",
          caption: $t('Titre.Expositions'),
        },
        {
          href: "actualites/interview",
          src: "https://yanncrochet.com/images/fc.png",
          alt: "france culture logo",
          caption: $t('Titre.Interview'),
        },
      ]
      return imageInGaleries
    }
  },
  data: function () {
    return {
      classes: {
        box: "actuBox",
        container: "actuContainer ",
      },
    };
  },
};
</script>

<style>
.fullHeight{
  min-height:100vh ;
}

</style>