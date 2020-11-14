<template>
  <div class="card" style="width: 22rem">
    <img
      src="https://yanncrochet.com/images/PortraitYC.JPG"
      class="card-img-top"
      alt="Yann Crochet"
    />
    <div class="card-body">
      <h4>
        <span
          class="txt-rotate"
          data-period="2000"
          data-rotate='[ "Cultivons notre regard !", "Cultivons notre regard !", "Cultivons notre regard !" ]'
        ></span>
      </h4>
      <p class="card-text">
        La nature est une source inépuisable d'inspiration photographique. C'est
        un théatre vivant, qui met en scène la faune et la flore. Chaque
        écosyste révèle ses petits secrets à qui sait les observer, les écouter
        et les apprécier. Un enchantement permanent de tous les sens que je
        tente de vous dévoiler… Un plaisir intense et irremplaçable à mes yeux!
      </p>
    </div>
  </div>
</template>

<script>

// A propos écriture live
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};
export default {
  name: "CardApropos",
  mounted() {
    let rotate = function () {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
    rotate();
  },
};
</script>

<style>
</style>