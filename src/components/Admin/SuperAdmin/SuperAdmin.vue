<template>
  <h1>SUPERAdmin Galeries</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "GaleriesAdmin",
  data: function () {
    return {
      // header for token (back end use middleware)
      headerConfig: {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      },
    };
  },
  async mounted() {
    await axios
      .get("http://localhost:8080/admin/", this.headerConfig)
      .then((result) => {
        console.log("result", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>