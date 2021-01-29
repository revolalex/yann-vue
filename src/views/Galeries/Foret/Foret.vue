<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage :titre="$t('Titre.Galerie.Foret')" />
      <GaleriePhotos v-bind:imageInGaleries="coolLightBoxItems" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Global/Footer";
import TitreDePage from "@/components/Global/TitrePage";
import GaleriePhotos from "@/components/Galeries/GaleriePhotos";
import axios from "axios";
export default {
  name: "Foret",
  components: {
    TitreDePage,
    Footer,
    GaleriePhotos,
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
        .get("http://localhost:8080/galerie/foret/")
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
.myContainerGalerie {
  padding-left: 1vw;
  padding-right: 1vw;
  min-height: 100vh;
  margin-bottom: 10vh;
}
</style>