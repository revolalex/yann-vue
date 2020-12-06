import BootstrapVue from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PortraitBiographie from '@/components/Biographie/PortraitBiographie.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('PortraitBiographie.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(PortraitBiographie, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            stubs: ["vue-typed-js"]
        })
    })
    describe('PortraitBiographie', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })

        it('should contain good text', () => {
            const textPortrait = wrapper.find('p')
            expect(textPortrait.exists()).toBeTruthy()
            expect(textPortrait.text()).toMatch(
                'Biographie.Portrait.First_paragraph_part1',
                'Biographie.Portrait.First_paragraph_part2',
                'Biographie.Portrait.First_paragraph_part3',
                'Biographie.Portrait.First_paragraph_part4',
                'Biographie.Portrait.First_paragraph_part5'
            )
        })

        it('should contain good text second paragraph', () => {
            const textPortraitSecondParagrah = wrapper.findAll('p').at(1)
            expect(textPortraitSecondParagrah.exists()).toBeTruthy()
            expect(textPortraitSecondParagrah.text()).toMatch(
                'Biographie.Portrait.Second_paragraph_part1',
                'Biographie.Portrait.Second_paragraph_part1'
            )
        })

        it('should contain good text third paragraph', () => {
            const textPortraitThirdParagrah = wrapper.findAll('p').at(2)
            expect(textPortraitThirdParagrah.exists()).toBeTruthy()
            expect(textPortraitThirdParagrah.text()).toMatch(
                'Biographie.Portrait.Third_paragraph'
            )
        })

        it('should contain good text fourth paragraph', () => {
            const textPortraitFourthParagrah = wrapper.findAll('p').at(3)
            expect(textPortraitFourthParagrah.exists()).toBeTruthy()
            expect(textPortraitFourthParagrah.text()).toMatch(
                'Biographie.Portrait.Fourth_paragraph'
            )
        })
    })

    afterAll(() => {
        wrapper.destroy()
    })

})