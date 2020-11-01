<template>
  <div id="myform">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
    onSubmit(evt) {
      evt.preventDefault();
    },
    onReset(evt) {
      evt.preventDefault();
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