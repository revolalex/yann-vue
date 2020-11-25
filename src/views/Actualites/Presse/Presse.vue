<template>
  <div>
    <TitreDePage titre="Parutions Presse" />
    <DeckCard v-bind:cards="cardInCalendrier"/>
    <br/>
    <DeckCard v-bind:cards="cardInCalendrier2"/>

    <!-- <div class="container m-t-md">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="card-header">Parution presse - Nos'Arts</div>
          <img
            src="https://yanncrochet.com/images/artiste.jpg"
            class="card-img-top img-thumbnail"
            alt="artiste"
          />
          <div class="card-body">
            <h5 class="card-title">Portrait d'un artiste parisien</h5>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted"
                ><a href="https://yanncrochet.com/dl/nosart.pdf">Plus d'info</a>
              </small>
            </p>
          </div>
        </div>

        <div class="col-xs-12 col-md-6">
          <div class="card-header">Parution presse - Nos'Arts</div>
          <img
            src="https://yanncrochet.com/images/portrait.jpg"
            class="card-img-top img-thumbnail"
            alt="portrait"
          />
          <div class="card-body">
            <h5 class="card-title">Photographe animalier</h5>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted"
                ><a href="https://yanncrochet.com/dl/portrait.jpg"
                  >Plus d'info</a
                >
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>


    <div class="container m-t-md">
      <div class="row">
        <div class="col-xs-12 col-md-6">
          <div class="card-header">Parution presse - Nat'images</div>
          <img
            src="https://yanncrochet.com/images/natimage.jpg"
            class="card-img-top img-thumbnail"
            alt="natimage presse"
          />
          <div class="card-body">
            <h5 class="card-title">La macrophoto</h5>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted"
                ><a href="https://yanncrochet.com/dl/natimage.pdf"
                  >Plus d'info</a
                >
              </small>
            </p>
          </div>
        </div>

        <div class="col-xs-12 col-md-6">
          <div class="card-header">
            Parution presse - Mairie du 17ème arrondissement
          </div>
          <img
            src="https://yanncrochet.com/images/expo.jpg"
            class="card-img-top img-thumbnail"
            alt="expositions"
          />
          <div class="card-body">
            <h5 class="card-title">Grand angle sur la nature</h5>
            <p class="card-text"></p>
            <p class="card-text">
              <small class="text-muted"
                ><a href="https://yanncrochet.com/dl/expo.pdf">Plus d'info</a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div> -->
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
          linkText: this.$t("Presse.Card.Link.Text"),
          link: "https://yanncrochet.com/dl/nosart.pdf",
        },
        {
          src: "https://yanncrochet.com/images/portrait.jpg",
          text: this.$t("Presse.Card_2.Header"),
          title: this.$t("Presse.Card_2.Title"),
          linkText: this.$t("Presse.Card_2.Link.Text"),
          link: "https://yanncrochet.com/dl/portrait.jpg",
        },
      ],
      cardInCalendrier2: [
        {
          src: "https://yanncrochet.com/images/natimage.jpg",
          text: this.$t("Presse.Card_3.Header"),
          title: this.$t("Presse.Card_3.Title"),
          linkText: this.$t("Presse.Card_3.Link.Text"),
          link: "https://yanncrochet.com/dl/natimage.pdf",
        },
        {
          src: "https://yanncrochet.com/images/expo.jpg",
          text: this.$t("Presse.Card_4.Header"),
          title: this.$t("Presse.Card_4.Title"),
          linkText: this.$t("Presse.Card_4.Link.Text"),
          link: "https://yanncrochet.com/dl/expo.pdf",
        },
      ],
    };
  },
};
</script>

<style>
</style>