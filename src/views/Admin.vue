<template>
  <div class="home">
    <TitreDePage titre="Admin"/>
    <Form />
    <ForetComponent/>
  </div>
</template>

<script>
import Form from "../components/Admin/Form";
import TitreDePage from"../components/Global/TitrePage"
import ForetComponent from "../components/Galeries/Foret/ForetComponent"
export default {
  name: "Home",
  components: {
    Form,
    TitreDePage,
    ForetComponent
  },
};
</script>
<style>

</style>
