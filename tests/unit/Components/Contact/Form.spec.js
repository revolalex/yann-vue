import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import Form from '@/components/Contact/Form.vue'
import axios from 'axios';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
jest.mock('axios');

describe('Form.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(Form, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
        })
    })

    describe('Form', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
    })
    test('should post form contact', async () => {
        wrapper.setData({
            form:
            {
                email: "revol@revol.fr",
                name: "revol",
                subject: "revol",
                message: "revol"
            }
        })


        const resp = { data: "email sent", status: 200 };
        axios.post.mockImplementation(() => Promise.resolve(resp))

    });
    afterAll(() => {
        wrapper.destroy()
    })


})

