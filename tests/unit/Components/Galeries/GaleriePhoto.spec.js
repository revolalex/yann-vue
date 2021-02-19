import BootstrapVue from 'bootstrap-vue';
import { mount, createLocalVue } from '@vue/test-utils';
import GaleriePhoto from '@/components/Galeries/GaleriePhotos.vue';
import VueRouter from 'vue-router'
// Lightbox
import CoolLightBox from 'vue-cool-lightbox'


const localVue = createLocalVue();
const router = new VueRouter()

localVue.use(VueRouter)
localVue.use(BootstrapVue);
localVue.use(CoolLightBox)

describe('GaleriePhoto.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(GaleriePhoto, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            propsData: {
                imageInGaleries: [
                    {
                        href: "",
                        // src: "https://yanncrochet.com/photo/eau/eau2xs2.jpg",
                        alt: "oiseaux marin",
                        src: "01132021130016eau1xs.jpg",
                        id: "1"
                    },
                    {
                        href: "",
                        // src: "https://yanncrochet.com/photo/foret/8.jpg",
                        alt: "rapace",
                        src: "01132021130016eau1xs.jpg",
                        id: "1"
                    },
                ],
            }
        })
    })
    describe('GaleriePhoto', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })

    describe('image in GaleriePhoto', () => {
        it('should contain div image-wrapper', () => {
            const div = wrapper.findAll('div').at(1)
            expect(div.exists()).toBeTruthy()
            expect(div.classes()).toContain('images-wrapper')

        })

        it('should contain img give in props', () => {
            const image = wrapper.find('img')
            expect(image.exists()).toBeTruthy()
            expect(image.attributes().src).toBe('01132021130016eau1xs.jpg')
            expect(image.attributes().alt).toBe('oiseaux marin')
            expect(image.classes()).toContain('image-galerie')
        })
        it('should contain second img give in props', () => {
            const image = wrapper.findAll('img').at(1)
            expect(image.exists()).toBeTruthy()
            expect(image.attributes().src).toBe('01132021130016eau1xs.jpg')
            expect(image.attributes().alt).toBe('rapace')
            expect(image.classes()).toContain('image-galerie')
        })
    })


    afterAll(() => {
        wrapper.destroy()
    })

})