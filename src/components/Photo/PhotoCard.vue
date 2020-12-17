<template>
  <div class="myPhotoContainer">
    <div v-for="(post, postIndex) in postInPhoto" :key="postIndex" class="padding-bottom-hover">
      <h2 id="cardPhotoTitle">{{ post.title }}</h2>
      <b-card id="cardImage" :img-src="imgP(post.filename)">
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
            <b-button
            v-bind:disabled="hasVote"
              variant="info"
              @click="voteRating"
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
      hasVote: false
    };
  },
  methods: {
    imgP(e) {
      return require(`@/assets/uploads/images/${e}`);
    },
    // a terminer
    voteRating(e) {
      e.preventDefault();
      sessionStorage.setItem('hasVote', true);
      console.log(sessionStorage.getItem('hasVote'));
      this.hasVote = false
      this.$nextTick(() => {
        this.hasVote = true
      });
    },
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
#cardPhotoTitle{
  text-align: center;
}
#cardImage{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
#cardImage img {
  max-height: 700px;
  width: 100%;
  object-fit: scale-down;
}
.padding-bottom-hover{
  padding-bottom: 20vh;
}
.padding-bottom-hover:hover{
  -webkit-transform: scale(1.005);
  -moz-transform: scale(1.005);
  transform: scale(1.005);
}
#cardImage:hover{
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.38), 0 12px 12px rgba(0, 0, 0, 0.46);
}

</style>