<template>
<div>
  <button
    id="sidebarCollapse"
    type="button"
    class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4 stickyButton"
    v-b-tooltip.hover
    title="Menu"
    @click="emitButtonClick"
  >
    <div id="centerDiv">
      <b-icon icon="list" variant="info"></b-icon>
    </div>
  </button>
  <button @click="effacer">Effacer</button></div>
</template>

<script>
export default {
  name: "ToggleButton",
  props: {
    isActive: Boolean,
  },
  methods: {
    emitButtonClick: function () {
      this.$emit("buttonClicked", true);
    },
    effacer(){
      this.$store.dispatch("RESET_TOKEN");
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
#centerDiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
.stickyButton{
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  left:-20px;
  z-index: 10000;
}

</style>