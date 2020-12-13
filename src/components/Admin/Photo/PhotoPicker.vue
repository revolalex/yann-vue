<template>
<!-- using imageData data property to display the selected image as background-image -->
  <div
    class="base-image-input p-5"
    :style="{ 'background-image': `url(${imageData})` }"
    @click="chooseImage"
  >
    <span v-if="!imageData" class="placeholder"> Choisi une image </span>
    <input
      class="file-input"
      ref="fileInput"
      type="file"
      @input="onSelectFile"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageData: null,
      imageupload: null
    };
  },
  methods: {
    // just calling click() on <input type="file"> to show the file picker.
    chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
        this.imageupload = files
      }
    },
  },
};
</script>

<style scoped>
.base-image-input {
  display: block;
  margin: auto;
  min-height: 340px;
  max-width: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

}
.placeholder {
  background: #F0F0F0;
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #E0E0E0;
}
.file-input {
  display: none;
}
@media screen and (max-width: 600px) {
  .base-image-input {
      height: 280px;
  width: 280px;
  }
}

/* https://levelup.gitconnected.com/how-to-preview-images-before-uploading-them-in-vue-4964803adb64 */
</style>