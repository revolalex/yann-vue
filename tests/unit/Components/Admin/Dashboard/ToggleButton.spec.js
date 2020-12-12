import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import ToggleButton from '@/components/Admin/Dashboard/ToggleButton.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('ToggleButton.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(ToggleButton, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('ToggleButton', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

