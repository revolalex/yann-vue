import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import TablePhoto from "@/components/Global/Table/TablePhoto";
import axios from 'axios';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
jest.mock('axios');

describe('TablePhoto.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(TablePhoto, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            propsData: {
                photos: [{
                    // need reel filename /images
                    filename: "02022021111720jardin5xs.jpg",
                    id: "1"
                }
                ],
                path:""
            }
        })
    })

    describe('TablePhoto', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it('should emit event when delete was clicked', () => {
            wrapper.vm.deleteClicked()
            expect(wrapper.emitted("deleteClicked")).toBeTruthy()
        })
    })
    test('should fetch photos', () => {
        const photos = [{
            // need reel filename /images
            filename: "02022021111720jardin5xs.jpg",
            id: "1"
        }
        ];
        const resp = {data: photos};
        axios.get.mockImplementation(() => Promise.resolve(resp))
      });
    afterAll(() => {
        wrapper.destroy()
    })


})

