import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import PhotoPicker from '@/components/Admin/Photo/PhotoPicker.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('PhotoPicker.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(PhotoPicker, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('PhotoPicker', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

