<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage :titre="$t('Titre.Expositions')" />
      <DeckCard v-bind:cards="cardInRow1" />
      <br />
      <DeckCard v-bind:cards="cardInRow2" />
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
import TitreDePage from "@/components/Global/TitrePage";
import DeckCard from "@/components/Global/DeckCard";
import Footer from "@/components/Global/Footer";
export default {
  name: "Expositions",
  components: {
    TitreDePage,
    Footer,
    DeckCard,
  },
  computed: {
    cardInRow2() {
      const $t = this.$t.bind(this);
      let cardInRow2 = [
        {
          src: "https://yanncrochet.com/photo/anamorphose.jpg",
          text: $t("Expositions.Card_4.Text"),
          title: $t("Expositions.Card_4.Title"),
          linkText: $t("Expositions.Card_4.Link.text"),
          link: "https://www.dailymotion.com/video/xjmlwe",
          small: $t("Expositions.Card_4.Small_text"),
        },
        {
          src: "https://yanncrochet.com/photo/arbreBio.jpg",
          text: $t("Expositions.Card_5.Text"),
          title: $t("Expositions.Card_5.Title"),
          linkText: $t("More_info.Text"),
          link: "https://yanncrochet.com/dl/expo.pdf",
          small: $t("Expositions.Card_5.Small_text"),
        },
      ];
      return cardInRow2;
    },
    cardInRow1() {
      const $t = this.$t.bind(this);
      let cardInRow1 = [
        {
          src: "https://yanncrochet.com/photo/grandAngle.jpg",
          text: $t("Expositions.Card.Text"),
          title: $t("Expositions.Card.Title"),
          linkText: $t("More_info.Text"),
          link: "https://yanncrochet.com/dl/nosart.pdf",
          small: $t("Expositions.Card.Small_text"),
        },
        {
          src: "https://yanncrochet.com/photo/planterChoux.jpg",
          text: $t("Expositions.Card_2.Text"),
          title: $t("Expositions.Card_2.Title"),
          linkText: $t("More_info.Text"),
          link: "https://www.arts-sciences-lettres.fr",
          small: $t("Expositions.Card_2.Small_text"),
        },
        {
          src: "https://yanncrochet.com/photo/art.jpg",
          text: $t("Expositions.Card_3.Text"),
          title: $t("Expositions.Card_3.Title"),
          linkText: $t("Expositions.Card_3.Link.Text"),
          link: "https://yanncrochet.com/dl/portrait.jpg",
          small: $t("Expositions.Card_3.Small_text"),
        },
      ];
      return cardInRow1;
    },
  },
};
</script>

<style>
</style>