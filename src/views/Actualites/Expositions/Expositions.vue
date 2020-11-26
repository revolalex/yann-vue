<template>
  <div>
    <div class="myContainerGalerie">
      <TitreDePage :titre="$t('Titre.Expositions')" />
      <DeckCard v-bind:cards="cardInRow1"/>
      <br/>
      <DeckCard v-bind:cards="cardInRow2"/>
    </div>
    <br/>
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
    DeckCard
  },
    data: function () {
    return {
      cardInRow1: [
        {
          src: "https://yanncrochet.com/photo/grandAngle.jpg",
          text: this.$t('Expositions.Card.Text'),
          title: this.$t("Expositions.Card.Title"),
          linkText: this.$t("More_info.Text"),
          link: "https://yanncrochet.com/dl/nosart.pdf",
          small: this.$t('Expositions.Card.Small_text')
        },
        {
          src: "https://yanncrochet.com/photo/planterChoux.jpg",
          text: this.$t('Expositions.Card_2.Text'),
          title: this.$t("Expositions.Card_2.Title"),
          linkText: this.$t("More_info.Text"),
          link: "https://www.arts-sciences-lettres.fr",
          small: this.$t('Expositions.Card_2.Small_text')
        },
        {
          src: "https://yanncrochet.com/photo/art.jpg",
          text: this.$t("Expositions.Card_3.Text"),
          title: this.$t("Expositions.Card_3.Title"),
          linkText: this.$t("Expositions.Card_3.Link.Text"),
          link: "https://yanncrochet.com/dl/portrait.jpg",
          small: this.$t('Expositions.Card_3.Small_text')
        }
      ],
      cardInRow2: [
        {
          src: "https://yanncrochet.com/photo/anamorphose.jpg",
          text: this.$t("Expositions.Card_4.Text"),
          title: this.$t("Expositions.Card_4.Title"),
          linkText: this.$t("Expositions.Card_4.Link.text"),
          link: "https://www.dailymotion.com/video/xjmlwe",
          small: this.$t('Expositions.Card_4.Small_text')
        },
        {
          src: "https://yanncrochet.com/photo/arbreBio.jpg",
          text: this.$t("Expositions.Card_5.Text"),
          title: this.$t("Expositions.Card_5.Title"),
          linkText: this.$t("More_info.Text"),
          link: "https://yanncrochet.com/dl/expo.pdf",
          small: this.$t('Expositions.Card_5.Small_text')
        },
      ],
    };
  },
};
</script>

<style>
</style>