import { mount } from '@vue/test-utils'
import TitrePage from '@/components/Global/TitrePage.vue'

describe('TitrePage.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(TitrePage, {
            propsData: { titre: 'new titre' }
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBeTruthy()
    })

    it('should containe h1', () => {
        const titreH1 = wrapper.find('[data-test="titre-h1"]')
        expect(titreH1.exists()).toBeTruthy()
        expect(titreH1.tagName = 'h1').toBeTruthy()
    })


    it('renders props.titre when passed', () => {
        const titre = 'new titre'
        expect(wrapper.text()).toMatch(titre)
    })
    
    afterAll(() => {
        wrapper.destroy()
    })

})