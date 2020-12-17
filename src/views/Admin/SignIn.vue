<template>
  <div class="home">
    <TitreDePage titre="Admin"/>
    <SignInForm />
  </div>
</template>

<script>
import SignInForm from "@/components/Admin/SignInForm.vue";
import TitreDePage from "@/components/Global/TitrePage";
export default {
  name: "SignIn",
  components: {
    SignInForm,
    TitreDePage,
  },
};
</script>
<style>
</style>
