
<template>
  <div id="test2">
    <CoolLightBox
      :items="imageInGaleries"
      :fullScreen="true"
      :index="index"
      @close="index = null"
    >
    </CoolLightBox>

    <div class="images-wrapper">
      <b-img
        class="image"
        v-for="(image, imageIndex) in imageInGaleries"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  /**
   * @module component - GaleriePhoto
   * @param {array} - imageInGaleries
   */
  name: "GaleriePhoto",
  props: {
    imageInGaleries: Array,
  },
  data: function () {
    return {
      index: null,
    };
  },
};
</script>
<style scoped>
.images-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image {
  width: 350px;
  margin: 0.5% 0.5% 0.5% 0.5%;
  height: 390px;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.image:hover {
  transform: scale(1.02);
}
</style>