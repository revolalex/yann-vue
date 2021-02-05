<template>
  <b-tab title="Jardin">
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
      <div class="pubierAdmin">
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
              placeholder="Ex: moineau, souris"
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
              placeholder="Ex: Jardin d'eden"
              required
            ></b-form-input>
          </b-form-group>
          <PublishButton
            v-if="showBtn"
            v-on:publierClicked="publierWasClicked"
          />
        </b-form>
      </div>
      <br />
      <TablePhoto
        v-bind:photos="items"
        v-bind:path="path"
        v-on:deleteClicked="deleteImgClicked"
      />
    </div>
  </b-tab>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import axios from "axios";
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
import TablePhoto from "@/components/Global/Table/TablePhoto";
import PublishButton from "@/components/Global/Button/PublishButton";
export default {
  name: "AdminJardin",
  mixins: [validationMixin],
  components: {
    PhotoPicker,
    TablePhoto,
    PublishButton,
  },
  data() {
    return {
      form: {
        is_menu: 0,
        galerie_name: "jardin",
        caption: "",
        alt: "",
      },
      path: "galerie/",
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
    imgFormatWrong(e) {
      if (e === true) {
        this.showFormatAlert = true;
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      }
    },
    photoWasAdded(file) {
      this.photo_image = file;
    },
    async getData() {
      await axios
        .get(process.env.VUE_APP_URL_API + "/galerie/jardin/")
        .then((result) => {
          this.items = result.data;
        })
        .catch((error) => {
          console.log(error);
          this.showError = true;
        });
    },
    async publierWasClicked() {
      const formData = new FormData();
      formData.append("file", this.photo_image);
      formData.append("is_menu", this.form.is_menu);
      formData.append("galerie_name", this.form.galerie_name);
      formData.append("caption", this.form.caption);
      formData.append("alt", this.form.alt);
      await axios
        .post(
          process.env.VUE_APP_URL_API + "/galerie/",
          formData,
          this.yourConfig
        )
        .then((result) => {
          if (result.data.affectedRows === 1) {
            this.showSuccess = true;
            // Trick to reset/clear native browser picture validation state
            this.show = false;
            this.$nextTick(() => {
              setTimeout(() => {
                this.getData();
              }, 1000);
              this.form.alt = "";
              this.show = true;
            });
            this.$v.$reset();
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
          process.env.VUE_APP_URL_API + `/galerie/delete/${filename}`,
          this.yourConfig
        )
        .then((result) => {
          if (result.data === "image removed") {
            this.getData();
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
  mounted() {
    this.getData();
  },
};
</script>
<style>
.pubierAdmin {
  text-align: center;
  vertical-align: middle;
}
</style>