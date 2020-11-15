<template>
  <div id="app">
    <CoolLightBox
      :items="items"
      :index="index"
      :effect="'fade'"
      @close="index = null"
    >
    </CoolLightBox>

    <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForetComponent",
  data: function () {
    return {
      items: [
        "https://yanncrochet.com/photo/foret/foret23xs.jpg",
        "https://yanncrochet.com/photo/micro/micro1xs.jpg",
        "https://yanncrochet.com/photo/flore/flore10xs.jpg"
      ],
      index: null,
    };
  },
};
</script>