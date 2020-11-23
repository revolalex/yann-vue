import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'
import es from './locales/es.json'
import ru from './locales/ru.json'
import zh_CN from './locales/zh_CN.json'

// Install i18n
import VueI18n from 'vue-i18n';
// import i18n from './i18n';

// Install BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue} from "bootstrap-vue";

//Lightbox
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(VueI18n)
Vue.use(CoolLightBox)
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin

Vue.config.productionTip = false;


const messages = {
  en,
  fr,
  de,
  es,
  ru,
  zh_CN
}

// VueI18n instance
const i18n = new VueI18n({
  locale: 'fr',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
// Hot updates
if (module.hot) {
  module.hot.accept(['./locales/en.json', './locales/fr.json', './locales/de.json', './locales/es.json', './locales/ru.json', './locales/zh_CN.json'], function () {
    i18n.setLocaleMessage('fr', require('./locales/fr.json').default)
    i18n.setLocaleMessage('en', require('./locales/en.json').default)
    i18n.setLocaleMessage('de', require('./locales/de.json').default)
    i18n.setLocaleMessage('es', require('./locales/es.json').default)
    i18n.setLocaleMessage('ru', require('./locales/ru.json').default)
    i18n.setLocaleMessage('ru', require('./locales/zh_CN.json').default)
    // Or the following hot updates via $i18n property
    // app.$i18n.setLocaleMessage('en', require('./en').default)
    // app.$i18n.setLocaleMessage('ja', require('./ja').default)
  })
}
