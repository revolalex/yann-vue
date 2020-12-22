import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Contact from '@/views/Contact/Contact.vue'
import Footer from '@/components/Global/Footer.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Contact.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Contact, {
            router,
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            components: { Footer }
        })
    })

    describe('Contact', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })

    afterAll(() => {
        wrapper.destroy()
    })


})

