import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Biographie from '@/views/Biographie/Biographie.vue'
import VueRouter from 'vue-router'
import VueTypedJs from 'vue-typed-js'
import CardBiographie from "@/components/Biographie/CardBiographie";
import PortraitBiographie from "@/components/Biographie/PortraitBiographie";
import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
localVue.use(VueTypedJs)
const router = new VueRouter()

describe('Views Biographie.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Biographie, {
            router,
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            components: {
                CardBiographie,
                PortraitBiographie,
                TitreDePage,
                Footer,
            },
        })
    })

    describe('Biographie', () => {
        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })

        it('should have a title', () => {
            const title = wrapper.find('.titrePage')
            expect(title.exists()).toBeTruthy()
        })

        describe('biographie container', () => {

            it('should have a biographie container', () => {
                const container = wrapper.find('[data-test="biographie-container"]')
                expect(container.exists()).toBeTruthy()
                expect(container.tagName = 'div').toBeTruthy()
                expect(container.classes()).toContain("biographieContainer")
            })
            it('should contains a card', () => {
                const card = wrapper.find('.card')
                expect(card.exists()).toBeTruthy()
                expect(card.tagName = 'div').toBeTruthy()
            })
            it('should contains a portrait Texte', () => {
                const card = wrapper.find('.portraitTexte')
                expect(card.exists()).toBeTruthy()
                expect(card.tagName = 'div').toBeTruthy()
            })
        })
        describe('biographie footer', () => {

            it('should have a biographie container', () => {
                const container = wrapper.find('.footer')
                expect(container.exists()).toBeTruthy()
                expect(container.tagName = 'footer').toBeTruthy()
            })

        })

    })

    afterAll(() => {
        wrapper.destroy()
    })


})

