import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import PhotoCard from '@/components/Photo/PhotoCard.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('PhotoCard.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(PhotoCard, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('PhotoCard', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

