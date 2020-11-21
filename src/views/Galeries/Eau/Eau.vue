<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage titre="Au fil de l'eau" />
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
  name: "Eau",
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
          src: "https://yanncrochet.com/photo/eau/eau2xs2.jpg",
          alt: "oiseaux marin",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau12xs.jpg",
          alt: "oiseau marin",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau1xs.jpg",
          alt: "canard",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau8xs.jpg",
          alt: "oiseaux marin",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau5xs.jpg",
          alt: "oiseau marin",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau9xs.jpg",
          alt: "mer",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/10.jpg",
          alt: "soleil et oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau11xs.jpg",
          alt: "oiseau marin",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau6xs.jpg",
          alt: "oiseau marin",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau13xs.jpg",
          alt: "grenouille",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau7xs.jpg",
          alt: "feuille",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/5.jpg",
          alt: "flamand rose",
        },
      ],
    };
  },
};
</script>

<style>
</style>