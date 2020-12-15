import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Calendrier from '@/views/Actualites/Calendrier/Calendrier.vue'
import VueRouter from 'vue-router'

import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";
import DeckCard from "@/components/Global/DeckCard";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Calendrier.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Calendrier, {
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

    describe('Calendrier', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

