import { mount } from '@vue/test-utils'
import AudioInterview from '@/components/Actualites/Interview/AudioInterview.vue'

describe('AudioInterview.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(AudioInterview, {
        })
    })

    describe('AudioInterview', () => {
        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it('should contains the link to the interview', () => {
            const source = wrapper.find('source')
            expect(source.exists()).toBeTruthy()
            expect(source.attributes().src).toMatch('https://cdn.radiofrance.fr/s3/cruiser-production/static/culture/sons/2012/01/s03/Sur_les_docks--PODCAST--NET_badcf5be-a0c7-4aa8-9cc8-938ecdd65886_FC.mp3')
        })
        
    })

    afterAll(() => {
        wrapper.destroy()
    })

})