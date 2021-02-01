<template>
  <div id="myform">
    <b-alert v-model="showPassAlert" variant="danger" dismissible>
      <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Erreur
      password incorrect
    </b-alert>

    <b-alert v-model="showNameAlert" variant="danger" dismissible>
      <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Erreur
      nom inconnue
    </b-alert>
     <b-alert v-model="showEmailAlert" variant="danger" dismissible>
      <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Erreur
      Email inconuue
    </b-alert>

    <b-alert v-model="showEchecAlert" variant="danger" dismissible>
      <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon>
      Information incorrect
    </b-alert>

    <h4 class="myCenter">Merci de compléter le formulaire pour se connecter</h4>
    <h6 class="myCenter">
      Accès restreint, seul l'administrateur est autorisé
    </h6>
    <br />

    <b-form @submit="onSubmit" v-if="show">
      <!-- name -->
      <b-form-group
        id="input-group-1"
        label="Nom:"
        label-for="input-1"
        invalid-feedback="Nom éxigé, minimun 3 charactères"
      >
        <b-form-input
          required
          :state="validateState('name')"
          id="input-1"
          v-model="$v.form.name.$model"
          placeholder="Entrer votre nom"
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
          required
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
          type="password"
          :state="validateState('password')"
          id="input-3"
          v-model="$v.form.password.$model"
          required
          placeholder="Entrer password"
        ></b-form-input>
      </b-form-group>
      <!-- button -->
      <b-button
        :disabled="isDisable"
        type="submit"
        variant="info"
      >
        Se connecter
      </b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  name: "SignInForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      show: true,
      // will allow the ok sentence to be visible
      showNameAlert: false,
      showPassAlert: false,
      showEmailAlert: false,
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
    },
  },
  computed:{
    isDisable(){
      if (this.form.name.length > 2 && this.form.email.length > 7 && this.form.password.length > 7) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    async onSubmit(evt) {
      evt.preventDefault();
      await axios
        .post(process.env.VUE_APP_URL_API+"/signin/", this.form)
        .then((result) => {
          if (result.data === "Sorry, password incorrect") {
            this.showPassAlert = true;
            this.$v.$reset();
          }
          if (result.data === "Sorry, name incorrect") {
            this.showNameAlert = true;
            this.$v.$reset();
          }
           if (result.data === "Sorry, email incorrect") {
            this.showEmailAlert = true;
            this.$v.$reset();
          }
          if (result.data.auth === true) {
            this.$store.dispatch("AUTH_TRUE");
          }
          if (result.data.token !== "") {
            this.$store.dispatch("ADD_TOKEN", result.data.token);
          }
          if (result.data.id !== "") {
            this.$store.dispatch("SET_ID_USER", result.data.id);
          }
          if (result.data.name !== "") {
            this.$store.dispatch("SET_NAME_USER", result.data.name);
          }
          if (result.data.url !== "") {
            this.$store.dispatch("SET_URL_IMG_USER", result.data.url);
          }
          if (result.data.is_super_admin !== "") {
            this.$store.dispatch(
              "SET_SUPERADMIN_USER",
              result.data.is_super_admin
            );
          }
          if (result.data.auth === true && result.data.token !== "") {
            this.$router.push("/admin/dashboard");
          } else {
            console.log(result.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.onReset();
    },
    onReset() {
      // Reset our form values
      this.form.password = "";
      this.form.name = "";
      this.form.email = "";
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