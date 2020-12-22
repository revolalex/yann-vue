import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Actualites from '@/views/Actualites/Actualites.vue'
import VueRouter from 'vue-router'

import TitreDePage from "@/components/Global/TitrePage";
import GalerieMenu from "@/components/Galeries/GalerieMenu";
import Footer from "@/components/Global/Footer";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Actualites.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Actualites, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components:{
                TitreDePage,
                GalerieMenu,
                Footer
            }
        })
    })

    describe('Actualites', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })

    afterAll(() => {
        wrapper.destroy()
    })


})

