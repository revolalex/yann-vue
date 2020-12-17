import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import InfoAdmin from '@/components/Admin/Dashboard/Information/InfoAdmin.vue'

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
    })


})

