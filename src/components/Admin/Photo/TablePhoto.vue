<template>
  <div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>titre</th>
          <th>Filename</th>
          <th>Image</th>
          <th>Action</th>
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
          <td id="tdBtn">
            <b-button
              pill
              variant="danger"
              v-b-popover.hover.topright="'Est tu sure de vouloir la supprimer'"
              title="Supprimer l'image"
              @click="deleteClicked(item.filename)"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "TablePhoto",
  props: {
    photos: Array,
  },
  methods: {
    getImgSrc(filename) {
      return require(`@/assets/uploads/images/${filename}`);
    },
    deleteClicked(filename) {
      this.$emit("deleteClicked", filename);
    },
  },
};
</script>

<style>
</style>