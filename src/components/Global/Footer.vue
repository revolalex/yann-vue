<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <h5 id="ycFooter" class="white-text">
            <a  data-test="instagram-link"
              id="instaFooter"
              href="https://www.instagram.com/yann_crochet_photographe/"
              ><img
                data-test="instagram"
                src="https://yanncrochet.com/images/insta.png"
                alt="instagram"
            /></a>
            {{ $t("Photographer.Name") }}
          </h5>
          <br/>
          <p class="item-1">
            {{ slideTxt }}
          </p>

          <p class="item-2">
            {{ slideTxt2 }}
          </p>

          <p class="item-3">
            {{ slideTxt3 }}
          </p>
        </div>
        <div class="col" data-test="div-link">
          <h5 id="linkFooter" class="white-text">{{ $t("Footer.Link") }}</h5>
          <ul id="ulFooter" >
            <li>
              <router-link data-test="link" class="white-text" to="/">{{
                $t("Footer.Link.Accueil")
              }}</router-link>
            </li>
            <li>
              <router-link class="white-text" to="/biographie">{{
                $t("Footer.Link.Biographie")
              }}</router-link>
            </li>
            <li>
              <router-link class="white-text" to="/actualites">{{
                $t("Footer.Link.Actualites")
              }}</router-link>
            </li>
            <!-- ICI I18N A FAIRE -->
            <li>
              <router-link class="white-text" to="/Photo">Photo du mois
              </router-link>
            </li>
            <li>
              <router-link class="white-text" to="/galeries">{{
                $t("Footer.Link.Galeries")
              }}</router-link>
            </li>
            <li>
              <router-link class="white-text" to="/contact">{{
                $t("Footer.Link.Contact")
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br/>
    <div class="footer-copyright">
      <div class="container white-text">
        © {{ currentYear }}
        {{ $t("Footer.Img.Law") }}
      </div>
      <div class="container white-text">
        <p>
          {{ $t("Footer.Creation") }}
          <a class="white-text" href="https://revol-cv.netlify.app/">
            <img
              id="arLogo"
              src="https://revol-cv.netlify.app/favicon/favicon-32x32.png"
              alt="Alexandre Rodriguez logo"
            />
          </a>
          {{ $t("Footer.MyName") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
/**
 * @module component - Footer
 */
export default {
  name: "Footer",

  computed: {
    currentYear() {
      var date = new Date();
      var year = date.getFullYear();
      return year;
    },
    slideTxt() {
      return this.$t("Footer.Txt.Slider_1");
    },
    slideTxt2() {
      return this.$t("Footer.Txt.Slider_2");
    },
    slideTxt3() {
      return this.$t("Footer.Txt.Slider_3");
    },
  },
};
</script>

<style>
#instaFooter img{
  width: 25px;
}
#instaFooter img:hover {
  transform: scale(1.1);
}
/* change color of li dot */
#ulFooter {
  list-style: none; /* Remove default bullets */
}
#ulFooter li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: white; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
/* on affiche l'image ronde */
#arLogo {
  width: 25px;
  border-radius: 50%;
}
/* on affiche l'image au carré */
#arLogo:hover {
  width: 25px;
  height: 25px;
  border-radius: 0%;
}
.footer {
  padding-top: 20px;
  background-color: #6c757d;
  margin-top: 20px;
}
.white-text {
  color: white;
}
#ycFooter {
  font-family: "Handlee", cursive;
  font-weight: bolder;
}
#linkFooter {
  padding-left: 25px;
}

.item-1,
.item-2,
.item-3 {
  position: absolute;
  display: block;
  color: white;
  width: 60%;

  font-size: 1em;
  padding-left: 10px;

  animation-duration: 30s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.item-1 {
  animation-name: anim-1;
}

.item-2 {
  animation-name: anim-2;
}

.item-3 {
  animation-name: anim-3;
}

@keyframes anim-1 {
  0%,
  8.3% {
    left: -100%;
    opacity: 0;
  }
  8.3%,
  25% {
    left: 3%;
    opacity: 1;
  }
  33.33%,
  100% {
    left: 50%;
    opacity: 0;
  }
}

@keyframes anim-2 {
  0%,
  33.33% {
    left: -100%;
    opacity: 0;
  }
  41.63%,
  58.29% {
    left: 3%;
    opacity: 1;
  }
  66.66%,
  100% {
    left: 50%;
    opacity: 0;
  }
}

@keyframes anim-3 {
  0%,
  66.66% {
    left: -100%;
    opacity: 0;
  }
  74.96%,
  91.62% {
    left: 3%;
    opacity: 1;
  }
  100% {
    left: 50%;
    opacity: 0;
  }
}
</style>