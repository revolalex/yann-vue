import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import GalerieAdminForet from '@/components/Admin/Galerie/AdminForet.vue'
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
import Vuex from 'vuex'


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(Vuex)

describe('GalerieAdminEau.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(GalerieAdminForet, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            components: {
                PhotoPicker
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

    describe('GalerieAdminForet', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

