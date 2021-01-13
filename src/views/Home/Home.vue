<template>
  <CarouselComponent v-bind:imageInCarousel="imageInCarousel" />
</template>

<script>
import CarouselComponent from "@/components/Carousel/Carousel";
import axios from "axios"
export default {
  name: "Carousel",
  components: {
    CarouselComponent,
  },
  data: function () {
    return {
      imageInCarousel: [
        {
          url: "https://yanncrochet.com/photo/foret/foret1xs.jpg",
          alt: "ecureuil",
        },
        {
          url: "https://yanncrochet.com/photo/foret/foret24xs.jpg",
          alt: "renardeaux",
        },
        { url: "https://yanncrochet.com/photo/eau/eau2xs.jpg", alt: "oiseaux" },
        {
          url: "https://yanncrochet.com/photo/micro/micro2xs.jpg",
          alt: "insecte",
        },
        {
          url: "https://yanncrochet.com/photo/foret/renard.jpg",
          alt: "renard",
        },
        {
          url: "https://yanncrochet.com/photo/flore/flore3xs.jpg",
          alt: "fleur",
        },
        { url: "https://yanncrochet.com/photo/eau/eau1xs.jpg", alt: "canard" },
        { url: "https://yanncrochet.com/photo/foret25xs.jpg", alt: "sanglier" },
        {
          url: "https://yanncrochet.com/photo/jardin/jardin13xs.jpg",
          alt: "chien",
        },
        {
          url: "https://yanncrochet.com/photo/foret/chouette.jpg",
          alt: "chouette",
        },
        {
          url: "https://yanncrochet.com/photo/eau/eau3xs.jpg",
          alt: "moineaux",
        },
        {
          url: "https://yanncrochet.com/photo/foret/foret13xs.jpg",
          alt: "biches",
        },
        {
          url: "https://yanncrochet.com/photo/noirBlanc/nbxs3.jpg",
          alt: "noir et blanc photographie",
        },
      ],
    };
  },
  async mounted() {
    await axios
      .get("http://localhost:8080/caroussel/")
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>