<template>
  <div>
    <div class="fullHeight">
      <TitreDePage :titre="$t('Titre.Calendrier')" />
      <DeckCard v-bind:cards="cardInCalendrier" />
    </div>
    <br/>
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
    const $t = this.$t.bind(this)
    return {
      cardInCalendrier:[
        {
          src:"https://yanncrochet.com/images/calendrier2.jpg",
          text: $t('Calendrier.Card.Header'),
          title: $t("Calendrier.Card_body.Title"),
          linkText: $t("Calendrier.Publication.link"),
          link:"https://www.editions-artemis.com",
        },
        {
          src:"https://yanncrochet.com/images/calendrier.jpg",
          text: $t('Calendrier.Card.Header'),
          title: $t("Calendrier.Card_body.Title_2"),
          linkText: $t("Calendrier.Publication.link"),
          link:"https://www.editions-artemis.com",
        },
      ]

    }
  }
};
</script>

<style>

</style>