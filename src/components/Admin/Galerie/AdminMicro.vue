<template>
  <b-tab title="Micro">
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
      <div id="pubierAdminBtn">
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
          <!-- <tr v-for="item in items" v-bind:key="item.filename">
            <td>{{ item.id }}</td>
            <td id="tdFilename">{{ item.filename }}</td>
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
          </tr> -->
        </tbody>
      </table>
    </div>
  </b-tab>
</template>

<script>
import axios from "axios"
import PhotoPicker from "@/components/Admin/Photo/PhotoPicker";
export default {
  name: "AdminMicro",
  components: {
    PhotoPicker,
  },
  data() {
    return {
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
  methods: {
    /**
     * @param e Boolean
     * @summary allow us to show the message alert format
     */
    imgFormatWrong(e) {
      if (e === true) {
        this.showFormatAlert = true;
      }
    },
    /**
     * @param file
     * @summary allow us to receive the file upload
     */
    photoWasAdded(file) {
      this.photo_image = file;
    },
    async publierWasClickerd(evt) {
      evt.preventDefault();
      const formData = new FormData();
      formData.append("file", this.photo_image);
      await axios
        .post("http://localhost:8080/caroussel/", formData, this.yourConfig)
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
};
</script>

<style>
#centerDivAdmin {
  display: flex;
  justify-content: center;
  align-items: center;
}
#pubierAdminBtn {
  text-align: center;
  vertical-align: middle;
}
</style>