import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Photo from '@/views/Photo/Photo.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Photo.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Photo, {
            router,
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('Photo', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

