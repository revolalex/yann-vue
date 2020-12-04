import { mount } from '@vue/test-utils'
import Footer from '@/components/Global/Footer.vue'


describe('Footer.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Footer, {
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBeTruthy()
    })


    describe('instagram', () => {
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

        it('should contains link', () => {
            const linkParagraph = wrapper.find('[data-test="link"]')
            expect(linkParagraph.exists()).toBeTruthy()
            expect(linkParagraph.tagName = 'ul').toBeTruthy()

            const linkAccueil = wrapper.findAll('router-link ').at(0)
            expect(linkAccueil.exists()).toBeTruthy()
            expect(linkAccueil.attributes().to).toBe('/')

            const linkBiographie = wrapper.findAll('router-link ').at(1)
            expect(linkBiographie.exists()).toBeTruthy()
            expect(linkBiographie.attributes().to).toBe('/biographie')

            const linkActualites = wrapper.findAll('router-link ').at(2)
            expect(linkActualites.exists()).toBeTruthy()
            expect(linkActualites.attributes().to).toBe('/actualites')

            const linkGaleries = wrapper.findAll('router-link ').at(3)
            expect(linkGaleries.exists()).toBeTruthy()
            expect(linkGaleries.attributes().to).toBe('/galeries')

            const linkContact = wrapper.findAll('router-link ').at(4)
            expect(linkContact.exists()).toBeTruthy()
            expect(linkContact.attributes().to).toBe('/contact')

        })
    })
    afterAll(() => {
        wrapper.destroy()
    })



})