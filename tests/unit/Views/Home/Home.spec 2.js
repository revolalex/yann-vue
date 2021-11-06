import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Carousel from "@/components/Carousel/Carousel.vue";


const router = new VueRouter()
const localVue = createLocalVue();
localVue.use(VueRouter)
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);


describe('GallerieEau.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Home, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components:{
                Carousel
            },
            propsData: {
                imageInCarousel: [
                    {
                        src: "01132021130016eau1xs.jpg",
                        alt: "oiseaux marin",
                    },
                    {
                        src: "01132021130016eau1xs.jpg",
                        alt: "rapace",
                    },
                ],
            }
            
        })
    })

    describe('Home View', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})
