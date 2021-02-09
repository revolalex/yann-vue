[![Build Status](https://travis-ci.org/revolalex/yann-vue.svg?branch=dev)](https://travis-ci.org/revolalex/yann-vue)
[![Coverage Status](https://coveralls.io/repos/github/revolalex/yann-vue/badge.svg?branch=dev)](https://coveralls.io/github/revolalex/yann-vue?branch=dev)



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
* [Back-End](#back-end)
* [Front-End](#front-end)
* [Architecture](#architecture)
* [Nodemailer](#nodemailer)
* [Multer](#multer)
* [Multilingual](#multilingual)
* [Vuex](#vuex)
* [Test](#test)
* [Continuous integration](#continuous-integration)
* [Security](#security)
* [Screenshots](#screenshots)
* [Contact](#contact)

## App
<img height="300" src="https://user-images.githubusercontent.com/56839789/107378849-ad76c400-6aec-11eb-852d-98e7481b8763.gif">
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
<img src="https://user-images.githubusercontent.com/56839789/107360539-61b92000-6ad6-11eb-8219-094761b3e4a5.png"  height="400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
<img src="https://user-images.githubusercontent.com/56839789/107360599-71d0ff80-6ad6-11eb-95bf-4cad9b333b02.png"  height="400"> 


## Technologies
* node.js
* mysql
* SQL database
* bcrypt
* jsonwebtoken
* express
* nodemailer
* multer
* middleware
* vue.js
* vue-i18n
* vuex
* vueRouter
* vuelidate
* vue-axios
* vuex-persistedstate
* bootstrap-vue
* vue-cool-lightbox
* ...


## Back-End
The back-end is base on node.js.<br/>
![Capture d’écran 2021-02-09 à 15 10 04](https://user-images.githubusercontent.com/56839789/107375314-e4e37180-6ae8-11eb-8517-e4b83dc8fc00.png)<br/>
Express is use for the server, MySQL2 for the database, Multer to upload files (images), FS for delete file, Nodemailer, to send email, Bcrypt to hash the password before store it in the DB, JsonWebToken (JWT)


## Front-End
The front-end is base on Vue.js<br/>
![Capture d’écran 2021-02-09 à 15 12 39](https://user-images.githubusercontent.com/56839789/107375644-41df2780-6ae9-11eb-935e-abfc8b02984e.png)<br/>
Vuex is use to store data, Vuex-persistedstate for data persistence, Vuelidate to hanlde the input, Boostrap-vue for the style, vueI18n for the multilingual, Axios to connect front and back, 

## Architecture

Organisation Screen: <br/>
<img src="https://user-images.githubusercontent.com/56839789/107374099-87025a00-6ae7-11eb-9ca0-cc7916391a49.png">
<img src="https://user-images.githubusercontent.com/56839789/107373765-2b37d100-6ae7-11eb-8be8-2f49a6a317bb.png">
<img src="https://user-images.githubusercontent.com/56839789/107374283-b4e79e80-6ae7-11eb-8ee9-cd43dd49403a.png">

I try to make my views as shorter as possible, to be able to do that i use differents components

Example GalleryView :
```js
<template>
  <div>
    <div class="myContainer">
      <TitreDePage :titre="$t('Titre.Galeries')" />
      <GalerieMenu
        v-bind:imageInGaleries="getGaleries"
        v-bind:classes="classes"
      />
    </div>
    <Footer />
  </div>
</template>
```



## Nodemailer
Use to send email by the contact page.
The photographer (client) will receive a nice template email (see screenshot)

```js
const nodemailer = require('nodemailer');
const getMailTemplate = require('../modules/templateMail')
require('dotenv').config();

const mailRouter = async function (app) {
    await app.post("/mail/", function (req, res) {
        const subject = req.body.subject
        const message = req.body.message
        const name = req.body.name
        const email = req.body.email
        //gmail acces
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
        // Mail object
        const mailOptions = {
            from: email,
            name: name,
            to: process.env.GMAIL_DEST,
            subject: subject,
            html: getMailTemplate.emailTemplate(name, email, subject, message)
        };
        // send email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send('error sending email')
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('email sent')
            }
        });
    })
}
module.exports = mailRouter;
```

## Multer
Example of filter to allow only image: <br/>
```js
   // filter allowed only image
    const fileFilter = function (req, file, cb) {
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"]
        if (!allowedTypes.includes(file.mimetype)) {
            const error = new Error("Wrong file type")
            error.code = "WRONG_FILE_TYPE"
            return cb(error, false)
        }
        // it's ok
        cb(null, true)
    }
```
Middleware to use it: <br/>
```js
    // middleware to handle file format
    app.use(function (err, req, res, next) {
        if (err.code === "WRONG_FILE_TYPE") {
            res.send("Error only images are allowed")
        }
        return
    })
```

## Multilingual
The website is multilingual, i use vue-i18n<br/>
<img height="300" src="https://user-images.githubusercontent.com/56839789/107379399-2a09a280-6aed-11eb-84f0-eebc0490364e.gif">
<br/>
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

## Vuex

Example of actions and mutation to store the token in state:

- Actions:
```js
ADD_TOKEN: (context, token) => {
    context.commit("ADDED_TOKEN", token);
},
```
- Mutations
```js
ADDED_TOKEN: (state, token) => {
    state.token = token;
},
```

- State
```js
let state = {
  token: false,
  name: "",
  id: "",
  contact: [],
};
```
## Vuelidate
<img height="300" src="https://user-images.githubusercontent.com/56839789/107379805-94224780-6aed-11eb-8e0d-af5708632280.gif">

- import vuelidate in the component "SignUpForm.vue".
```js
//vuelidate
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
```

- in export default{}
```js
mixins: [validationMixin],
```
- and:
```js
 // vuelidate
  validations: {
    form: {
      email: {
        required,
        email: email,
      },
      name: {
        required,
        minLength: minLength(3),
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
```
- finnaly in methods{}
```js
validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
},
```

- Example for email:
```js
<b-form-group
  id="input-group-1"
  label="Email address:"
  label-for="input-1"
  invalid-feedback="Valid email is required">
```

- then

```js
<b-form-input
  :state="validateState('email')"
  id="input-1"
  v-model="$v.form.email.$model"
  type="email"
  placeholder="Enter email">
</b-form-input>
```
- tips: to reset vuelidate
```js
this.$v.$reset()
```

## Test
![Capture d’écran 2021-02-09 à 15 21 21](https://user-images.githubusercontent.com/56839789/107376682-77d0db80-6aea-11eb-89ec-acfdd7abc95c.png)<br/>
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
![Capture d’écran 2021-02-09 à 15 20 07](https://user-images.githubusercontent.com/56839789/107376535-4bb55a80-6aea-11eb-9084-4d4bdc07b449.png)
<br/>
* Travis Ci
* Coverall.io

## Security
* XSS: (cross-site scripting) all exterior data are check
* CSRF: (Cross Site Request Forgery) the admin route are protected by a midlleware checking token (JWT)
* Injection flaws: all input are properly filtered, plus the framework is secure
* Token, Hash Password (B-crypt), middleware, handle file format, check input...


## Screenshots
<br/>
Gallery:
<img width="500" src="https://user-images.githubusercontent.com/56839789/107383207-0fd1c380-6af1-11eb-9b4b-4c7133ff17a5.gif">

<br/>
Contact - multilingual:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 07 32" src="https://user-images.githubusercontent.com/56839789/107383859-b5853280-6af1-11eb-9238-7d8c3dfb1aa8.gif">

<br/>
Admin - edit gallery:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 08 42" src="https://user-images.githubusercontent.com/56839789/107362250-cd03f180-6ad8-11eb-9c0a-fd1d8ee063ed.png">

<br/>
Super admin - edit admin:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 09 17" src="https://user-images.githubusercontent.com/56839789/107362289-d8571d00-6ad8-11eb-9dc9-6e8c93aabc9b.png">

<br/>
Template email:
<img width="500" alt="Capture d’écran 2021-02-09 à 12 10 36" src="https://user-images.githubusercontent.com/56839789/107362328-e3aa4880-6ad8-11eb-9bbb-9060fe86abf0.png">

<br/>
Admin part:
<img width="500" src="https://user-images.githubusercontent.com/56839789/107380846-8ae5aa80-6aee-11eb-9732-ebba0e6b5631.gif">

## Status
Project is:  _Finish_


## Contact	
- [![LinkedIn][linkedin-shield]][linkedin-url] 	
- revolalex@gmail.com


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexandre-rodrigueza/


