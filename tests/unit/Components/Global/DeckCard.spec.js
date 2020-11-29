import { shallowMount } from '@vue/test-utils'
import DeckCard from '@/components/Global/DeckCard.vue'

describe('Footer.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(DeckCard , {
          mocks: {
            $t: (msg) => msg
          },
        })
    })

    it('should be defined', () => {
        expect(wrapper.exists()).toBeTruthy()
    })

})