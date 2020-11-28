
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
  width: 400px;

  height: 450px;
  /* object-fit: cover;
  transition: transform 0.5s ease; */
  -webkit-transform: scale(0.95);
  -moz-transform: scale(0.95);
  transform: scale(0.95);
  object-fit: cover;
  transition: all 2s ease;
}
.image:hover {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}
</style>