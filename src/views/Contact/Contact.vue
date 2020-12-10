<template>
  <div>
    <TitreDePage :titre="$t('Footer.Link.Contact')" />

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 class="form-title">{{$t('Contact.Second.Title')}}</h3>
          <a
            class="instaLogo"
            href="https://www.instagram.com/yann_crochet_photographe/"
            ><img src="https://yanncrochet.com/images/insta3.png" alt="instagram"
          /></a>
          <p>
            {{$t('Contact.Text.Part_1')}}
            <br/>
            {{$t('Contact.Text.Part_2')}}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Form/>

        </div>
      </div>
    </div>
    <div>
      <img
        class="contact-photo"
        src="https://yanncrochet.com/images/contactYC.JPG"
        alt="Yann Crochet"
      />
    </div>
    <Footer />
  </div>
</template>

<script>

import Form from "@/components/Contact/Form";
import TitreDePage from "@/components/Global/TitrePage";
import Footer from "@/components/Global/Footer";
export default {
  name: "Contact",
  components: {
    TitreDePage,
    Footer,
    Form
  },
};
</script>

<style>
.instaLogo img {
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-bottom: 3vh;
}

.col-xs-12.col-sm-12.col-md-12.col-lg-12 {
  padding: 0 20% 0 20%;
}
.row p {
  text-align: justify;
}

.container {
  padding-bottom: 20px;
}

.contact-photo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  max-width: 800px;
  padding-bottom: 20px;
}


.form-title {
  text-align: center;
  padding: 25px;
  font-size: 30px;
  font-weight: 300;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
@media only screen and (max-width: 500px) {

  .form-title {
    font-size: 20px;
  }
}

</style>