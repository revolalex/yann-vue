<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage :titre="$t('Titre.Galerie.Noir')" />
      <GaleriePhotos v-bind:imageInGaleries="coolLightBoxItems" />
    </div>
    <Footer />
  </div>
</template>
<script>
import axios from "axios";
import Footer from "@/components/Global/Footer";
import GaleriePhotos from "@/components/Galeries/GaleriePhotos";
import TitreDePage from "@/components/Global/TitrePage";
export default {
  name: "Noir",
  components: {
    GaleriePhotos,
    TitreDePage,
    Footer,
  },
  data: function () {
    return {
      items: [],
    };
  },
  computed: {
    coolLightBoxItems() {
      return this.items.map((img) => ({
        id: img.id,
        alt: img.alt,
        src: require(`@/assets/uploads/images/galerie/${img.filename}`),
      }));
    },
  },
  methods: {
    async getData() {
      await axios
        .get("http://localhost:8080/galerie/noir/")
        .then((result) => {
          console.log(result.data);
          this.items = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>
<style>
</style>