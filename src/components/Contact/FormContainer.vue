<template>
  <form
    action="https://formspree.io/mgepwdrn"
    method="POST"
    onsubmit="return validateForm()"
  >
    <div class="form-group">
      <label class="form-label" id="nameLabel" for="name"></label>
      <input
        type="text"
        class="form-control"
        id="name"
        name="name"
        :placeholder="yourName"
        tabindex="1"
      />
    </div>
    <div class="form-group">
      <label class="form-label" id="emailLabel" for="email"></label>
      <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        :placeholder="yourEmail"
        tabindex="2"
      />
    </div>
    <div class="form-group">
      <label class="form-label" id="subjectLabel" for="sublect"></label>
      <input
        type="text"
        class="form-control"
        id="subject"
        name="subject"
        :placeholder="subject"
        tabindex="3"
      />
    </div>
    <div class="form-group">
      <label class="form-label" id="messageLabel" for="message"></label>
      <textarea
        rows="6"
        cols="60"
        name="message"
        class="form-control"
        id="message"
        :placeholder="message"
        tabindex="4"
      ></textarea>
    </div>

    <div class="text-center margin-top-25">
      <button type="submit" class="btn btn-mod btn-border btn-large">
        {{$t('Form.Send')}}
      </button>
    </div>
  </form>
</template>
<script>
export default {
    name:"FormContainer",
    computed:{
      yourName(){
        return this.$t('Form.Your.Name')
      },
      yourEmail(){
        return this.$t('Form.Your.Email')
      },
      subject(){
        return this.$t('Form.Subject')
      },
      message(){
        return this.$t('Form.Your.Message')
      }
    }
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