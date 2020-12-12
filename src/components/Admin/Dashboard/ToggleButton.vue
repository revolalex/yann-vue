<template>
  <button
    id="sidebarCollapse"
    type="button"
    class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
    @click="emitButtonClick"
  >
  <div id="centerDiv">
    <b-icon icon="list" variant="info"></b-icon>
    <small class="text-uppercase font-weight-bold">
       Menu
    </small>
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