import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import GaleriesAdmin from '@/components/Admin/Galeries/GaleriesAdmin.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('GaleriesAdmin.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(GaleriesAdmin, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('GaleriesAdmin', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

