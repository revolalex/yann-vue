import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import CreateAdmin from '@/components/Admin/SuperAdmin/CreateAdmin.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('CreateAdmin.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(CreateAdmin, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            mocks: {
                $store: {
                    state: {
                        token: 'token'
                    }
                }
            },
        })
    })

    describe('CreateAdmin', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

