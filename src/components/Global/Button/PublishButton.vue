<template>
  <b-button
    variant="info"
    @click="publierWasClickerd"
    v-b-popover.hover.topright="'Click pour ajouter'"
    title="Ajouter l'image à Home"
  >
    <b-icon icon="camera" variant="light" scale="1"></b-icon>
    Publier
  </b-button>
</template>

<script>
/**
 * @module component - PublishButton
 */
export default {
  name: "PublishButton",
  methods: {
    publierWasClickerd() {
      this.$emit("publierClicked");
    },
  },
};
</script>

<style>
</style>