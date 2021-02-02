import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import GalerieAdminMicro from '@/components/Admin/Galerie/AdminMicro.vue'
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
import Vuex from 'vuex'


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(Vuex)

describe('GalerieAdminMicro.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(GalerieAdminMicro, {
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

    describe('GalerieAdminMicro', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

