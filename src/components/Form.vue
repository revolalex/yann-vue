<template>
  <div id="myform">
    <b-form @submit="onSubmit" v-if="show">
      <!-- Name -->
      <b-form-group
        id="input-group-1"
        label="Your Name:"
        label-for="input-1"
        valid-feedback="Thank you!"
        :invalid-feedback="invalidFeedback"
        :state="stateName"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
        description="Restrited acces only admin is allow"
        valid-feedback="Look Good!"
        :invalid-feedback="invalidFeedbackPass"
        :state="statePass"
      >
        <!-- Password -->
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    stateName() {
      return this.form.name.length >= 4;
    },
    statePass() {
      return this.form.password.length >= 4;
    },
    invalidFeedback() {
      if (this.form.name.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "Please enter your login Name.";
    },
    invalidFeedbackPass() {
      if (this.form.password.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "Please enter your password";
    },
  },

  data() {
    return {
      form: {
        password: "",
        name: "",
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      await axios
        .post("http://localhost:8080/signin/", this.form)
        .then((result) => {
          console.log(result.data);
          if (result.data === "password error") {
            alert("password error");
          }
          if (result.data === "Sorry, name incorrect") {
            alert("Name error");
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
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
#myform {
  padding: 5% 15% 5% 15%;
}
</style>