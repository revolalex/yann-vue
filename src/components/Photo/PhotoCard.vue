<template>
  <div class="myPhotoContainer">
    <div v-for="(post, postIndex) in postInPhoto" :key="postIndex">
      <h4>{{ post.title }}</h4>
      <b-card id="cardImage" :img-src='imgP(post.filename)'>
        <!-- <b-card id="cardImage" :img-src='imgP(post.filename)'> -->
        <b-card-text>{{ post.text }}</b-card-text>
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
          <small id="leftText" class="text-muted">{{ post.date }}</small>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  props: {
    postInPhoto: Array,
  },
  data() {
    return {
      rating: "3.8",
      average: "4.1",
    };
  },
  methods: {
    imgP(e){
      return require(`../../assets/uploads/images/${e}`)
    }
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