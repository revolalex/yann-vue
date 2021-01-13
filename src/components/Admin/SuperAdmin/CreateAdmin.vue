<template>
  <div id="myform">
    <b-button ref="toggleBtn" v-b-toggle.collapse-1 variant="primary"
      >Créer un Admin</b-button
    >

    <b-collapse id="collapse-1" class="mt-2">
      <!-- handle error -->
      <b-alert v-model="showPassAlert" variant="danger" dismissible>
        <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Erreur
        password incorrect
      </b-alert>

      <b-alert v-model="showNameAlert" variant="danger" dismissible>
        <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Erreur
        nom inconnue
      </b-alert>

      <b-alert v-model="showEchecAlert" variant="danger" dismissible>
        <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon>
        Information incorrect
      </b-alert>

      <b-form @submit="onSubmit" v-if="show">
        <!-- name -->
        <b-form-group
          id="input-group-1"
          label="Nom:"
          label-for="input-1"
          invalid-feedback="Nom éxigé, minimun 3 charactères"
        >
          <b-form-input
            :state="validateState('name')"
            id="input-1"
            v-model="$v.form.name.$model"
            placeholder="Entrer nom"
          ></b-form-input>
        </b-form-group>

        <!-- email -->
        <b-form-group
          id="input-group-2"
          label="Email:"
          label-for="input-2"
          invalid-feedback="Un email valide est éxigé"
        >
          <b-form-input
            :state="validateState('email')"
            id="input-2"
            v-model="$v.form.email.$model"
            type="email"
            placeholder="Entrer email"
          ></b-form-input>
        </b-form-group>

        <!-- password -->
        <b-form-group
          id="input-group-3"
          label="Password:"
          label-for="input-3"
          invalid-feedback="Password éxigé, minimun 8 characteres"
        >
          <b-form-input
            :state="validateState('password')"
            id="input-3"
            v-model="$v.form.password.$model"
            required
            placeholder="Entrer password"
          ></b-form-input>
        </b-form-group>

        <!-- url -->
        <b-form-group
          id="input-group-4"
          label="Url:"
          label-for="input-4"
          invalid-feedback="Url éxigé, minimun 8 characteres"
        >
          <b-form-input
            :state="validateState('url')"
            id="input-4"
            v-model="$v.form.url.$model"
            required
            placeholder="Entrer image url"
          ></b-form-input>
        </b-form-group>

        <!-- is_super_admin -->
        <b-form-group
          type="number"
          min="0"
          max="1"
          id="input-group-5"
          label="SuperAdmin:"
          label-for="input-5"
          invalid-feedback="Seulement 1 ou 2 accepter"
        >
          <b-form-input
            :state="validateState('is_super_admin')"
            id="input-5"
            v-model="$v.form.is_super_admin.$model"
            required
            placeholder="1 = superAdmin, 0 = admin"
          ></b-form-input>
        </b-form-group>
        <!-- button -->
        <b-button type="submit" variant="warning"> Créer Admin </b-button>
      </b-form>
    </b-collapse>
  </div>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, minLength, email, between } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "SignInForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        url: "",
        is_super_admin: "",
      },
      yourConfig: {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      },
      show: true,
      // will allow the ok sentence to be visible
      showNameAlert: false,
      showPassAlert: false,
      showEchecAlert: false,
    };
  },
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
      url: {
        required,
        minLength: minLength(8),
      },
      is_super_admin: {
        required,
        between: between(0, 1),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    toggleBtnClick() {
      this.$refs.toggleBtn.click();
    },

    async onSubmit(evt) {
      evt.preventDefault();
      await axios
        .post("http://localhost:8080/signup/", this.form, this.yourConfig)
        .then((result) => {
          if (result.data.affectedRows === 1) {
            this.$emit("addNewAdmin", true);
            setTimeout(() => {
              this.toggleBtnClick();
            }, 3000);
          } else {
            if (result.status == 203) {
              alert(result.data);
            }
          }
        })
        .catch((error) => {
          alert(error);
        });
      this.onReset();
    },
    onReset() {
      // Reset our form values
      this.form.password = "";
      this.form.name = "";
      this.form.email = "";
      this.form.url = "";
      this.form.is_super_admin = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.$v.$reset();
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
#myform {
  padding: 5% 25% 5% 25%;
}
.myCenter {
  text-align: center;
}
</style>