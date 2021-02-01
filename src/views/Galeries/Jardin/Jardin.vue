<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage :titre="$t('Titre.Galerie.Jardin')" />
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
  name: "Jardin",
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
        .get(process.env.VUE_APP_URL_API+"/galerie/jardin/")
        .then((result) => {
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