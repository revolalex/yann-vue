<template>
  <div>
    <TitreDePage titre="Féérie Végetale" />
    <GaleriePhoto v-bind:imageInGaleries="items" />
    <Footer/>
  </div>
</template>

<script>
import GaleriePhoto from "@/components/Galeries/GaleriePhoto";
import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";
export default {
  name: "Vegetale",
  components: {
    GaleriePhoto,
    TitreDePage,
    Footer
  },
  data: function () {
    return {
      items: [
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors4xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/3.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors7xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors5xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors1xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors2xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors8xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors6xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors12xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors10xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors11xs.jpg",
          alt: "fleur",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/flors/flors9xs.jpg",
          alt: "fleur",
        },
      ],
    };
  },
};
</script>

<style>
</style>