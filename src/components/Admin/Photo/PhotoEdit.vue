<template>
  <div class="myPhotoContainer">
    <div class="mysuperAdminCont">
      <b-alert v-model="showError" variant="danger" dismissible>
        <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Erreur
      </b-alert>
      <b-alert v-model="showSuccess" variant="success" dismissible>
        <b-icon icon="emoji-smile" variant="success" scale="1.3"></b-icon>
        Succés
      </b-alert>
      <b-alert v-model="showFormatAlert" variant="danger" dismissible>
        <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon> Only
        jpeg, png, gif, image format are allowed
      </b-alert>
      <h1 class="adminTitle">Photo du mois</h1>

      <b-card>
        <h6>
          <b-form-group
            id="input-group-1"
            label="Titre:"
            label-for="input-1"
            invalid-feedback="Saisir un titre  minimun 3 charactères..."
          >
            <b-form-input
              required
              :state="validateState('title')"
              id="input-1"
              v-model="$v.title.$model"
              placeholder="Entrer un titre"
            ></b-form-input
          ></b-form-group>
        </h6>
        <PhotoPicker
          v-on:formatAlert="imgFormatWrong"
          v-on:inputImg="photoWasAdded"
          v-if="show"
        />
        <b-form-group
          id="input-group-2"
          label="Texte:"
          label-for="input-2"
          invalid-feedback="Saisir un texte  minimun 30 charactères..."
        >
          <b-form-textarea
            id="input-2"
            data-test="photoTexteArea"
            class="textarea"
            required
            :state="validateState('texte')"
            v-model="$v.texte.$model"
            placeholder="Entrer un texte"
            rows="3"
            max-rows="6"
          ></b-form-textarea
        ></b-form-group>
        <template #footer>
          <small id="leftText" class="text-muted">{{ dateActuel }}</small>
        </template>
      </b-card>
      <br />
      <div id="publishButton">
        <b-button variant="info" @click="publierWasClickerd" v-if="showButton">
          <b-icon icon="camera" variant="light" scale="1"></b-icon>
          Publier
        </b-button>
      </div>
      <br />
      <TablePhoto
        v-bind:photos="photos"
        v-on:deleteClicked="deleteImgClicked"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker.vue";
import TablePhoto from "./TablePhoto";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
/**
 * @module component - PhotoCard
 */
export default {
  mixins: [validationMixin],
  name: "PhotoCard",
  components: {
    PhotoPicker,
    TablePhoto,
  },
  data() {
    return {
      texte: "",
      title: "",
      photo_image: "",
      galerie_name: "",
      photos: [],
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
  // vuelidate
  validations: {
    title: {
      required,
      minLength: minLength(3),
    },
    texte: {
      required,
      minLength: minLength(30),
    },
  },
  computed: {
    /**
     * @returns date: jours, mois, année, heures, minutes, secondes - JJMMAAAAHHMMSS
     */
    dateActuel() {
      var d = new Date();
      var n = d.toLocaleDateString();
      return n;
    },
    showButton() {
      if (
        this.title != "" &&
        this.photo_image != "" &&
        this.texte.length > 29
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.getdata();
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v[name];
      return $dirty ? !$error : null;
    },
    photoWasAdded(file) {
      this.photo_image = file;
    },
    imgFormatWrong(e) {
      if (e === true) {
        this.showFormatAlert = true;
      }
    },
    async getdata() {
      await axios
        .get(process.env.VUE_APP_URL_API + "/archive/")
        .then((result) => {
          this.photos = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
        .post(
          process.env.VUE_APP_URL_API + "/archive/",
          formData,
          this.yourConfig
        )
        .then((result) => {
          if (result.data.affectedRows === 1) {
            this.showSuccess = true;
            // Trick to reset/clear native browser picture validation state
            this.show = false;
            this.$nextTick(() => {
              this.show = true;
              this.texte = "";
              this.title = "";
            });
            this.getdata();
            this.$v.$reset();
          } else {
            this.showError = true;
          }
        })
        .catch((error) => {
          console.log(error);
          this.showError = true;
        });
    },
    async deleteImgClicked(filename) {
      await axios
        .delete(
          process.env.VUE_APP_URL_API + `/archive/${filename}`,
          this.yourConfig
        )
        .then((result) => {
          if (result.data === "image removed") {
            this.getdata();
          }
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
  margin: auto;
}
#leftText {
  text-align: start;
}
#titlearea {
  font-size: 1.1em;
}
.textarea {
  margin-top: 7px;
}

@media screen and (max-width: 600px) {
  .myPhotoContainer {
    padding: 1% 10% 1% 10%;
  }
}
</style>