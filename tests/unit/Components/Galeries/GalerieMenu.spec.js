import BootstrapVue from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import GalerieMenu from '@/components/Galeries/GalerieMenu.vue';
import VueRouter from 'vue-router'

const localVue = createLocalVue();
const router = new VueRouter()

localVue.use(VueRouter)
localVue.use(BootstrapVue);

describe('GalerieMenu.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = shallowMount(GalerieMenu, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            propsData: {
                imageInGaleries: [
                    {
                        href: "actualites/calendrier",
                        src: "https://yanncrochet.com/images/calendrier.jpg",
                        alt: "foret",
                        caption: 'test caption',
                    }
                ],
                classes: {
                    box: "actuBox",
                    container: "actuContainer ",
                }
            }
        })
    })
    describe('GalerieMenu', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })

        it('should receive container class given in props', () => {
            const div = wrapper.find('div')
            expect(div.exists()).toBeTruthy()
            expect(div.classes()).toContain('actuContainer');
        })

        it('should receive box class given in props', () => {
            const div = wrapper.findAll('div').at(1)
            expect(div.exists()).toBeTruthy()
            expect(div.classes()).toContain('actuBox')
        })
    })

    describe('image in GalerieMenu', () => {

        it('should contain img give in props', () => {
            const imageInM = wrapper.find('img')
            expect(imageInM.exists()).toBeTruthy()
            expect(imageInM.attributes().src).toBe('https://yanncrochet.com/images/calendrier.jpg')
        })

        it('should have caption text give in props', () => {
            const caption = wrapper.find('[data-test="galerieMenuCaption"]')
            expect(caption.classes()).toContain('caption')
            expect(caption.text()).toBe('test caption')
        })

        

    })


    afterAll(() => {
        wrapper.destroy()
    })

})