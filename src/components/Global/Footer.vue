<template>
      <footer class="footer-distributed">
      <div class="footer-right">
        <a href="https://www.instagram.com/yann_crochet_photographe/">
            <img src="@/assets/insta.png" alt="instagram" width="30px;"/>
        </a>
      </div>
      <div class="footer-left">
        <p class="footer-links">
          <a id="copyright" href="https://revol-cv.netlify.app/">
            AR &copy; 2020
          </a>
          <a href="/">Accueil</a>
          <a href="/biographie">Biographie</a>
          <a href="actualités">Actualités</a>
          <a href="/galeries">Galeries</a>
          <a href="/contact">Contact</a>
        </p>
      </div>
    </footer>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style>

/* Footer */
.footer-distributed {
  background-color: #6c757d;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 5px 10px;
  margin-top: 5vh;
}

/* allow the footer to stay at bottom */
/* @media screen and (min-width: 800px) and (max-width: 1050px) {
  .footer-distributed {
    position: absolute;
    bottom: 0;
  }
} */


.footer-distributed .footer-left p {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}

/* Footer links */
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
#copyright{
  color: rgb(255, 255, 255);
  text-align: center;
  font-weight: bolder;
  margin: 7px;
}

</style>