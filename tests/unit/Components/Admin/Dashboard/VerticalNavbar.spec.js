import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import VerticalNavbar from '@/components/Admin/Dashboard/VerticalNavbar.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('VerticalNavbar.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(VerticalNavbar, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('VerticalNavbar', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

