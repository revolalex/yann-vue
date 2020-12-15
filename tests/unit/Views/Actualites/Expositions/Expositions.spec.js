import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Expositions from '@/views/Actualites/Expositions/Expositions.vue'
import VueRouter from 'vue-router'

import TitreDePage from "@/components/Global/TitrePage";
import DeckCard from "@/components/Global/DeckCard";
import Footer from "@/components/Global/Footer";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Expositions.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Expositions, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components: {
                TitreDePage,
                Footer,
                DeckCard,
            },
        })
    })

    describe('Expositions', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

