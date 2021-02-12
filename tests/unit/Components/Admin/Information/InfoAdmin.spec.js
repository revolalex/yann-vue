import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import InfoAdmin from '@/components/Admin/Information/InfoAdmin.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('InfoAdmin.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(InfoAdmin, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('InfoAdmin', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it('should emit event when photo is click', () => {
            wrapper.vm.photoIsClick()
            expect(wrapper.emitted("photoLinkClicked")).toBeTruthy()
        })
        it('should emit event when caroussel is click', () => {
            wrapper.vm.carousselIsClick()
            expect(wrapper.emitted("carousselLinkClicked")).toBeTruthy()
        })
        it('should emit event when caroussel is click', () => {
            wrapper.vm.galerieIsClick()
            expect(wrapper.emitted("galerieLinkClicked")).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

