<template>
  <div>
    <TitreDePage titre="Photo du mois" />
    <PhotoCard v-bind:postInPhoto="items"/>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import PhotoCard from "@/components/Photo/PhotoCard.vue";
import Footer from "@/components/Global/Footer";
import TitreDePage from "@/components/Global/TitrePage";
export default {
  name: "Photo",
  components: {
    PhotoCard,
    TitreDePage,
    Footer,
  },
  data: function () {
    return {
      items:[]
    };
  },
  async mounted() {
    await axios
      .get("http://localhost:8080/archive/")
      .then((result) => {
        console.log(result);
        this.items = result.data
        console.log(this.items);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>