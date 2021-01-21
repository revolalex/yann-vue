
<template>
  <div>
    <CoolLightBox
      :items="imageInGaleries"
      :fullScreen="true"
      :index="index"
      @close="index = null"
    >
    </CoolLightBox>
<!--  :style="{backgroundImage:`url('${require(`../../assets/uploads/images/galerie/${image.filename}`)}`}" -->
    <div class="images-wrapper" v-if="imageInGaleries.length >= 1">
      <b-img
        class="image-galerie"
        v-for="(image, imageIndex) in imageInGaleries"
        :key="imageIndex"
        @click="index = imageIndex"
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
  name: "GaleriePhotos",
  props: {
    imageInGaleries: Array,
  },
  data: function () {
    return {
      index: null
    };

  },
  methods: {
    getImgSrc(filename) {
      if (filename) {
        return require(`../../assets/uploads/images/galerie/${filename}`);
      }
    },
  },
};
</script>
<style scoped>
.images-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image-galerie {
  width: 400px;
  height: 450px;
  -webkit-transform: scale(0.95);
  -moz-transform: scale(0.95);
  transform: scale(0.95);
  object-fit: cover;
  transition: all 5.5s ease;
}
.image-galerie:hover {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}

/* Mobile responsive  iphone 6/7/8 Plus..... */
@media (min-width: 400px) and (max-width: 420px) {
  /* 1 colonne 
   .image-galerie {
  width: 324px;
  height: 364px;
} */

  /* 2 colonnes */
  .image-galerie {
    width: 198px;
    height: 232px;
  }
}
/* iphone X  6/7/8 */
@media (width: 375px) {
  /* 2 colonnes */
  .image-galerie {
    width: 180px;
    height: 232px;
  }
}

/* iphone 5 */
@media (width: 320px) {
  /* 2 colonnes */
  .image-galerie {
    width: 150px;
    height: 180px;
  }
}
</style>