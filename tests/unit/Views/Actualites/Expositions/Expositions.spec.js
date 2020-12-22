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

        it('should have the good title', () => {
            const title = wrapper.find('h1')
            expect(title.exists()).toBeTruthy()
            expect(title.text()).toBe('Titre.Expositions')
        })

        it('should have div container', () => {
            const div = wrapper.find('[data-test="deckCard"]')
            expect(div.exists()).toBeTruthy()
            expect(div.tagName = 'div').toBeTruthy()
            expect(div.classes()).toContain('container', 'm-t-md')
        })

        it('should have div card-deck', () => {
            const div = wrapper.find('.card-deck')
            expect(div.exists()).toBeTruthy()
            expect(div.tagName = 'div').toBeTruthy()
            expect(div.classes()).toContain('card-deck')
        })

        it('should have card', () => {
            const div = wrapper.find('.card')
            expect(div.exists()).toBeTruthy()
            expect(div.tagName = 'div').toBeTruthy()
            expect(div.classes()).toContain('card')
        })

        describe('cards', () => {
            it('should have card grand angle', () => {
                const div = wrapper.findAll('.card').at(0)
                expect(div.exists()).toBeTruthy()

                const img = wrapper.findAll('img').at(0)
                expect(img.exists()).toBeTruthy()
                expect(img.attributes('src')).toBe('https://yanncrochet.com/photo/grandAngle.jpg')

                const title = wrapper.findAll('h4').at(0)
                expect(title.exists()).toBeTruthy()
                expect(title.text()).toBe('Expositions.Card.Title')

                const text = wrapper.findAll('p').at(0)
                expect(text.exists()).toBeTruthy()
                expect(text.text()).toBe('Expositions.Card.Text')

                const textMuted = wrapper.findAll('.text-muted').at(0)
                expect(textMuted.exists()).toBeTruthy()
                expect(textMuted.text()).toBe('Expositions.Card.Small_text')
            })
        })

        describe('cards Two', () => {
            it('should have card planter les choux', () => {
                const div = wrapper.findAll('.card').at(1)
                expect(div.exists()).toBeTruthy()

                const img = wrapper.findAll('img').at(1)
                expect(img.exists()).toBeTruthy()
                expect(img.attributes('src')).toBe('https://yanncrochet.com/photo/planterChoux.jpg')

                const title = wrapper.findAll('h4').at(1)
                expect(title.exists()).toBeTruthy()
                expect(title.text()).toBe('Expositions.Card_2.Title')

                const text = wrapper.findAll('p').at(1)
                expect(text.exists()).toBeTruthy()
                expect(text.text()).toBe('Expositions.Card_2.Text')

                const textMuted = wrapper.findAll('.text-muted').at(1)
                expect(textMuted.exists()).toBeTruthy()
                expect(textMuted.text()).toBe('Expositions.Card_2.Small_text')
            })
        })

        describe('cards Three', () => {
            it('should have card planter les choux', () => {
                const div = wrapper.findAll('.card').at(2)
                expect(div.exists()).toBeTruthy()

                const img = wrapper.findAll('img').at(2)
                expect(img.exists()).toBeTruthy()
                expect(img.attributes('src')).toBe('https://yanncrochet.com/photo/art.jpg')

                const title = wrapper.findAll('h4').at(2)
                expect(title.exists()).toBeTruthy()
                expect(title.text()).toBe('Expositions.Card_3.Title')

                const text = wrapper.findAll('p').at(2)
                expect(text.exists()).toBeTruthy()
                expect(text.text()).toBe('Expositions.Card_3.Text')

                const textMuted = wrapper.findAll('.text-muted').at(2)
                expect(textMuted.exists()).toBeTruthy()
                expect(textMuted.text()).toBe('Expositions.Card_3.Small_text')
            })
        })

        describe('cards Four', () => {
            it('should have card anamorphose', () => {
                const div = wrapper.findAll('.card').at(3)
                expect(div.exists()).toBeTruthy()

                const img = wrapper.findAll('img').at(3)
                expect(img.exists()).toBeTruthy()
                expect(img.attributes('src')).toBe('https://yanncrochet.com/photo/anamorphose.jpg')

                const title = wrapper.findAll('h4').at(3)
                expect(title.exists()).toBeTruthy()
                expect(title.text()).toBe('Expositions.Card_4.Title')

                const text = wrapper.findAll('p').at(3)
                expect(text.exists()).toBeTruthy()
                expect(text.text()).toBe('Expositions.Card_4.Text')

                const textMuted = wrapper.findAll('.text-muted').at(1)
                expect(textMuted.exists()).toBeTruthy()
                expect(textMuted.text()).toBe('Expositions.Card_2.Small_text')
            })
        })

        describe('cards Five', () => {
            it('should have card biodiversité', () => {
                const div = wrapper.findAll('.card').at(4)
                expect(div.exists()).toBeTruthy()

                const img = wrapper.findAll('img').at(4)
                expect(img.exists()).toBeTruthy()
                expect(img.attributes('src')).toBe('https://yanncrochet.com/photo/arbreBio.jpg')

                const title = wrapper.findAll('h4').at(4)
                expect(title.exists()).toBeTruthy()
                expect(title.text()).toBe('Expositions.Card_5.Title')

                const text = wrapper.findAll('p').at(4)
                expect(text.exists()).toBeTruthy()
                expect(text.text()).toBe('Expositions.Card_5.Text')

                const textMuted = wrapper.findAll('.text-muted').at(4)
                expect(textMuted.exists()).toBeTruthy()
                expect(textMuted.text()).toBe('Expositions.Card_5.Small_text')
            })
        })

        


        

    })
    afterAll(() => {
        wrapper.destroy()
    })
})

