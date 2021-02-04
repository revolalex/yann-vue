import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router'

import Dashboard from '@/views/Admin/Dashboard/Dashboard.vue'
import ToggleButton from "@/components/Admin/Dashboard/ToggleButton.vue";
import VerticalNavbar from "@/components/Admin/Dashboard/VerticalNavbar.vue";
import InfoAdmin from "@/components/Admin/Information/InfoAdmin.vue";
import PhotoDuMois from "@/components/Admin/Photo/PhotoEdit.vue";
import HomeAdmin from "@/components/Admin/Home/HomeAdmin.vue";
import CarousselEdit from "@/components/Admin/Caroussel/CarousselEdit.vue";
import SuperAdmin from "@/components/Admin/SuperAdmin/SuperAdmin.vue";
import GalerieAdmin from "@/components/Admin/Galerie/AdminGalerie.vue"

const router = new VueRouter()
const localVue = createLocalVue();
localVue.use(VueRouter)
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);

describe('Dashboard.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Dashboard, {
            localVue,
            router,
            mocks: {
                $t: (msg) => msg
            },
            components: {
                VerticalNavbar,
                ToggleButton,
                InfoAdmin,
                PhotoDuMois,
                HomeAdmin,
                CarousselEdit,
                SuperAdmin,
                GalerieAdmin
            },
            propsData: {
                isActive: false,
                viewHome: true,
                viewPhoto: false,
                viewInfo: false,
                viewCaroussel: false,
                viewSuperAdmin: false,
                viewGalerie: false,
            },
            mocks: {
                $store: {
                    state: {
                        token: 'token',
                        name: 'alex',
                        is_super_admin: 1,
                        url: 'url test'
                    }
                }
            },
        })
    })

    describe('Dashboard View', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })


})
