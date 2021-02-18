import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home/Home.vue'
import CarouselComponent from "@/components/Carousel/Carousel";
import VueRouter from 'vue-router'
import axios from 'axios';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(VueRouter)
const router = new VueRouter()
jest.mock('axios');

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

    test('should fetch photos and show img', async () => {
        const myImg = [
            {
                "id": 1,
                "filename": "01132021124924foret1xs.jpg"
            },
            {
                "id": 2,
                "filename": "01132021125312foret24xs.jpg"
            }]
        const resp = { status: 200, data: myImg };
        axios.get.mockImplementation(() => Promise.resolve(resp))
        wrapper.setData({ myImg: resp.data })


    });

    afterAll(() => {
        wrapper.destroy()
    })


})

