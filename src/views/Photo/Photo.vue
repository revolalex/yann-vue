<template>
  <div>
    <TitreDePage titre="Photo du mois"/>
    <PhotoCard />
    <Footer/>
  </div>
</template>

<script>
import PhotoCard from "@/components/Photo/PhotoCard.vue";
import Footer from "@/components/Global/Footer";
import TitreDePage from "@/components/Global/TitrePage";
export default {
  name: "Photo",
  components: {
    PhotoCard,
    TitreDePage,
    Footer
  },
};
</script>

<style>
</style>