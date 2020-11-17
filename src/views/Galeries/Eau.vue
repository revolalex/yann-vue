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
          alt: "foret brumeuse",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau12xs.jpg",
          alt: "rapace",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau1xs.jpg",
          alt: "cerf",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau8xs.jpg",
          alt: "chouette",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau5xs.jpg",
          alt: "renardeaux",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau9xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/10.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau11xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau6xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau13xs.jpg",
          alt: "sanglier",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/eau7xs.jpg",
          alt: "rapace",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/eau/5.jpg",
          alt: "écureuil",
        },
      ],
    };
  },
};
</script>

<style>
</style>