import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import SignInForm from '@/components/Admin/SignInForm.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('SignInForm.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(SignInForm, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('SignInForm', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

