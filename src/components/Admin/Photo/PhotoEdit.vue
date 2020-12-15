<template>
  <div class="myPhotoContainer">
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
      <PhotoPicker v-on:inputImg="photoWasAdded" />
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

    async publierWasClickerd(evt) {
      evt.preventDefault();

      const imageObject = {
        texte: this.texte,
        galerie_name: this.galerie_name,
        title: this.title,
        date: this.dateActuel,
        photo_image: this.photo_image,
      };

      console.log(imageObject);
      console.log(this.photo_image);

      await axios
        .post("http://localhost:8080/archive/", imageObject)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
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