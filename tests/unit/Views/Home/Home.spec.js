import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home/Home.vue'
import CarouselComponent from "@/components/Carousel/Carousel";
import VueRouter from 'vue-router'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()

describe('Views Home.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Home, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components: {
                CarouselComponent,
            },
        })
    })

    describe('Home', () => {
        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })

    })

    afterAll(() => {
        wrapper.destroy()
    })


})

