[![Build Status](https://travis-ci.org/revolalex/yann-vue.svg?branch=master)](https://travis-ci.org/revolalex/yann-vue)
[![Coverage Status](https://coveralls.io/repos/github/revolalex/yann-vue/badge.svg?branch=master)](https://coveralls.io/github/revolalex/yann-vue?branch=master)

![](https://img.shields.io/badge/made%20with-vue.js-green?logo=vue.js).
![](https://img.shields.io/badge/made%20with-Bootstrap_vue-blueviolet?logo=Bootstrap).
![](https://img.shields.io/badge/made%20with-Node.js-succes?logo=Node.js).
![](https://img.shields.io/badge/made%20with-mysql-blue?logo=mysql).
![](https://img.shields.io/badge/made%20with-jsonwebtokens-orange?logo=jsonwebtokens).
![](https://img.shields.io/badge/made%20with-bcrypt-red?logo=letsencrypt).
![](https://img.shields.io/badge/made%20with-jest-red?logo=jest).

<img src="https://img.shields.io/badge/vue.router-green.svg" alt="vue-router">.
<img src="https://img.shields.io/badge/vuex-green.svg" alt="vuex">.
<img src="https://img.shields.io/badge/axios-succes.svg" alt="axios">.
<img src="https://img.shields.io/badge/Express-succes.svg" alt="Express">. 
<br>
<img src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2Frevolalex%2Fyann-vue" alt="Hits">.


## Table of contents
* [App](#app)
* [Moodboard](#moodboard)
* [Wireframe](#wireframe)
* [Maquette](#maquette)
* [Technologies](#technologies)
* [multilingual](#multilingual)
* [Security](#security)
* [Test](#test)
* [Continuous integration](#continuous-integration)
* [Screenshots](#screenshots)
* [Contact](#contact)

## App

This website was created for a photographer, it's a full stack  javascript project.
The visitor can browse the website, explore the galleries, contat the photographer...
<br/>
The client, the photographer, can admin the website:
  <ul>
  <li>edit the gallery</li>
  <li>edit the home caroussel</li>
  <li>post the picture of the month</li>
  <li>see average rating of the month photo</li>
</ul>
 <br/>
The super Admin can do the same plus:
<ul>
  <li>edit the email</li>
  <li>create or delete an admin</li>
</ul>

## Moodboard
<img src="https://user-images.githubusercontent.com/56839789/107360315-09821e00-6ad6-11eb-86cd-b780538fa062.png"  height="500">


## Wireframe
![Capture d’écran 2021-02-09 à 12 55 59](https://user-images.githubusercontent.com/56839789/107360395-2a4a7380-6ad6-11eb-849c-42254afa2149.png)

## Maquette
<img src="https://user-images.githubusercontent.com/56839789/107360599-71d0ff80-6ad6-11eb-95bf-4cad9b333b02.png"  height="400">   <img src="https://user-images.githubusercontent.com/56839789/107360539-61b92000-6ad6-11eb-8219-094761b3e4a5.png"  height="400">


## Technologies
* node.js
* mysql
* SQL database
* bcrypt
* jsonwebtoken
* express
* middleware
* vue.js
* vue-i18n
* vuex
* vueRouter
* vuelidate
* vue-axios
* vuex-persistedstate
* bootstrap-vue
* multer
* vue-cool-lightbox
* ...

## Multilingual
The website is multilingual, i use vue-i18n

Local Switcher example (use to switch language):
```js
<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="fr">🇫🇷</option>
      <option value="en">🇬🇧</option>
      <option value="es">🇪🇸</option>
      <option value="de">🇩🇪</option>
      <option value="zh_CN">🇨🇳</option>
      <option value="ru">🇷🇺</option>
      <option value="ja">🇯🇵</option>
    </select>
  </div>
</template>
```
Example of use:
```js
 <h3>{{ $t("Biographie.third_Title") }}</h3>
```

## Security
* XSS: (cross-site scripting) all exterior data are check
* CSRF: (Cross Site Request Forgery) the admin route are protected by a midlleware checking token (JWT)
* Injection flaws: all input are properly filtered, plus the framework is secure
* Token, Hash Password (B-crypt), middleware, handle file format, check input...

## Test
Unit test: Vue-test-utils, Jest <br/>
A good test mut be quick to execute, easy to understand, and test one behavior at a time


Simple test Example:

Title Component
```js
<template>
  <h1 class="titrePage" data-test="titre-h1">{{ titre }}</h1>
</template>
<script>
/**
 * @module component - TitreDePage
 * @param {string} - titre
 */
export default {
  name: "TitreDePage",
  props: { titre: String },
};
</script>
```

Let's test it :
```js
import { mount } from '@vue/test-utils'
import TitrePage from '@/components/Global/TitrePage.vue'

describe('TitrePage.vue', () => {
    let wrapper
    beforeAll(() => {
        wrapper = mount(TitrePage, {
            propsData: { titre: 'new titre' }
        })
    })
    describe('Title of page', () => {
        it('should be defined', () => {
            expect(wrapper.exists()).toBeTruthy()
        })
        it('should containe h1', () => {
            const titreH1 = wrapper.find('[data-test="titre-h1"]')
            expect(titreH1.exists()).toBeTruthy()
            expect(titreH1.tagName = 'h1').toBeTruthy()
        })
        it('renders props.titre when passed', () => {
            const titre = 'new titre'
            expect(wrapper.text()).toMatch(titre)
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })
})
```


## Continuous Integration
* Travis Ci
* Coverall.io

## Screenshots
<br/>
<img width="500" alt="Capture d’écran 2021-02-09 à 12 06 13" src="https://user-images.githubusercontent.com/56839789/114060443-acb4a100-9895-11eb-8d20-b5e00c2f678d.gif">
<br/>

<br/>
Gallery:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 06 13" src="https://user-images.githubusercontent.com/56839789/107362133-a80f7e80-6ad8-11eb-8ffc-fe0d91231b48.png">

<br/>
Biography- multilingual:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 07 32" src="https://user-images.githubusercontent.com/56839789/107362199-bbbae500-6ad8-11eb-9576-7473d3f88648.png">

<br/>
Admin - edit gallery:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 08 42" src="https://user-images.githubusercontent.com/56839789/107362250-cd03f180-6ad8-11eb-9c0a-fd1d8ee063ed.png">

<br/>
Super admin - edit admin:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 09 17" src="https://user-images.githubusercontent.com/56839789/107362289-d8571d00-6ad8-11eb-9dc9-6e8c93aabc9b.png">

<br/>
Template email:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 10 36" src="https://user-images.githubusercontent.com/56839789/107362328-e3aa4880-6ad8-11eb-9bbb-9060fe86abf0.png">




## Status
Project is:  _Finish_


## Contact	
- [![LinkedIn][linkedin-shield]][linkedin-url] 	
- revolalex@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexandre-rodrigueza/


