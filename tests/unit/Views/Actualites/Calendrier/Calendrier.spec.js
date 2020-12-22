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

        it('should show the given props', () => {
            const first_calendar = wrapper.findAll('img').at(0)
            expect(first_calendar.exists()).toBeTruthy()
            expect(first_calendar.classes()).toContain('card-img-top')
            expect(first_calendar.attributes('src')).toBe('https://yanncrochet.com/images/calendrier2.jpg')

            const first_link = wrapper.findAll('a').at(0)
            expect(first_link.exists()).toBeTruthy()
            expect(first_link.attributes('href')).toBe('https://www.editions-artemis.com')

            const title = wrapper.findAll('h4').at(0)
            expect(title.exists()).toBeTruthy()
            expect(title.text()).toBe('Calendrier.Card_body.Title')

            const second_calendar = wrapper.findAll('img').at(1)
            expect(second_calendar.exists()).toBeTruthy()
            expect(second_calendar.classes()).toContain('card-img-top')
            expect(second_calendar.attributes('src')).toBe('https://yanncrochet.com/images/calendrier.jpg')

            const second_link = wrapper.findAll('a').at(1)
            expect(second_link.exists()).toBeTruthy()
            expect(second_link.attributes('href')).toBe('https://www.editions-artemis.com')

        })


    })

    afterAll(() => {
        wrapper.destroy()
    })


})

