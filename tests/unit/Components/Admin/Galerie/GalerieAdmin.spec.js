import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AdminGalerie from '@/components/Admin/Galerie/AdminGalerie.vue'
import AdminMicro from "@/components/Admin/Galerie/AdminMicro";
import AdminFlore from "@/components/Admin/Galerie/AdminFlore";
import AdminEau from "@/components/Admin/Galerie/AdminEau";
import AdminJardin from "@/components/Admin/Galerie/AdminJardin";
import AdminNoirEtBlanc from "@/components/Admin/Galerie/AdminNoirEtBlanc";
import AdminForet from "@/components/Admin/Galerie/AdminForet";
import Vuex from 'vuex'


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(Vuex)

describe('AdminGalerie.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(AdminGalerie, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            components: {
                AdminForet,
                AdminMicro,
                AdminFlore,
                AdminEau,
                AdminJardin,
                AdminNoirEtBlanc,

            },
            mocks: {
                $store: {
                    state: {
                        token: 'token'
                    }
                }
            },
        })
    })

    describe('AdminGalerie', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

