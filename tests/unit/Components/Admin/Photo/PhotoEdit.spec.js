import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import PhotoEdit from '@/components/Admin/Photo/PhotoEdit.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('PhotoEdit.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(PhotoEdit, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('PhotoEdit', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

