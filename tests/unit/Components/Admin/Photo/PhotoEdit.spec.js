import { BootstrapVue, IconsPlugin} from "bootstrap-vue";
import { mount, createLocalVue } from '@vue/test-utils';
import PhotoEdit from '@/components/Admin/Photo/PhotoEdit.vue'
import Vuex from 'vuex'


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(IconsPlugin);
localVue.use(Vuex)

describe('PhotoEdit.vue', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(PhotoEdit, {
            localVue,
            mocks: {
                $t: (msg) => msg
            },
            store: new Vuex.Store()
        })
    })

    describe('PhotoEdit', () => {

        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })

        it('should containe text form area', () => {
            const txtArea = wrapper.find('[data-test="photoTexteArea"]')
            expect(txtArea.exists()).toBeTruthy()
            expect(txtArea.tagName = 'b-form-textarea').toBeTruthy()
            expect(txtArea.attributes('placeholder')).toBe('Saisir un texte  minimun 30 charactères...')
            expect(txtArea.attributes('id')).toBe('input-2')
        })

        it('should containe small area with date', () => {
            const txtArea = wrapper.find('#leftText')
            expect(txtArea.exists()).toBeTruthy()
            expect(txtArea.classes()).toContain('text-muted')

        })
        
    })
    afterAll(() => {
        wrapper.destroy()
    })


})

