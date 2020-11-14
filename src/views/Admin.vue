<template>
  <div class="home">
    <TitreDePage titre="Admin"/>
    <Form />
  </div>
</template>

<script>
import Form from "../components/Admin/Form";
import TitreDePage from"../components/Global/TitrePage"
export default {
  name: "Home",
  components: {
    Form,
    TitreDePage
  },
};
</script>
<style>

</style>
