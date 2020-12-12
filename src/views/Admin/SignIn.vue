<template>
  <div class="home">
    <TitreDePage titre="Admin"/>
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Admin/Form";
import TitreDePage from"@/components/Global/TitrePage"
export default {
  name: "SignIn",
  components: {
    Form,
    TitreDePage,
  },
};
</script>
<style>

</style>
