import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Global/Footer.vue'


describe('Footer.vue', () => {
    let wrapper

    beforeAll(() => {
      wrapper = shallowMount(Footer , {
        mocks: {
          $t: (msg) => msg
        }
      })
    })
  
    it('should be defined', () => {
      expect(wrapper.exists()).toBeTruthy()
    })


    describe('instagram', () => {
        it('should have instagram at right', () => {
          const instagram = wrapper.find('[data-test="div-instagram"]')
          expect(instagram.exists()).toBeTruthy()
          expect(instagram.tagName = 'div').toBeTruthy()
          expect(instagram.classes()).toContain('footer-right')
        })

        it('should have link to personnal instagram', () => {
            const linkInstagram = wrapper.find('[data-test="instagram-link"]')
            expect(linkInstagram.exists()).toBeTruthy()
            expect(linkInstagram.tagName = 'a').toBeTruthy()
            expect(linkInstagram.attributes().href).toBe('https://www.instagram.com/yann_crochet_photographe/')
        })
        
    })
    describe('link', () => {
        it('should have link div at left', () => {
          const linkDiv = wrapper.find('[data-test="div-link"]')
          expect(linkDiv.exists()).toBeTruthy()
          expect(linkDiv.tagName = 'div').toBeTruthy()
          expect(linkDiv.classes()).toContain('footer-left')
        })

        it('should contains link', () => {
            const linksParagraph = wrapper.find('[data-test="link"]')
            expect(linksParagraph.exists()).toBeTruthy()
            expect(linksParagraph.tagName = 'p').toBeTruthy()
            expect(linksParagraph.classes()).toContain('footer-links')

            const linksCopyright= wrapper.findAll('a').at(1)
            expect(linksCopyright.exists()).toBeTruthy()
            expect (linksCopyright.attributes().href).toBe('https://revol-cv.netlify.app/')

            const linksAccueil= wrapper.findAll('a').at(2)
            expect(linksAccueil.exists()).toBeTruthy()
            expect (linksAccueil.attributes().href).toBe('/')

            const linksBiographie= wrapper.findAll('a').at(3)
            expect(linksBiographie.exists()).toBeTruthy()
            expect (linksBiographie.attributes().href).toBe('/biographie')

            const linksActualites= wrapper.findAll('a').at(4)
            expect(linksActualites.exists()).toBeTruthy()
            expect (linksActualites.attributes().href).toBe('/actualites')

            const linksGaleries= wrapper.findAll('a').at(5)
            expect(linksGaleries.exists()).toBeTruthy()
            expect (linksGaleries.attributes().href).toBe('/galeries')

            const linksContact= wrapper.findAll('a').at(6)
            expect(linksContact.exists()).toBeTruthy()
            expect (linksContact.attributes().href).toBe('/contact')

            
        })
    })
    afterAll(() => {
      wrapper.destroy()
    })
  

  
})