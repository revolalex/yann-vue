import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Caroussel from '@/components/Carousel/Carousel.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Caroussel.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Caroussel, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            propsData: {
                filename: "01132021124924foret1xs.jpg",
                id: 1
            }
        })
    })

    describe('Caroussel', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})
