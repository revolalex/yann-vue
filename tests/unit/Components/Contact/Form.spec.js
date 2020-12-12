import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Form from '@/components/Contact/Form.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Form.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Form, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('Form', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

