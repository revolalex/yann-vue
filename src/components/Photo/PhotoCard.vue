<template>
  <div class="myPhotoContainer">
    <h4>Top and Bottom</h4>
    
    <b-card img-src="https://picsum.photos/600/300/?image=25">
      <b-card-text
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        minus hic quae provident sit, cupiditate totam distinctio quos rerum
        neque quasi iure earum dicta! Facilis aliquam, quaerat officiis,
        expedita iste porro temporibus natus adipisci qui reiciendis esse. Sequi
        magnam aperiam esse! Harum repellat voluptatibus vel minus, accusantium
        ratione fugit dolor.</b-card-text
      >
      <b-input-group>
        <b-form-rating
          v-model="rating"
          variant="info"
          show-value
          show-value-max
        ></b-form-rating>
        <b-input-group-prepend>
          <b-button variant="info" @click="rating = null">Voter</b-button>
        </b-input-group-prepend>
      </b-input-group>

      <template #footer>
        <small id="leftText" class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  data() {
    return {
      rating: "3.8",
      average: "4.1",
    };
  },
};
</script>

<style>
.myPhotoContainer {
  padding: 5% 10% 5% 10%;
}
#leftText {
  text-align: start;
}
</style>