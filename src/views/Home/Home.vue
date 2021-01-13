<template>
  <CarouselComponent v-bind:imageInCarousel="myImg" />
</template>

<script>
import CarouselComponent from "@/components/Carousel/Carousel";
import axios from "axios";
export default {
  name: "Carousel",
  components: {
    CarouselComponent,
  },
  data: function () {
    return {
      myImg: [{
          filename: "https://yanncrochet.com/photo/foret/foret1xs.jpg",
        }],
    };
  },
  async beforeMount() {
    await axios
      .get("http://localhost:8080/caroussel/")
      .then((result) => {
        console.log(result.data);
        this.myImg = result.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>