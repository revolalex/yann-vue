<template>
  <div>
    <b-alert v-model="showSuccesLogin" variant="success" dismissible>
      <b-icon icon="emoji-smile" variant="success" scale="1.3"></b-icon> Succes ! Email sent
    </b-alert>

    <b-alert v-model="showEmailAlert" variant="danger" dismissible>
      <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Sending email error
    </b-alert>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          :placeholder="yourName"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          :placeholder="yourEmail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.subject"
          required
          :placeholder="subject"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <textarea
          v-model="form.message"
          rows="6"
          cols="60"
          name="message"
          class="form-control"
          id="message"
          :placeholder="message"
          tabindex="4"
        ></textarea>
      </b-form-group>
      <div class="text-center margin-top-25">
        <b-button
          class="btn btn-mod btn-border btn-large"
          type="submit"
          variant="dark"
          >

  <b-spinner v-if="loader" small role="status"></b-spinner>

          {{ $t("Form.Send") }}</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
// A FAIRE mise en place vuelidate
import axios from "axios";
/**
 * @module component - Form
 */
export default {
  name: "Form",
  data() {
    return {
      form: {
        email: "",
        name: "",
        subject: "",
        message: "",
      },
      show: true,
      showSuccesLogin: false,
      showEmailAlert: false,
      loader: false
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      this.loader = true
      let that = this
      await axios
        .post(`http://localhost:8080/mail`, this.form)
        .then(function (response) {
          if (response.data === "email sent") {
            console.log("succes mail sent");
          }
          if (response.status == 200) {
            that.loader = false
            // will allow the succes alert to be visible
            that.showSuccesLogin = true;
          }
          if (response.status == 500) {
            that.loader = false
            that.showEmailAlert = true;
          }
          // reset the input
          that.form.name = "";
          that.form.email = "";
          that.form.subject = "";
          that.form.message = "";
          // reset vuelidate error (red)
          //   this.$v.$reset();
          that.show = false;
          that.$nextTick(() => {
            that.show = true;
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    yourName() {
      return this.$t("Form.Your.Name");
    },
    yourEmail() {
      return this.$t("Form.Your.Email");
    },
    subject() {
      return this.$t("Form.Subject");
    },
    message() {
      return this.$t("Form.Your.Message");
    },
  },
};
</script>
<style>
.form-group .form-control {
  -webkit-box-shadow: none;
  border-bottom: 1px;
  border-style: none none solid none;
  border-radius: 0;
  border-color: #000;
}

.form-group .form-control:focus {
  box-shadow: none;
  border-width: 0 0 2px 0;
  border-color: #000;
}

textarea {
  resize: none;
}
.margin-top-25 {
  margin-top: 25px;
}

.btn-mod.btn-large {
  height: auto;
  padding: 13px 52px;
  font-size: 15px;
}

.btn-mod.btn-border {
  color: #000000;
  border: 1px solid #000000;
  background: transparent;
}

.btn-mod,
a.btn-mod {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 4px 13px;
  color: #fff;
  background: rgba(34, 34, 34, 0.9);
  border: 1px solid transparent;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  -moz-transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  -o-transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  -ms-transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
  transition: all 0.2s cubic-bezier(0, 0, 0.58, 1);
}

.btn-mod.btn-border:hover,
.btn-mod.btn-border:active,
.btn-mod.btn-border:focus,
.btn-mod.btn-border:active:focus {
  color: #fff;
  border-color: #000;
  background: #000;
  outline: none;
}
@media only screen and (max-width: 500px) {
  .btn-mod.btn-large {
    padding: 6px 16px;
    font-size: 11px;
  }
}
</style>