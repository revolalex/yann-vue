import BootstrapVue from 'bootstrap-vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Carousel from '@/components/Carousel/Carousel.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('PortraitBiographie.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Carousel, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            propsData: {
                imageInCarousel: [
                    {
                        url: "https://yanncrochet.com/photo/foret/foret1xs.jpg",
                        alt: "ecureuil",
                    }
                ]
            }
        })
    })
    describe('Carousel', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })

        it('should contain a carousel div', () => {
            const div = wrapper.find('div')
            expect(div.exists()).toBeTruthy()
            expect(div.classes()).toContain('carousel', 'slide', 'carousel-fade');
        })


    })

    describe('image in Carousel', () => {

        it('should contain img give in props', () => {
            const imageInC = wrapper.find('img')
            expect(imageInC.exists()).toBeTruthy()
            expect(imageInC.attributes().src).toBe('https://yanncrochet.com/photo/foret/foret1xs.jpg')
        })

        it('image is display full screen', () => {
            const imageFullScreen = wrapper.find('img')
            expect(imageFullScreen.classes()).toContain('img-fluid', 'w-100', 'd-block') 
        })
    })

    afterAll(() => {
        wrapper.destroy()
    })

})