import BootstrapVue from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CardBiographie from '@/components/Biographie/CardBiographie.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('CardBiographie.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(CardBiographie, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            stubs: ["vue-typed-js"]
        })
    })
    describe('CardBiographie', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })

        it('should contain portrait image', () => {
            const imagePortrait = wrapper.find('img')
            expect(imagePortrait.exists()).toBeTruthy()
            expect(imagePortrait.attributes().src).toBe('https://yanncrochet.com/images/PortraitYC.JPG')
            expect(imagePortrait.classes('card-img-top')).toBe(true)
        })

        it('should contain good text', () => {
            const textPortrait = wrapper.find('p')
            expect(textPortrait.exists()).toBeTruthy()
            expect(textPortrait.text()).toMatch('Biographie.Text.Card', 'Biographie.Text.Card_part2', 'Biographie.Text.Card_part3')
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })
})