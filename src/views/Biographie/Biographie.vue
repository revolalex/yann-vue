<template>
  <div>
    <div class="fullHeight">
      <TitreDePage :titre="$t('Titre.Biographie')" />
      <div class="biographieContainer">
        <CardBiographie />
        <PortraitBiographie />
      </div>
    </div>
    <br/>
    <Footer />
  </div>
</template>

<script>
import CardBiographie from "@/components/Biographie/CardBiographie";
import PortraitBiographie from "@/components/Biographie/PortraitBiographie";
import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";

export default {
  name: "Biographie",
  methods: {},
  components: {
    CardBiographie,
    PortraitBiographie,
    TitreDePage,
    Footer,
  },
};
</script>

<style>
.biographieContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: justify;
}
#globalContainer{
  padding-bottom: 5vh;
}
</style>