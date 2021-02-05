<template>
  <div v-if="photos.length > 0">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>titre</th>
          <th>Filename</th>
          <th>Image</th>
          <th>Action</th>
          <th v-if="average">Moyenne</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in photos" v-bind:key="index">
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
          <td class="tdBtn">
            <b-button
              pill
              variant="danger"
              v-b-popover.hover.topright="'Est tu sure de vouloir la supprimer'"
              title="Supprimer l'image"
              @click="deleteClicked(item.filename)"
              >Delete</b-button
            >
          </td>
          <td v-if="average">
            <b-button
              id="moyenneBtn"
              pill
              variant="info"
              v-b-popover.hover.topright="'Clic pour voir la moyenne des votes'"
              title="Moyenne des votes"
              @click="voteClicked(item.filename, index)"
              >Moyenne {{ voteAvg[index] }}
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TablePhoto",
  props: {
    photos: Array,
    path: String,
    average: Boolean,
  },
  data() {
    return {
      voteAvg: [],
    };
  },
  methods: {
    getImgSrc(filename) {
      return require(`@/assets/uploads/images/${this.path}${filename}`);
    },
    deleteClicked(filename) {
      this.$emit("deleteClicked", filename);
    },
    async voteClicked(filename, index) {
      await axios
        .get(process.env.VUE_APP_URL_API + `/archive/rating/${filename}`)
        .then((result) => {
          this.voteAvg[index] = result.data[0]["CAST(AVG(rating) AS decimal(10,2))"];
          document.getElementById("moyenneBtn").innerHTML=this.voteAvg;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.tdBtn {
  text-align: center;
  vertical-align: middle;
}
</style>