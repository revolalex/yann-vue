<template>
  <div>
    <h1 class="adminTitle">Galerie</h1>
    <div id="centerDivAdmin">
      <div>
        <b-tabs content-class="mt-3">
          <AdminForet />
          <AdminMicro />
          <AdminFlore />
          <AdminEau />
          <AdminJardin />
          <AdminNoirEtBlanc />
        </b-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import AdminMicro from "./AdminMicro";
import AdminFlore from "./AdminFlore";
import AdminEau from "./AdminEau";
import AdminJardin from "./AdminJardin";
import AdminNoirEtBlanc from "./AdminNoirEtBlanc";
import AdminForet from "./AdminForet";
export default {
  name: "GalerieAdmin",
  components: {
    AdminForet,
    AdminMicro,
    AdminFlore,
    AdminEau,
    AdminJardin,
    AdminNoirEtBlanc,
  },
  data() {
    return {};
  },
};
</script>

<style>
#centerDivAdmin {
  display: flex;
  justify-content: center;
  align-items: center;
}
#pubierAdminBtn {
  text-align: center;
  vertical-align: middle;
}
</style>