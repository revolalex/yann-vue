<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage :titre="$t('Titre.Galerie.Noir')" />
      <GaleriePhoto v-bind:imageInGaleries="items" />
    </div>
    <Footer />
  </div>
</template>

<script>
import GaleriePhoto from "@/components/Galeries/GaleriePhoto";
import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";
export default {
  name: "NoirEtBlanc",
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
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs9.jpg",
          alt: "libellule",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs2.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs10.jpg",
          alt: "insecte",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs4.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs1.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs5.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs7.jpg",
          alt: "plume",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs11.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs6.jpg",
          alt: "arbre",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs8.jpg",
          alt: "oiseau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs12.jpg",
          alt: "eau",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/noirBlanc/nbxs3.jpg",
          alt: "oiseau",
        },
      ],
    };
  },
};
</script>

<style>
</style>