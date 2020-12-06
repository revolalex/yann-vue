import Footer from '@/components/Global/Footer.vue'
import BootstrapVue from 'bootstrap-vue';
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter)
const router = new VueRouter()


describe('Footer.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Footer, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBeTruthy()
    })


    describe('Footer', () => {
        it('should have instagram at right', () => {
            const instagram = wrapper.find('[data-test="instagram"]')
            expect(instagram.exists()).toBeTruthy()
            expect(instagram.tagName = 'img').toBeTruthy()
        })

        it('should have link to personnal instagram', () => {
            const linkInstagram = wrapper.find('[data-test="instagram-link"]')
            expect(linkInstagram.exists()).toBeTruthy()
            expect(linkInstagram.tagName = 'a').toBeTruthy()
            expect(linkInstagram.attributes().href).toBe('https://www.instagram.com/yann_crochet_photographe/')
        })

    })
    describe('link', () => {
        it('should have link div', () => {
            const linkDiv = wrapper.find('[data-test="div-link"]')
            expect(linkDiv.exists()).toBeTruthy()
            expect(linkDiv.tagName = 'div').toBeTruthy()
            expect(linkDiv.classes()).toContain('col')
        })
        
        it('should have home link', () => {
            const link = wrapper.find('[data-test="link"]')
            expect(link.exists()).toBeTruthy()
            expect(link.tagName = 'router-link').toBeTruthy()
            expect(link.attributes().href).toBe('#/')
            expect(wrapper.text()).toMatch('Footer.Link.Accueil')
        })

    })
    afterAll(() => {
        wrapper.destroy()
    })



})