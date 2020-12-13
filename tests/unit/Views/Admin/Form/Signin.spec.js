import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import SignIn from '@/views/Admin/SignIn.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('SignIn.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(SignIn, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('SignIn', () => {
        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

