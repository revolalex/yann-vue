<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage titre="L'appel de la fôret" />
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
  name: "Foret",
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
          src: "https://yanncrochet.com/photo/foret/foret15xs.jpg",
          alt: "foret brumeuse",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/8.jpg",
          alt: "rapace",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret3xs.jpg",
          alt: "cerf",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret22xs.jpg",
          alt: "chouette",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret24xs.jpg",
          alt: "renardeaux",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret13xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret5xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret8xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret9xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret23xs.jpg",
          alt: "sanglier",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret2xs.jpg",
          alt: "rapace",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret11xs.jpg",
          alt: "foret",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret1xs.jpg",
          alt: "écureuil",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret6xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret7xs.jpg",
          alt: "biche",
        },
        {
          href: "",
          src: "https://yanncrochet.com/photo/foret/foret4xs.jpg",
          alt: "cerf",
        },
      ],
    };
  },
};
</script>

<style>
.myContainerGalerie{
    padding-left: 1vw;
  padding-right: 1vw;
  min-height: 100vh;
  margin-bottom: 10vh;
}
</style>