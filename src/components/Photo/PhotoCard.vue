<template>
  <div class="myPhotoContainer">
    <div
      v-for="(post, postIndex) in postInPhoto"
      :key="postIndex"
      class="padding-bottom-hover"
    >
      <h2 id="cardPhotoTitle">{{ post.title }}</h2>
      <b-card id="cardImage" :img-src="imgP(post.filename)">
        <b-card-text>{{ post.text }}</b-card-text>
        <b-input-group>
          <b-form-rating
            v-model="rating"
            variant="info"
            show-value
            show-value-max
          ></b-form-rating>
          <b-input-group-prepend>
            <b-button
              v-bind:class="{ disabled: current === postIndex }"
              variant="info"
              @click="voteRating(post.filename, postIndex, post)"
              >Voter</b-button
            >
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
      // use to disabled the right button
      current: null,
    };
  },
  methods: {
    imgP(e) {
      return require(`@/assets/uploads/images/${e}`);
    },
    voteRating(filename, postIndex) {
      console.log("FILENAME", filename);
      // help us to disable the right button
      this.current = postIndex
    },
  },
};
</script>

<style>
#leftText {
  text-align: start;
}
#cardPhotoTitle {
  text-align: center;
}
#cardImage {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: rgb(248, 248, 248);
}
#cardImage img {
  padding-top: 60px;
  max-height: 700px;
  width: 100%;
  object-fit: scale-down;
}
.padding-bottom-hover {
  padding-bottom: 20vh;
}
.padding-bottom-hover:hover {
  -webkit-transform: scale(1.005);
  -moz-transform: scale(1.005);
  transform: scale(1.005);
}
#cardImage:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.38), 0 12px 12px rgba(0, 0, 0, 0.46);
}
.selected{
  color:yellow;
}
</style>