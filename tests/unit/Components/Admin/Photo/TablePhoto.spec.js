import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import TablePhoto from '@/components/Admin/Photo/TablePhoto.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('TablePhoto.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(TablePhoto, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('TablePhoto', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

