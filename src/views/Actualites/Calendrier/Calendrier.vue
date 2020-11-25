<template>
  <div>
    <div class="fullHeight">
      <TitreDePage :titre="$t('Titre.Calendrier')" />
      <DeckCard v-bind:cards="cardInCalendrier" />
    </div>
    <Footer />
  </div>
</template>

<script>
import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";
import DeckCard from "@/components/Global/DeckCard";
export default {
  name: "Calendrier",
  components: {
    TitreDePage,
    Footer,
    DeckCard,
  },
  data: function () {
    return {
      cardInCalendrier:[
        {
          src:"https://yanncrochet.com/images/calendrier2.jpg",
          text: this.$t('Calendrier.Card.Header'),
          title: this.$t("Calendrier.Card_body.Title"),
          linkText: this.$t("Calendrier.Publication.link"),
          link:"https://www.editions-artemis.com",
        },
        {
          src:"https://yanncrochet.com/images/calendrier.jpg",
          text: this.$t('Calendrier.Card.Header'),
          title: this.$t("Calendrier.Card_body.Title_2"),
          linkText: this.$t("Calendrier.Publication.link"),
          link:"https://www.editions-artemis.com",
        },
      ]

    }
  }
};
</script>

<style>

</style>