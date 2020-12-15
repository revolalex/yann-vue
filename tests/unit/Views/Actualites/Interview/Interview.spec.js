import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Interview from '@/views/Actualites/Interview/Interview.vue'
import VueRouter from 'vue-router'

import TitreDePage from "@/components/Global/TitrePage.vue";
import AudioInterview from "@/components/Actualites/Interview/AudioInterview";
import Footer from "@/components/Global/Footer";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Interview.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Interview, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components:{
                TitreDePage,
                AudioInterview,
                Footer
            }
        })
    })

    describe('Interview', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

