<template>
  <div class="myPhotoContainer">
    <div
      v-for="(post, postIndex) in postInPhoto"
      :key="postIndex"
      class="padding-bottom-hover"
    >
      <b-card id="cardImage">
        <h2 id="cardPhotoTitle">{{ post.title }}</h2>
        <img :src="getImgSrc(post.filename)" />
        <div class="myCardDiv">
          <b-card-text>{{ post.text }}</b-card-text>
          <b-input-group>
            <b-form-rating
              v-model="rating[postIndex]"
              variant="info"
              show-value
              show-value-max
            ></b-form-rating>
            <b-input-group-prepend>
              <b-button
                :disabled="!rating[postIndex] > 0 && !rating[postIndex] < 6"
                ref="rateB"
                variant="info"
                @click="voteRating(post.filename, postIndex, post)"
                >Voter</b-button
              >
            </b-input-group-prepend>
          </b-input-group>
        </div>
        <b-card-text class="myCardDiv" ariant="danger" id="average"
          >Moyenne:
          <span>{{ averages[postIndex] }}</span>
        </b-card-text>
        <b-alert
          v-model="showRatingDone[postIndex]"
          variant="success"
          dismissible
        >
          Success Vote
        </b-alert>
        <template #footer>
          <small id="leftText" class="text-muted">{{ post.date }}</small>
        </template>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
/**
 * @module component - PhotoCard
 * @param {array} - postInPhoto
 */
export default {
  name: "PhotoCard",
  props: {
    postInPhoto: Array,
  },
  data() {
    return {
      rating: [],
      // use to disabled the right button
      showRatingDone: [],
      averages: [],
    };
  },
  methods: {
    /**
     * @param filename
     * @returns the image links
     */
    getImgSrc(filename) {
      return require(`@/assets/uploads/images/${filename}`);
    },

    /**
     * @summary post the rating and get the average rating
     * @param filename
     * @param postIndex
     */
    async voteRating(filename, postIndex) {
      // succes text and disabled button
      this.$refs.rateB[postIndex].disabled = true;
      this.$refs.rateB[postIndex].innerText = "Succés";

      // succes alert
      this.showRatingDone.push(postIndex);
      this.showRatingDone[postIndex] = true;

      let rateObject = {
        filename: filename,
        rating: this.rating[postIndex],
      };

      await axios
        .post("http://localhost:8080/rating/", rateObject)
        .then((result) => {
          console.log(
            "result",
            result.data[0]["CAST(AVG(rating) AS decimal(10,2))"]
          );
          this.averages.push(postIndex);
          this.averages[postIndex] =
            result.data[0]["CAST(AVG(rating) AS decimal(10,2))"];
        })
        .catch((error) => {
          console.log(error);
        });

      // this.rating = "";
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
  max-height: 600px;
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
#average {
  color: #14a3b8;
  text-align: end;
}
#average span {
  font-weight: 700;
}
.myCardDiv {
  width: 80%;
  margin: auto;
}
</style>