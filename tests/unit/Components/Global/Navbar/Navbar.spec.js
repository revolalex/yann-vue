import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Navbar from '@/components/Global/Navbar/Navbar.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'


import VueI18n from 'vue-i18n'
import localesFr from '../../../../../src/locales/fr.json'
const fr = { fr: localesFr }



const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
localVue.use(Vuex)

localVue.use(VueI18n)


const router = new VueRouter()

describe('Navbar', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(Navbar, {
            router,
            localVue,
            i18n: new VueI18n({
                locale: 'fr',
                messages: fr
            }),
            mocks: {
                $store: {
                    state: {
                        token: 'token',
                        auth: true
                    }
                }
            },
        })
    })

    describe('Navbar', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it('should have yc logo', () => {
            const navBrand = wrapper.find('[data-test="navbar-brand"]')
            expect(navBrand.element.id).toBe('ycLogo')
        })
        it('should  collapse', () => {
            const collapse = wrapper.find('[data-test="navbar-collapse"]')
            expect(collapse.exists()).toBeTruthy()
        })
    })

    afterAll(() => {
        wrapper.destroy()
    })


})

