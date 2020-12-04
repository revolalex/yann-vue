import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Global/Navbar/Navbar.vue'


describe('Navbar.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(Navbar , {
      mocks: {
        $t: (msg) => msg
      },
      stubs: ["b-navbar", "b-navbar-nav", "b-nav-item", "b-dropdown-item", "b-nav-item-dropdown", "b-collapse", "b-navbar-toggle", "b-navbar-brand", "router-link"]
      
    })
  })

  it('should be defined', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should contain b-navbar with good attributes', () => {
    const navbar = wrapper.find('[data-test="navbar"]')
    expect(navbar.exists()).toBeTruthy()
    expect(navbar.tagName='b-navbar').toBeTruthy()
    expect(navbar.attributes().type).toBe('dark')
    expect(navbar.attributes().variant).toBe('secondary')
    expect(navbar.attributes().toggleable).toBe('lg')
  })


  it('should contain brand Name of photographer', () => {
    const brandNavBar = wrapper.find('[data-test="navbar-brand"]')
    expect(brandNavBar.exists()).toBeTruthy()
    expect(brandNavBar.text()).toBe('Photographer.Name')
    expect(brandNavBar.attributes().id).toBe('ycLogo')
  })

  it('should collapse', () => {
    const navBarCollapse = wrapper.find('[data-test="navbar-collapse"]')
    expect(navBarCollapse.exists()).toBeTruthy()
    expect(navBarCollapse.attributes().target).toBe('nav-collapse')
  })

  it('should have dropdown menu', () => {
    const dropDown = wrapper.find('[data-test="navbar-dropdown"]')
    expect(dropDown.exists()).toBeTruthy()
    expect(dropDown.attributes().text).toBe('Navbar.Galeries.Text')

  })

  afterAll(() => {
    wrapper.destroy()
  })

})