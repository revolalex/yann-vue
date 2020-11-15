import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Install BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from "bootstrap-vue";

//Lightbox
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
