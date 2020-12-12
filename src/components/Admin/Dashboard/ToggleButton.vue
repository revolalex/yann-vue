<template>
  <button
    id="sidebarCollapse"
    type="button"
    class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
    v-b-tooltip.hover title="Menu"
    @click="emitButtonClick"
  >
  <div id="centerDiv">
    <b-icon icon="list" variant="info"></b-icon>

    </div>
  </button>
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
  },
};
</script>

<style>
#centerDiv{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>