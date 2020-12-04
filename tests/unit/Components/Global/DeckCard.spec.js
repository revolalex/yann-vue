import { mount } from '@vue/test-utils'
import DeckCard from '@/components/Global/DeckCard.vue'

describe('DeckCard.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(DeckCard, {
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBeTruthy()
    })

    describe('div', () => {
        it('should have main container', () => {
            const mainDiv = wrapper.find('[data-test="deckCard"]')
            expect(mainDiv.exists()).toBeTruthy()
            expect(mainDiv.tagName = 'div').toBeTruthy()
            expect(mainDiv.classes()).toContain("container", "m-t-md")
        })

    })


})