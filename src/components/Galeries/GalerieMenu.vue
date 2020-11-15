<template>
  <div :class="classes.container">
    <div :class="classes.box" v-for="image in imageInGaleries" :key="image.caption">
      <a :href="image.href"
        ><img
          :alt="image.alt"
          :src="image.src"
        />
        <div class="caption">{{image.caption}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalerieMenu",
  props:{
    imageInGaleries: Array,
    classes: Object
  },
};
</script>

<style>
/* Responsive placing of the boxes*/
.galeriesContainer {
  padding: 1% 1% 0% 1%;
  background: white;
}

.galeriesContainer:after {
  content: "";
  display: inline-block;
  width: 100%;
}

/* Inside the box */
.galeriesBox {
  width: 96%;
  margin: 2%;
  padding-bottom: 96%;
  height: 0;
  position: relative;
  float: left;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.galeriesBox:after {
  content: "";
  position: relative;
  background-color: #000;
  opacity: 0;
  z-index: 55;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -ms-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}

.galeriesBox:hover::after {
  background-color: #000;
  opacity: 0.4;
}

.galeriesContainer .galeriesBox .caption {
  position: absolute;
  z-index: 60;
  width: 90%;
  margin-left: 5%;
  top: 50%;
  -webkit-transform: scale(3);
  -moz-transform: scale(3);
  -ms-transform: scale(3);
  -o-transform: scale(3);
  transform: scale(3);
  text-align: center;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -ms-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  font: 1.4em normal Arial, sans-serif;
  color: #fff;
  opacity: 0;
}

.galeriesBox:hover .caption {
  -webkit-transform: scale(1) translate(0%, -50%);
  -moz-transform: scale(1) translate(0%, -50%);
  -ms-transform: scale(1) translate(0%, -50%);
  -o-transform: scale(1) translate(0%, -50%);
  transform: scale(1) translate(0%, -50%);
  opacity: 1;
}

.galeriesBox img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 50;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -ms-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}

.galeriesBox:hover img {
  height: 120%;
}

/* media changes, changing number of columns */
@media all and (min-width: 350px) {
  .galeriesContainer .galeriesBox {
    width: 48%;
    margin: 1%;
    padding-bottom: 48%;
  }
}

@media all and (min-width: 800px) {
  .galeriesContainer .galeriesBox {
    width: 31.3333%;
    padding-bottom: 30%;
  }
}

@media all and (min-width: 1200px) {
  .galeriesContainer .galeriesBox{
    width: 31%;
    padding-bottom: 30%;
  }
}


/*************** Actualites ****************/
.actuContainer {
  padding: 1% 1% 1% 1%;
  background: white;
  padding-top: 5vh;
}

.actuContainer:after {
  content: "";
  display: inline-block;
  width: 100%;
}

/* Inside the box */
.actuBox {
  width: 96%;
  margin: 2%;
  padding-bottom: 96%;
  height: 0;
  position: relative;
  float: left;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.actuBox:after {
  content: "";
  position: relative;
  background-color: #000;
  opacity: 0;
  z-index: 55;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -ms-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}

.actuBox:hover::after {
  background-color: #000;
  opacity: 0.4;
}

.actuContainer .actuBox .caption {
  position: absolute;
  z-index: 60;
  width: 90%;
  margin-left: 5%;
  top: 50%;
  -webkit-transform: scale(3);
  -moz-transform: scale(3);
  -ms-transform: scale(3);
  -o-transform: scale(3);
  transform: scale(3);
  text-align: center;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -ms-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  font: 1.4em bold Arial, sans-serif;
  color: #fff;
  opacity: 0;
}

.actuBox:hover .caption {
  -webkit-transform: scale(1) translate(0%, -50%);
  -moz-transform: scale(1) translate(0%, -50%);
  -ms-transform: scale(1) translate(0%, -50%);
  -o-transform: scale(1) translate(0%, -50%);
  transform: scale(1) translate(0%, -50%);
  opacity: 1;
}

.actuBox img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 50;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -ms-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
}

.actuBox:hover img {
  height: 120%;
}

/* media changes, changing number of columns */
@media all and (min-width: 350px) {
  .actuContainer.actuBox {
    width: 48%;
    margin: 1%;
    padding-bottom: 48%;
  }
}

@media all and (min-width: 800px) {
  .actuContainer .actuBox {
    width: 45%;
    padding-bottom: 30%;
  }
}

@media all and (min-width: 1200px) {
  .actuContainer .actuBox {
    width: 45%;
    padding-bottom: 30%;
    margin: 2%;
  }
}
</style>