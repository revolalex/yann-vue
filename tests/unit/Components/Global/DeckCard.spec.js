import BootstrapVue from 'bootstrap-vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import DeckCardBis from '@/components/Global/DeckCard.vue'

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('DeckCard.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(DeckCardBis, {
      localVue,
      propsData: { 
        cards: [{
         src:"https://yanncrochet.com/images/calendrier.jpg",
         text: 'test',
         title: 'title',
         linkText: 'link',
         link:"https://www.link.com",
       }]
     }
   })

  })
  it('should have main container', () => {
    const mainDiv = wrapper.find('[data-test="deckCard"]')
    expect(mainDiv.exists()).toBeTruthy()
    expect(mainDiv.tagName = 'div').toBeTruthy()
    expect(mainDiv.classes()).toContain("container", "m-t-md")

  });



});