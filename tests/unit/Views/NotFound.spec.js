import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Views NotFound.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(NotFound, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('NotFound', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })

    afterAll(() => {
        wrapper.destroy()
    })


})

