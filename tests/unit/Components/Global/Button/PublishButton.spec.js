import PublishButton from "@/components/Global/Button/PublishButton";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('PublishButton.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(PublishButton, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })
    describe('PublishButton', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()

        })
        it('should emit event', () => {
            wrapper.vm.publierWasClickerd()
            expect(wrapper.emitted())
            expect(wrapper.emitted("publierClicked")).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })
})