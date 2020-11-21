import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Global/Navbar.vue'

describe('Navbar.vue', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallowMount(Navbar , {
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
    expect(brandNavBar.text()).toBe('Yann Crochet')
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
    expect(dropDown.attributes().text).toBe('Galeries')

  })

  it('should have 6 dropdown link with good text', () => {
    const forelLink= wrapper.findAll('b-dropdown-item').at(0)
    expect(forelLink.exists()).toBeTruthy()
    expect(forelLink.text()).toBe("L'appel de la forêt")

    const microLink= wrapper.findAll('b-dropdown-item').at(1)
    expect(microLink.exists()).toBeTruthy()
    expect(microLink.text()).toBe("Microcosmos")

    const vegetaleLink= wrapper.findAll('b-dropdown-item').at(2)
    expect(vegetaleLink.exists()).toBeTruthy()
    expect(vegetaleLink.text()).toBe("Féérie végétale")

    
    const eauLink= wrapper.findAll('b-dropdown-item').at(3)
    expect(eauLink.exists()).toBeTruthy()
    expect(eauLink.text()).toBe("Au fil de l'eau")

    const jardinLink= wrapper.findAll('b-dropdown-item').at(4)
    expect(jardinLink.exists()).toBeTruthy()
    expect(jardinLink.text()).toBe("Jardin d'Eden")

    const noirLink= wrapper.findAll('b-dropdown-item').at(5)
    expect(noirLink.exists()).toBeTruthy()
    expect(noirLink.text()).toBe("Noir et blanc")

  })

})