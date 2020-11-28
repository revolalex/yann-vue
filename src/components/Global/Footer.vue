<template>
  <!-- <footer class="footer-distributed">
    <div class="footer-right" data-test="div-instagram">
      <a
        href="https://www.instagram.com/yann_crochet_photographe/"
        data-test="instagram-link"
      >
        <img src="@/assets/insta.png" alt="instagram" width="30px;" />
      </a>
    </div>
    <div class="footer-left" data-test="div-link">
      <p class="footer-links" data-test="link">
        <a id="copyright" href="https://revol-cv.netlify.app/">
          AR &copy; 2020
        </a>
        <a href="/">{{ $t("Footer.Link.Accueil") }}</a>
        <a href="/biographie">{{ $t("Footer.Link.Biographie") }}</a>
        <a href="/actualites">{{ $t("Footer.Link.Actualites") }}</a>
        <a href="/galeries">{{ $t("Footer.Link.Galeries") }}</a>
        <a href="/contact">{{ $t("Footer.Link.Contact") }}</a>
      </p>
    </div>
  </footer> -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col">
          <h5 id="ycFooter" class="white-text">
            {{ $t("Photographer.Name") }}
          </h5>
          <br/>
          <p class="item-1">
            «Promeneur inspiré, naturaliste sensible dans la lignée de Rousseau et de Jean-Henri Fabre»
          </p>

          <p class="item-2">
            Un enchantement permanent de tous les sens que je tente de vous dévoiler…
          </p>

          <p class="item-3">
            Un plaisir intense et irremplaçable à mes yeux!
          </p>
          <!-- <p class="white-text">Chaque écosyste révèle ses petits secrets à qui sait les observer, les écouter et les apprécier. Un enchantement permanent de tous les sens que je tente de vous dévoiler… Un plaisir intense et irremplaçable à mes yeux!</p> -->
        </div>
        <div class="col">
          <h5 id="linkFooter" class="white-text">Liens</h5>
          <ul id="ulFooter">
            <li>
              <router-link class="white-text" to="/">{{
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
    <div class="footer-copyright">
      <div class="container">
        © {{ currentYear }}
        <a class="white-text" href="https://revol-cv.netlify.app/">
          <img
            src="https://revol-cv.netlify.app/favicon/favicon-32x32.png"
            alt=""
        /></a> - Les images de ce site ne sont pas libres de droit et sont soumises au droit d'auteur Français.
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
  },
};
</script>

<style>
/* 
.footer-distributed {
  background-color: #6c757d;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 5px 10px;
}

.footer-distributed .footer-left p {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}


.footer-distributed p.footer-links {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin: 0 0 10px;
  padding: 0;
  transition: ease 0.25s;
}

.footer-distributed p.footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease 0.25s;
}

.footer-distributed .footer-links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-right {
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer-distributed .footer-right a {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition: all 0.25s;
}

.footer-distributed .footer-right a:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.footer-distributed p.footer-links a:hover {
  text-decoration: underline;
}
#copyright {
  color: rgb(255, 255, 255);
  text-align: center;
  font-weight: bolder;
  margin: 7px;
} */

.footer {
  padding-top: 20px;
  background-color:#6C757D;
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
  height: 10%;

  font-size: 1em;

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