<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage titre="Jardin d'eden" />
      <GaleriePhoto v-bind:imageInGaleries="items" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Global/Footer";
import TitreDePage from "@/components/Global/TitrePage";
import GaleriePhoto from "@/components/Galeries/GaleriePhoto";
export default {
  name: "Jardin",
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
          src: "https://yanncrochet.com/photo/jardin/jardin8xs.jpg",
          alt: "oiseaux",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin10xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin9xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/11.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin12xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin4xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin7xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin3xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin2xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin11xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin5xs.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/jardin/jardin6xs.jpg",
          alt: "oiseau",
        },
      ],
    };
  },
};
</script>

<style>
</style>