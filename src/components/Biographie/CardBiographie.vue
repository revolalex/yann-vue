<template>
  <div class="card" style="width: 22rem">
    <img
      src="https://yanncrochet.com/images/PortraitYC.JPG"
      class="card-img-top"
      alt="Yann Crochet"
    />
    <div class="card-body">
      <h4>
        <vue-typed-js
          :typeSpeed="150"
          :backSpeed="50"
          :loop="true"
          :strings="textToRotate"
        >
          <h4><span class="typing"></span></h4>
        </vue-typed-js>
      </h4>
      <p class="card-text">
        {{$t("Biographie.Text.Card")}}
        {{$t("Biographie.Text.Card_part2")}}
        {{$t("Biographie.Text.Card_part3")}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBiographie",
  computed:{
    textToRotate(){
      let arrayTxtToRotate = [this.$t('Biographie.Text.Rotate')]
      return arrayTxtToRotate
    }
  },
};
</script>

<style>
</style>