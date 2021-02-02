import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import GalerieAdminJardin from '@/components/Admin/Galerie/AdminJardin.vue'
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
import Vuex from 'vuex'


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(Vuex)

describe('GalerieAdminJardin.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(GalerieAdminJardin, {
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

    describe('GalerieAdminJardin', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

