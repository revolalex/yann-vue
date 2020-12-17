import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import HomeAdmin from '@/components/Admin/Home/HomeAdmin.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('HomeAdmin.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(HomeAdmin, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('HomeAdmin', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

