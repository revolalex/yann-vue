import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Install BootstrapVue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from "bootstrap-vue";

//Lightbox
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import i18n from './i18n'

Vue.use(CoolLightBox)
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
