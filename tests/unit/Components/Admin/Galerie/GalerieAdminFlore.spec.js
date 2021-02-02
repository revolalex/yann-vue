import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { shallowMount, createLocalVue } from '@vue/test-utils';
import GalerieAdminFlore from '@/components/Admin/Galerie/AdminFlore.vue'
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
import Vuex from 'vuex'


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(Vuex)

describe('GalerieAdminFlore.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(GalerieAdminFlore, {
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

    describe('GalerieAdminFlore', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

