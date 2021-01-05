<template>
  <div class="card" style="width: 22rem; height: 910px">
    <img
      src="https://yanncrochet.com/images/PortraitYC.JPG"
      class="card-img-top"
      alt="Yann Crochet"
    />
    <div class="card-body">
      <vue-typed-js
        :typeSpeed="120"
        :backSpeed="50"
        :loop="true"
        :strings="textToRotate"
        :cursorChar="'_'"
      >
        <h4 id="typingHeight"><span class="typing"></span></h4>
      </vue-typed-js>

      <p id="cardText" class="card-text">
        {{ $t("Biographie.Text.Card") }}
        {{ $t("Biographie.Text.Card_part2") }}
        {{ $t("Biographie.Text.Card_part3") }}
      </p>
    </div>
  </div>
</template>

<script>
/**
 * @module component - CardBiographie
 */
export default {
  name: "CardBiographie",
  computed: {
    textToRotate() {
      let arrayTxtToRotate = [this.$t("Biographie.Text.Rotate")];
      return arrayTxtToRotate;
    },
  },
};
//https://github.com/Orlandster/vue-typed-js
</script>

<style>
#typingHeight {
  height: 60px;
  vertical-align: top;
}
</style>