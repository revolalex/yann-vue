import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Presse from '@/views/Actualites/Presse/Presse.vue'
import VueRouter from 'vue-router'

import TitreDePage from "@/components/Global/TitrePage.vue";
import DeckCard from "@/components/Global/DeckCard";
import Footer from "@/components/Global/Footer";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Presse.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Presse, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components: {
                TitreDePage,
                DeckCard,
                Footer
            }
        })
    })

    describe('Presse', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

