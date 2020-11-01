<template>
  <div>
    <h1 class="titrePage">Biographie</h1>
    <div class="aproposContainer">
      <!-- Card -->
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
            La nature est une source inépuisable d'inspiration photographique.
            C'est un théatre vivant, qui met en scène la faune et la flore.
            Chaque écosyste révèle ses petits secrets à qui sait les observer,
            les écouter et les apprécier. Un enchantement permanent de tous les
            sens que je tente de vous dévoiler… Un plaisir intense et
            irremplaçable à mes yeux!
          </p>
        </div>
      </div>

      <!-- Blabla -->
      <div class="blabla">
        <h3>Portrait d'un amoureux de la Nature :</h3>
        <br />
        <p>
          « Promeneur inspiré, naturaliste sensible dans la lignée de Rousseau
          et de Jean-Henri Fabre, Yann Crochet n’est pas seulement un prodigieux
          photographe animalier, un témoin des métamorphoses de la nature. Il
          révèle les beautés secrètes, si proches, que nous ne savons plus
          regarder : l’œil traqué d’un épervier blessé, celui d’un pigeon
          distrait, d’une mésange insolente, d’un héron patient, d’un cygne en
          majesté ou d’une libellule aristocratique de Bagatelle. « La netteté
          de l’œil, pour moi, est primordiale », explique le photographe. Cette
          netteté est la clé de sa sincérité. Yann Crochet nous démontre que la
          nature nous dévisage, qu’elle nous scrute dans le regard d’un sanglier
          de la forêt de Compiègne, d’un jeune cerf de Chantilly ou d’un merle,
          cour Saint-Emilion. Il célèbre l’émotion de la rencontre avec l’animal
          sauvage, l’insecte aérien ou l’oiseau défiant. Davantage qu’un hommage
          à la création, son art est une communion. Aragon souhaitait que toute
          démarche de l’esprit « soit un pas et non une trace ». Les pas de cet
          enchanteur avisé nous guident sur les traces du vivant ».
          <br /><br />
          Ainsi, depuis quelques années, Yann reste toujours en alerte. Ce
          photographe tout terrain capture fleurs, cailloux, écorces,
          champignons, rivières, tout un éventail de matières et de couleurs.
          “Derrière l’objectif, raconte-t-il, il y a l’oeil certes mais pas
          seulement; il y a aussi le coeur et la tête. Voir et donner à voir, à
          réfléchir aussi ! Tout est lié : nos activités, nos comportements se
          répercutent sur la vie de la forêt, la faune, la flore. Regarder,
          c’est prendre conscience que tout est fragile, éphémère,
          interdépendant.”
          <br /><br />
          À l’aube du 21ème siècle, l’importance de la préservation de la nature
          et de la faune s’impose comme une évidence. La majorité d’entre nous
          est déjà consciente que la biodiversité et une faune préservée
          enrichissent notre environnement.
          <br />
        </p>
        <p>
          Exaltez la biodiversité de la nature dans toute sa beauté sauvage est
          une composante essentielle du développement durable.
        </p>
      </div>
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
  name: "Apropos",
  methods: {},
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
.aproposContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: justify;
  padding-bottom: 10vh;
}

.blabla {
  max-width: 700px;
  padding: 16px;
  margin: 6px;
}

.titreBio {
  color: #ffffff;
  background: #ffffff;
  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;
  text-align: center;
  font-size: 5em;
  padding-bottom: 5vh;
}

@media screen and (max-width: 600px) {
  .blabla {
    padding-right: 5vh;
    padding-left: 5vh;
  }
}
</style>