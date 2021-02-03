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
       myImg: [{}],
    };
  },
  async beforeCreate() {
    await axios
      .get(process.env.VUE_APP_URL_API+"/caroussel/")
      .then((result) => {
        if (result.status == 200) {
          this.myImg = result.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>