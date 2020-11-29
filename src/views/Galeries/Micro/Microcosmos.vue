<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage :titre="$t('Titre.Galerie.Micro')" />
      <GaleriePhoto v-bind:imageInGaleries="items" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Global/Footer";
import GaleriePhoto from "@/components/Galeries/GaleriePhoto";
import TitreDePage from "@/components/Global/TitrePage";
export default {
  name: "Microcosmos",
  components: {
    GaleriePhoto,
    TitreDePage,
    Footer,
  },
  data: function () {
    return {
      items: [
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro10xs.jpg",
          alt: "lebellule",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro9xs.jpg",
          alt: "papillon",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro5xs.jpg",
          alt: "sauterelle",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro1xs.jpg",
          alt: "guepe",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro4xs.jpg",
          alt: "guepe",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro3xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro6xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro7xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro14xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro15xs.jpg",
          alt: "sanglier",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micro16xs.jpg",
          alt: "rapace",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/micro/micros1xs.jpg",
          alt: "foret",
        },
      ],
    };
  },
};
</script>

<style>
</style>