import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import SuperAdmin from '@/components/Admin/SuperAdmin/SuperAdmin.vue'
import CreateAdmin from '@/components/Admin/SuperAdmin/CreateAdmin.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('SuperAdmin.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(SuperAdmin, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            components:{CreateAdmin},
            mocks: {
                $store: {
                    state: {
                        token: 'token'
                    }
                }
            },
        })
    })

    describe('SuperAdmin', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

