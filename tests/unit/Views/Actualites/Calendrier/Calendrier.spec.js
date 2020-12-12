import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Calendrier from '@/views/Actualites/Calendrier/Calendrier.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Calendrier.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Calendrier, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('Calendrier', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

