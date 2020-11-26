<template>
  <div>
    <TitreDePage titre="Parutions Presse" />
    <DeckCard v-bind:cards="cardInCalendrier"/>
    <br/>
    <DeckCard v-bind:cards="cardInCalendrier2"/>
    <br/>
    <Footer />
  </div>
</template>

<script>
import TitreDePage from "@/components/Global/TitrePage.vue";
import DeckCard from "@/components/Global/DeckCard";
import Footer from "@/components/Global/Footer";
export default {
  name: "Presse",
  components: {
    TitreDePage,
    Footer,
    DeckCard,
  },
  data: function () {
    return {
      cardInCalendrier: [
        {
          src: "https://yanncrochet.com/images/artiste.jpg",
          text: this.$t("Presse.Card.Header"),
          title: this.$t("Presse.Card.Title"),
          linkText: this.$t("More_info.Text"),
          link: "https://yanncrochet.com/dl/nosart.pdf",
        },
        {
          src: "https://yanncrochet.com/images/portrait.jpg",
          text: this.$t("Presse.Card_2.Header"),
          title: this.$t("Presse.Card_2.Title"),
          linkText: this.$t("More_info.Text"),
          link: "https://yanncrochet.com/dl/portrait.jpg",
        },
      ],
      cardInCalendrier2: [
        {
          src: "https://yanncrochet.com/images/natimage.jpg",
          text: this.$t("Presse.Card_3.Header"),
          title: this.$t("Presse.Card_3.Title"),
          linkText: this.$t("More_info.Text"),
          link: "https://yanncrochet.com/dl/natimage.pdf",
        },
        {
          src: "https://yanncrochet.com/images/expo.jpg",
          text: this.$t("Presse.Card_4.Header"),
          title: this.$t("Presse.Card_4.Title"),
          linkText: this.$t("More_info.Text"),
          link: "https://yanncrochet.com/dl/expo.pdf",
        },
      ],
    };
  },
};
</script>

<style>
</style>