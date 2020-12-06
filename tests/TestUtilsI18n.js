import { createLocalVue } from '@vue/test-utils';
import VueI18n from 'vue-i18n'

import localesFr from '../src/locales/fr.json'
const fr = { fr: localesFr }

// Use a local vue
const localVue = createLocalVue()
localVue.use(VueI18n)

// Create new i18n instance
module.exports = {
    localVue,
    i18n: new VueI18n({
        locale: 'fr',
        messages: fr
    })
}