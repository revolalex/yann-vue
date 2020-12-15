import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home/Home.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Home.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Home, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('Home', () => {
        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

