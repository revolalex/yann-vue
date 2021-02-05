<template>
  <div class="myPhotoContainer">
    <div class="mysuperAdminCont">
      <h1 class="adminTitle">Caroussel - Home</h1>
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
      <PhotoPicker
        v-on:formatAlert="imgFormatWrong"
        v-on:inputImg="photoWasAdded"
        v-if="show"
      />
      <div class="pBtn">
        <b-button
          variant="info"
          @click="publierWasClickerd"
          v-if="hasImg"
          v-b-popover.hover.topright="'Click pour ajouter'"
          title="Ajouter l'image à Home"
        >
          <b-icon icon="camera" variant="light" scale="1"></b-icon>
          Publier
        </b-button>
      </div>
      <br />

      <div>
        <TablePhoto
          v-bind:photos="items"
          v-bind:path="path"
          v-on:deleteClicked="deleteFromCarousselClicked"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
import TablePhoto from "@/components/Global/Table/TablePhoto";
import axios from "axios";
export default {
  name: "CarousselEdit",
  components: {
    PhotoPicker,
    TablePhoto,
  },
  data() {
    return {
      path: "caroussel/",
      items: [],
      photo_image: "",
      showSuccess: false,
      showError: false,
      showFormatAlert: false,
      //use for PhotoPicket
      show: true,
      yourConfig: {
        headers: {
          Authorization: "Bearer " + this.$store.state.token,
        },
      },
    };
  },
  computed: {
    hasImg() {
      if (this.photo_image != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    /**
     * @param filename
     * @returns the image links
     */
    getImgSrc(filename) {
      return require(`@/assets/uploads/images/caroussel/${filename}`);
    },
    /**
     * @param file
     * @summary allow us to receive the file upload
     */
    photoWasAdded(file) {
      this.photo_image = file;
    },
    /**
     * @param e Boolean
     * @summary allow us to show the message alert format
     */
       imgFormatWrong(e) {
      if (e === true) {
        this.showFormatAlert = true;
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      }
    },
    async getData() {
      await axios
        .get(process.env.VUE_APP_URL_API + "/caroussel/")
        .then((result) => {
          this.items = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /**
     * @param filename
     * @summary delete image in db and folder
     */
    async deleteFromCarousselClicked(filename) {
      await axios
        .delete(
          process.env.VUE_APP_URL_API + `/caroussel/${filename}`,
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
    async publierWasClickerd(evt) {
      evt.preventDefault();
      const formData = new FormData();
      formData.append("file", this.photo_image);
      await axios
        .post(
          process.env.VUE_APP_URL_API + "/caroussel/",
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
              this.show = true;
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.showError = true;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.pBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
#tableImg {
  height: 70px;
  width: auto;
}
#tdBtn {
  text-align: center;
  vertical-align: middle;
}
.adminTitle {
  text-align: center;
}
</style>