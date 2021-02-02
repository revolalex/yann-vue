import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'
import GallerieForet from '@/views/Galeries/Foret/Foret.vue'
import GaleriePhotos from "@/components/Galeries/GaleriePhotos";
import TitreDePage from "@/components/Global/TitrePage";
import CoolLightBox from 'vue-cool-lightbox'
import Footer from '@/components/Global/Footer.vue'

const router = new VueRouter()
const localVue = createLocalVue();
localVue.use(VueRouter)
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(CoolLightBox)

describe('GallerieForet.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(GallerieForet, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components:{
                GaleriePhotos,
                TitreDePage,
                Footer
            },
            propsData: {
                imageInGaleries: [
                    {
                        href: "",
                        src: "https://yanncrochet.com/photo/eau/eau2xs2.jpg",
                        alt: "oiseaux marin",
                    },
                    {
                        href: "",
                        src: "https://yanncrochet.com/photo/foret/8.jpg",
                        alt: "rapace",
                    },
                ],
            }
        })
    })

    describe('GallerieForet View', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})
