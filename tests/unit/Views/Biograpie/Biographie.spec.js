import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Biographie from '@/views/Biographie/Biographie.vue'
import VueRouter from 'vue-router'
import VueTypedJs from 'vue-typed-js'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
localVue.use(VueTypedJs)
const router = new VueRouter()

describe('Views Biographie.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Biographie, {
            router,
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('Biographie', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })


})

