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
</style>