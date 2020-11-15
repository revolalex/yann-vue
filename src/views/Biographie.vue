<template>
  <div>
    <TitreDePage titre="Biographie" />
    <div class="aproposContainer">
      <CardApropos />
      <PortraitApropos />
    </div>
    <Footer />
  </div>
</template>

<script>
import CardApropos from "@/components/APropos/CardApropos";
import PortraitApropos from "@/components/APropos/PortraitApropos";
import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";

export default {
  name: "Apropos",
  methods: {},
  components: {
    CardApropos,
    PortraitApropos,
    TitreDePage,
    Footer,
  },
};
</script>

<style>
.aproposContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: justify;
}
</style>