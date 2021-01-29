<template>
  <b-tab title="Flore">
    <div>
      <b-alert v-model="showError" variant="danger" dismissible>
        <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon>
        Erreur
      </b-alert>
      <b-alert v-model="showSuccess" variant="success" dismissible>
        <b-icon icon="emoji-smile" variant="success" scale="1.3"></b-icon>
        Succés
      </b-alert>
      <b-alert v-model="showFormatAlert" variant="danger" dismissible>
        <b-icon icon="emoji-angry" variant="danger" scale="1.3"></b-icon>
        Only jpeg, png, gif, image format are allowed
      </b-alert>
      <PhotoPicker
        v-on:formatAlert="imgFormatWrong"
        v-on:inputImg="photoWasAdded"
        v-if="show"
      />
      <div id="pubierAdmin">
        <b-form v-if="show">
          <!-- Description: alt -->
          <b-form-group
            v-if="hasImg"
            id="input-group-1"
            label="Description:"
            label-for="input-1"
            invalid-feedback="Description éxigé, minimun 3 characteres"
          >
            <b-form-input
              :state="validateState('alt')"
              id="input-2"
              v-model="$v.form.alt.$model"
              placeholder="Ex: papillon, mouche"
              required
            ></b-form-input>
          </b-form-group>
          <!-- isMenu: checkbox  show only if has img -->
          <b-form-group v-if="hasImg" id="input-group-2" label-for="input-2">
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.is_menu"
              name="checkbox-1"
              value="1"
              unchecked-value="0"
            >
              Utiliser en tant que Menu
              <b-icon icon="card-image" scale="1" variant="info"></b-icon>
            </b-form-checkbox>
          </b-form-group>
          <!-- Galerie Name  show only if the picture is use for menu galerie-->
          <b-form-group
            v-if="this.form.is_menu == 1"
            id="input-group-3"
            label="Nom de la galerie: (caption)"
            label-for="input-3"
            invalid-feedback="Nom de la galerie éxigé, minimun 3 characteres"
          >
            <b-form-input
              :state="validateState('caption')"
              id="input-3"
              v-model="$v.form.caption.$model"
              placeholder="Ex: Microcosmos"
              required
            ></b-form-input>
          </b-form-group>
          <!-- Button -->
          <b-button
            variant="info"
            @click="publierWasClickerd"
            v-if="showBtn"
            v-b-popover.hover.topright="'Click pour ajouter'"
            title="Ajouter l'image à Home"
          >
            <b-icon icon="camera" variant="light" scale="1"></b-icon>
            Publier
          </b-button>
        </b-form>
      </div>
      <br />
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Filename</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" v-bind:key="item.filename">
            <td>{{ item.id }}</td>
            <td id="tdFilename">
              {{ item.filename }}
              <p v-if="item.is_menu == 1">
                <b-icon variant="info" icon="images"></b-icon>
                Menu
              </p>
            </td>
            <td>
              <img id="tableImg" :src="getImgSrc(item.filename)" />
            </td>
            <td id="tdBtn">
              <b-button
                pill
                variant="danger"
                v-b-popover.hover.topright="
                  'Est tu sure de vouloir la supprimer'
                "
                title="Supprimer l'image"
                @click="deleteImgClicked(item.filename)"
                >Delete</b-button
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </b-tab>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import axios from "axios";
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
export default {
  name: "AdminFlore",
  mixins: [validationMixin],
  components: {
    PhotoPicker,
  },
  data() {
    return {
      form: {
        is_menu: 0,
        galerie_name: "flore",
        caption: "",
        alt: "",
      },
      items: [],
      show: true,
      showFormatAlert: false,
      showError: false,
      showSuccess: false,
      photo_image: "",
      yourConfig: {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      },
    };
  },
  // vuelidate
  validations: {
    form: {
      alt: {
        required,
        minLength: minLength(3),
      },
      caption: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    getImgSrc(filename) {
      return require(`@/assets/uploads/images/galerie/${filename}`);
    },

    imgFormatWrong(e) {
      if (e === true) {
        this.showFormatAlert = true;
      }
    },

    photoWasAdded(file) {
      this.photo_image = file;
    },

    async publierWasClickerd(evt) {
      evt.preventDefault();
      const formData = new FormData();
      formData.append("file", this.photo_image);
      formData.append("is_menu", this.form.is_menu);
      formData.append("galerie_name", this.form.galerie_name);
      formData.append("caption", this.form.caption);
      formData.append("alt", this.form.alt);
      await axios
        .post("http://localhost:8080/galerie/", formData, this.yourConfig)
        .then((result) => {
          if (result.data.affectedRows === 1) {
            this.showSuccess = true;
            // Trick to reset/clear native browser picture validation state
            this.show = false;
            this.$nextTick(() => {
              this.show = true;
            });
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
          `http://localhost:8080/galerie/delete/${filename}`,
          this.yourConfig
        )
        .then((result) => {
          if (result.data === "image removed") {
            axios
              .get("http://localhost:8080/galerie/flore/")
              .then((result) => {
                this.items = result.data;
              })
              .catch((error) => {
                console.log(error);
                this.showError = true;
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  computed: {
    hasImg() {
      if (this.photo_image != "") {
        return true;
      } else {
        return false;
      }
    },
    showBtn() {
      if (this.form.alt.length >= 3 && this.form.is_menu == 0) {
        return true;
      }
      if (
        this.form.alt.length >= 3 &&
        this.form.is_menu == 1 &&
        this.form.caption.length >= 3
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  async mounted() {
    await axios
      .get("http://localhost:8080/galerie/flore/")
      .then((result) => {
        this.items = result.data;
      })
      .catch((error) => {
        console.log(error);
        this.showError = true;
      });
  },
};
</script>

<style>
#centerDivAdmin {
  display: flex;
  justify-content: center;
  align-items: center;
}
#pubierAdmin {
  text-align: center;
  vertical-align: middle;
}
</style>