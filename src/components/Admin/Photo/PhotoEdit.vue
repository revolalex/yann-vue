<template>
  <div class="myPhotoContainer">
    <b-alert v-model="showError" variant="danger" dismissible>
      <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Erreur
    </b-alert>
    <b-alert v-model="showSuccess" variant="success" dismissible>
      <b-icon icon="emoji-smile" variant="success" scale="1.3"></b-icon> Succés
    </b-alert>
    <b-alert v-model="showFormatAlert" variant="danger" dismissible>
      <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Only
      jpeg, png, gif, image format are allowed
    </b-alert>

    <h4>
      <b-form-input
        id="titlearea"
        v-model="title"
        placeholder="Saisir un titre  minimun 3 charactères..."
        rows="1"
        max-rows="1"
        :state="title.length >= 3"
      ></b-form-input>
    </h4>

    <b-card>
      <PhotoPicker
        v-on:formatAlert="imgFormatWrong"
        v-on:inputImg="photoWasAdded"
        v-if="show"
      />
      <b-form-textarea
        data-test="photoTexteArea"
        id="textarea"
        v-model="texte"
        placeholder="Saisir un texte  minimun 30 charactères..."
        rows="3"
        max-rows="6"
        :state="texte.length >= 30"
      ></b-form-textarea>
      <template #footer>
        <small id="leftText" class="text-muted">{{ dateActuel }}</small>
      </template>
    </b-card>
    <br />
    <div id="publishButton">
      <b-button variant="info" @click="publierWasClickerd">
        <b-icon icon="camera" variant="light" scale="1"></b-icon>
        Publier
      </b-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker.vue";
export default {
  name: "PhotoCard",
  components: {
    PhotoPicker,
  },
  data() {
    return {
      texte: "",
      title: "",
      photo_image: "",
      galerie_name: "",
      showSuccess: false,
      showError: false,
      show: true,
      showFormatAlert: false,
      yourConfig: {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      },
    };
  },
  computed: {
    dateActuel() {
      var d = new Date();
      var n = d.toLocaleDateString();
      return n;
    },
  },

  methods: {
    photoWasAdded(file) {
      this.photo_image = file;
      console.log(this.photo_image);
    },
    imgFormatWrong(e) {
      if (e === true) {
        this.showFormatAlert = true;
      }
    },

    async publierWasClickerd(evt) {
      evt.preventDefault();

      const formData = new FormData();
      formData.append("texte", this.texte);
      formData.append("galerie_name", this.galerie_name);
      formData.append("title", this.title);
      formData.append("date", this.dateActuel);
      formData.append("file", this.photo_image);

      await axios
        .post("http://localhost:8080/archive/", formData, this.yourConfig)
        .then((result) => {
          console.log("RESULT", result);
          this.showSuccess = true;

          // Trick to reset/clear native browser picture validation state
          this.show = false;
          this.$nextTick(() => {
            this.show = true;
            this.texte = "";
            this.title = "";
          });
        })
        .catch((error) => {
          console.log(error);
          this.showError = true;
        });
    },
  },
};
</script>

<style>
#publishButton {
  display: flex;
  justify-content: center;
  align-items: center;
}
.myPhotoContainer {
  padding: 1% 20% 1% 20%;
}
#leftText {
  text-align: start;
}
#titlearea {
  font-size: 1.1em;
}
#textarea {
  margin-top: 7px;
}
@media screen and (max-width: 600px) {
  .myPhotoContainer {
    padding: 1% 10% 1% 10%;
  }
}
</style>